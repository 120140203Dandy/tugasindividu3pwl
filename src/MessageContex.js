import { createContext, useContext } from 'react';

const MessageContext = createContext();

export function useMessage() {
  return useContext(MessageContext);
}

export default MessageContext;