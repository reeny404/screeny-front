import React, { useCallback, useState } from "react";
import Image from "next/image";
import useRecentSearchStore from "@/store/RecentSearch.store";
import Menu from "@/data/SearchMenu.json";
import clsx from "clsx";
import Trends from "./Trends";

type TSearchMenu = {
  name: string;
  icon: string;
  sub: {
    name: string;
    type: string;
    items: string[];
  }[];
};

type SearchMenuProps = {
  close: (text: string) => void;
};

function SearchMenu({ close }: SearchMenuProps) {
  const { searches } = useRecentSearchStore();
  const menus: TSearchMenu[] = Menu;
  const [menuIndex, setMenuIndex] = useState<number>(0);
  const { addRecentSearch } = useRecentSearchStore();

  const handleAddRecentWord = useCallback((word: string) => {
    addRecentSearch(word);
    close(word);
  }, []);

  return (
    <div className="grid grid-cols-[1fr_4fr] space-x-16 p-5">
      <ul className="min-w-44 px-1">
        {menus.map((menu, i) => (
          <li
            key={menu.name}
            className={clsx(
              "group flex cursor-pointer items-center space-x-4 rounded p-2 hover:bg-neutrals-5",
              i === menuIndex && "bg-neutrals-4"
            )}
            onClick={() => setMenuIndex(i)}
          >
            <div
              className={clsx(
                "rounded-xl border border-neutrals-5 p-2.5 group-hover:bg-neutrals-1",
                i === menuIndex && "bg-neutrals-1"
              )}
            >
              <Image src={menu.icon} alt="tranding" width={24} height={24} />
            </div>
            <span className="tracking-tight">{menu.name}</span>
          </li>
        ))}
      </ul>
      <section className="max-h-[600px] space-y-8 text-base-s">
        {menus[menuIndex].sub.map(({ name, type, items }) => {
          if (type === "button") {
            const isRecentSearches = name === "최근 검색어";
            return (
              <Trends
                key={name}
                title={name}
                onClick={handleAddRecentWord}
                keywords={isRecentSearches ? searches : items}
                isAbleToRemoveWord={isRecentSearches}
              />
            );
          }
          if (type === "list") {
            return (
              <ol key={name}>
                {items.map((item, i) => (
                  <li
                    key={item}
                    className="flex cursor-pointer justify-between rounded px-3 py-2.5 hover:bg-neutrals-5"
                    onClick={() => handleAddRecentWord(item)}
                  >
                    <span className="tracking-tighter">{item}</span>
                    <span className="text-base-s text-neutrals-6">
                      {items.length - i}
                    </span>
                  </li>
                ))}
              </ol>
            );
          }
        })}
      </section>
    </div>
  );
}

export default SearchMenu;