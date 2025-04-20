"use client";

import SearchSectionUserAccount from "./search-section";
import TableUserAccount from "./table";

export const UserAccount = () => {
  return (
    <div className="flex flex-col gap-4">
      <SearchSectionUserAccount />
      <TableUserAccount />
    </div>
  );
};
