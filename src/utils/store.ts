import EventBus from './event-bus';
import { AppState, StoreEvent, User, ChatData, SocketMessage } from '../typings';

class Store extends EventBus<StoreEvent> {
  private static __instance: Store;

  constructor(private state: AppState) {
    if (Store.__instance) return Store.__instance;
    super();
    this.set(this.state);
  }

  getState() {
    return this.state;
  }

  setUser(user: User) {
    this.set({ user });
  }

  setChats(chats: ChatData[]) {
    this.set({ chats });
  }
  
  setMessages(messages: SocketMessage[]) {
    this.set({ messages });
  }

  setToken(token: string) {
    this.set({ token });
  }

  setActiveChatId(chatId: number) {
    this.set({ activeChat: { id: chatId} });
  }

  setActiveChat(chatId: number) {
    const chats = this.state.chats?.map(chat => ({...chat, isActive: chat.id === chatId})) ?? [];
    this.set({ chats });
  }

  addMessage(message: SocketMessage) {
    const prevMsgs = this.getState().messages ?? [];
    const newMsgs = [ message, ...prevMsgs ];
    this.setMessages(newMsgs);
  }

  private set(newState: AppState) {
    const prevState = {...this.state};
    this.state = {...this.state, ...newState};
    this.emit('updated', prevState, this.state);
  }
}

export default new Store({});
