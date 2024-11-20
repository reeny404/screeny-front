import { IS_OPEN } from "@/constants/env";
import { redirect } from "next/navigation";
import refs from "@/data/references.json";
import Reference from "@/components/Reference";
import { Reference as TRef } from "@/types/Reference";
import ComponentFilter from "@/components/ComponentFilter";
import SearchInput from "@/components/SearchInput";

const TEMP_REFS: TRef[] = refs;

function MainPage() {
  if (!IS_OPEN) {
    redirect("/kr");
  }

  return (
    <main className="px-3.5">
      <SearchInput />
      <ComponentFilter />
      <div className="my-6 grid grid-cols-2 justify-center gap-x-4 gap-y-6 px-1.5">
        {TEMP_REFS.map((ref) => (
          <Reference key={ref.appName} value={ref} />
        ))}
      </div>
    </main>
  );
}

export default MainPage;
