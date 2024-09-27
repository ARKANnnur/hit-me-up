/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import axios from "axios";

// Define data types for states and actions
interface ConversationState {
  ai: string;
  message: string;
  data: any;
  topic: any;
  response: any;
  sideBar: boolean;
  loading: boolean;
  error: string | null;
}

interface ConversationActions {
  fetchResponse: (state: any) => Promise<void>;
  closeError: () => void;
  setSideBar: (sideBar: boolean) => void;
  setAi: (ai: string) => void;
  setTopic: (topic: string) => void;
  setMessage: (message: string) => void;
  deleteChat: (chat: string) => void;
}

type ConversationStore = ConversationState & ConversationActions;

const useConverstations = create<
  ConversationStore,
  [["zustand/devtools", never], ["zustand/persist", ConversationStore]]
>(
  devtools(
    persist(
      (set, get) => ({
        loading: false,
        error: null,
        sideBar: false,
        ai: "chatgpt",
        topic: "",
        message: "",
        response: "",
        data: [],
        fetchResponse: async (state) => {
          set({ loading: true });
          set({ error: null });
          try {
            const { message, topic, data } = get();
            const res = await axios.get(state);
            set({ response: res.data, loading: false });

            const title = message.slice(0, 15);
            const newData = topic
              ? {
                  you: message,
                  computer: res.data.content || res.data.message,
                }
              : {
                  title,
                  conversation: [
                    {
                      you: message,
                      computer: res.data.content || res.data.message,
                    },
                  ],
                };
            if (topic) {
              const filter = data?.map((item: any) =>
                item.title === topic
                  ? { ...item, conversation: [...item.conversation, newData] }
                  : item,
              );
              set({ data: filter });
            }
            if (!topic) {
              set({ topic: title });
              set({ data: [...data, newData] });
            }
          } catch (error: any) {
            set({ error: error.message, loading: false });
          } finally {
            set({ loading: false });
            set({ message: "" });
          }
        },
        closeError: () => set({ error: null }),
        setSideBar: (sideBar) => set({ sideBar }),
        setAi: (ai) => set({ ai }),
        setTopic: (topic) => set({ topic }),
        setMessage: (message) => set({ message }),
        deleteChat: (chat) => {
          const { data } = get();
          const filter = data.filter((item: any) => item.title !== chat);
          set({ data: filter });
        },
      }),
      { name: "conversationAI" },
    ),
  ),
);

export { useConverstations };
