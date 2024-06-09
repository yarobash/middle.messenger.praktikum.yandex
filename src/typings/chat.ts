export type StoreEvent = 'updated';

export type User = {
  id?: number,
  first_name: string,
  second_name: string,
  display_name?: string,
  phone: string,
  login: string,
  avatar?: string,
  email: string,
}

export type ChatData = {
  id?: number,
  title?: string,
  avatar?: string,
  unreads_number: number,
  unread_count?: number,
  created_by?: number,
  last_message?: {
    user?: User,
    time?: string,
    content?: string
  },
  isActive?: boolean
}

export type ActiveChat = {
  id?: number,
}

export type SocketMessage = {
  id?: number,
  chat_id?: number,
  user_id?: number,
  content: string,
  time?: string,
}

export type AppState = {
  user?: User;
  chats?: ChatData[];
  token?: string;
  messages?: SocketMessage[];
  activeChat?: ActiveChat;
}
