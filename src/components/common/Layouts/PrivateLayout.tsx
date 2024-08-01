import { LeftSidebar } from "../Sidebar";

export default function PrivateLay({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <LeftSidebar>
        <div className="flex flex-1">
          <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
            {children}
          </div>
        </div>
      </LeftSidebar>
    </>
  );
}

{
  /* <div className="flex flex-1">
<div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full"></div>
</div> */
}
