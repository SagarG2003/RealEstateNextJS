import { PropsWithChildren } from "react";
import PaginationContainer from "./PaginationContainer";
import Image from 'next/image';
import bgimg from "public/NextJSBG.jpg";

type Props = PropsWithChildren<{
  totalPages: number;
  currentPage: number;
}>;

const PropertyContainer = ({ children, currentPage, totalPages }: Props) => {
  return (
    <div className="p-5 flex flex-col gap-10 items-center">
      <h1 className="m-4 text-4xl italic hover:not-italic font-bold">Featured Collections</h1>
      <div className="flex flex-wrap justify-center gap-6">{children}</div>
      {/* ToDo: Put Pagination Here */}
      <PaginationContainer currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default PropertyContainer;
