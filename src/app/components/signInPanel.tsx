import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@nextui-org/react";
import React from "react";
import UserProfilePanel from "./UserProfilePanel";
import prisma from "@/lib/prisma";
import PurchasePlan from "../user/subscription/_components/PurchasePlan";

const signInPanel = async () => {
  const { isAuthenticated, getUser } = await getKindeServerSession();
  if (await isAuthenticated()) {
    const user = await getUser();
    const dbUser = await prisma.user.findUnique({
      where: {
        id: user?.id,
      },
    });

    return <>{dbUser!! && <UserProfilePanel user={dbUser} />}</>;
  }

  return (
    <div className="flex gap-4">
      <Button variant="bordered" className="text-white">
        <LoginLink>Sign In</LoginLink>
      </Button>
      <Button variant="bordered" className="text-white">
        <RegisterLink>Sign Up</RegisterLink>
      </Button>
      <Button variant="bordered" className="text-white border-amber-500"><LoginLink>Premium</LoginLink></Button>
    </div>
  );
};

export default signInPanel;
