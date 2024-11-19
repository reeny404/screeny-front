import SessionUtil from "@/utils/Session.util";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface RecentSearchStore {
  searches: string[];
  addRecentSearch: (word: string) => void;
  removeRecentSearch: (word: string) => void;
}

const useRecentSearchStore = create<RecentSearchStore>()(
  persist(
    (set, get) => ({
      searches: [],
      addRecentSearch: (word) => {
        if (!word) {
          return;
        }
        const { searches: words } = get();
        const updatedSearches = words.filter((item) => item !== word);

        set({ searches: [word, ...updatedSearches] });
      },
      removeRecentSearch: (word) => {
        const { searches: words } = get();
        const updatedSearches = words.filter((item) => item !== word);

        set({ searches: updatedSearches });
      },
    }),
    {
      name: "RecentSearchStore",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useRecentSearchStore;
