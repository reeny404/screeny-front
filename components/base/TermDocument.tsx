import React, { PropsWithChildren } from "react";

type TermDocumentProps = PropsWithChildren & { title: string };
function TermDocument({ title, children }: TermDocumentProps) {
  return (
    <article className="flex w-full max-w-[700px] flex-col space-y-5 px-3">
      <header className="font-bold">{title}</header>
      <main className="text-left text-sm">{children}</main>
    </article>
  );
}

export default TermDocument;
