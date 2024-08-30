import { Button, modal } from "@nextui-org/react";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  modalDelete: ReactNode;
}
const PropertiesLayout = ({ children, modalDelete }: Props) => {
  return (
    <div>
      {/* <div className="flex justify-between items-center p-2 mx-2 my-6 rounded-md"> */}
        <h2 className="text-black text-2xl font-semibold py-8 text-center">User Properties</h2>
        <Button color="secondary" className="ml-6 my-2">
          <Link href="/user/properties/add">Add Property</Link>
        </Button>
      {/* </div> */}
      {children}
      <div>{modalDelete}</div>
    </div>
  );
};

export default PropertiesLayout;
