import store from './store';

class WebSocketService {
  private static __instance: WebSocketService;
  private socket: WebSocket | null = null;
  private pingInterval: NodeJS.Timeout | null = null;
  private connectionPromise: Promise<void> | null = null;
  private connectionResolver: (() => void) | null = null;

  static getInstance(): WebSocketService {
    if (!this.__instance) this.__instance = new WebSocketService();
    return this.__instance;
  }

  openConnection(chatId: number, token: string) {
    this.closeConnection();
    const userId = store.getState().user?.id;
    if (!userId) {
      // eslint-disable-next-line
      console.log('No user Id. Cannot open connection without user Id.');
      return;
    }

    const base = 'wss://ya-praktikum.tech/ws/chats';
    // eslint-disable-next-line
    console.log(`Open connetion to ${base}/${userId}/${chatId}/${token}`);
    this.socket = new WebSocket(`${base}/${userId}/${chatId}/${token}`);

    this.connectionPromise = new Promise((resolve) => {
      this.connectionResolver = resolve;
    });

    this.socket.addEventListener('open', this.handleOpen);
    this.socket.addEventListener('message', this.handleMessage);
    this.socket.addEventListener('close', this.handleClose);
    this.socket.addEventListener('error', this.handleError);
  }

  private handleOpen = () => {
    // eslint-disable-next-line 
    console.log('Connection established');
    this.setupPing();
    if (this.connectionResolver) {
      // eslint-disable-next-line 
      console.log('Resolving connection promise');
      this.connectionResolver();
      this.connectionResolver = null;
    }
  };

  private handleMessage = (event: MessageEvent) => {
    // eslint-disable-next-line 
    console.log('Data received', event.data);
    const data = JSON.parse(event.data);
    if (Array.isArray(data)) {
      // eslint-disable-next-line 
      console.log('prev messages', data);
      store.setMessages(data);
    } else {
      // eslint-disable-next-line 
      console.log('new message', data);
      store.addMessage(data);
    }
  };

  private handleClose = (event: CloseEvent) => {
    // eslint-disable-next-line 
    console.log('Connection close', `Code: ${event.code} Reason: ${event.reason}`);
    this.cleanup();
  };

  private handleError = (event: Event) => {
    // eslint-disable-next-line 
    if (event instanceof ErrorEvent) console.log('WebSocket error:', event.message);
  };

  private setupPing() {
    this.cleanupPing();
    this.pingInterval = setInterval(() => {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        // eslint-disable-next-line 
        console.log('Sending ping to server');
        this.socket.send('ping');
      } else {
        // eslint-disable-next-line 
        console.log('Socket is not open, cannot send ping');
      }
    }, 60000);
  }

  sendMessage(content: string, type: string) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      // eslint-disable-next-line 
      console.log('Sending message', { content, type });
      this.socket.send(JSON.stringify({ content, type }));
    } else {
      // eslint-disable-next-line 
      console.log('WebSocket is not open. Message not sent.');
    }
  }

  async getOldMessages() {
    if (this.connectionPromise) {
      // eslint-disable-next-line 
      console.log('Awaiting connection promise before fetching old messages');
      await this.connectionPromise;
    }
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      // eslint-disable-next-line 
      console.log('Fetching old messages');
      this.socket.send(JSON.stringify({
        content: '0',
        type: 'get old',
      }));
    } else {
      // eslint-disable-next-line 
      console.log('WebSocket is not open. Unable to fetch old messages.');
    }
  }

  closeConnection(): Promise<void> {
    return new Promise((resolve) => {
      if (this.socket) {
        // eslint-disable-next-line 
        console.log('Closing WebSocket connection');
        this.socket.addEventListener('close', () => {
          this.cleanup();
          resolve();
        }, { once: true });
        this.socket.close();
        this.socket = null;
      } else {
        // eslint-disable-next-line 
        console.log('No WebSocket connection to close');
        resolve();
      }
      this.connectionPromise = null;
      this.connectionResolver = null;
    });
  }


  private cleanup() {
    // eslint-disable-next-line 
    console.log('Cleaning up WebSocketService');
    this.cleanupPing();
    this.socket = null;
    this.connectionPromise = null;
    this.connectionResolver = null;
  }

  private cleanupPing() {
    if (this.pingInterval) {
      // eslint-disable-next-line 
      console.log('Clearing ping interval');
      clearInterval(this.pingInterval);
      this.pingInterval = null;
    }
  }
}

export default WebSocketService.getInstance();

