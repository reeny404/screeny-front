import React, { useCallback, useEffect, useState } from "react";
import RoundButton from "./base/RoundButton";
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
  close: () => void;
};

function SearchMenu({ close }: SearchMenuProps) {
  const { searches } = useRecentSearchStore();
  const menus: TSearchMenu[] = Menu;
  const [menuIndex, setMenuIndex] = useState<number>(0);
  console.log(menus, searches);

  useEffect(() => {}, []);

  return (
    <div className="grid grid-cols-[1fr_4fr] space-x-16 p-5">
      <ul className="px-1">
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
      <section className="space-y-8 text-base-s">
        {menus[menuIndex].sub.map(({ name, type, items }, i) => {
          if (type === "button") {
            const isRecentWords = name === "최근 검색어";
            return (
              <Trends
                key={name}
                title={name}
                keywords={isRecentWords ? searches : items}
              />
            );
          }
          if (type === "list") {
            return (
              <ol key={name}>
                {items.map((item, i) => (
                  <li key={`${name}-${type}-${i}`}>{item}</li>
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
