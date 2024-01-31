"use client";
import { Button } from "@/components/ui/button";
import { pb } from "@/lib/pb";
import { logout } from "@/lib/auth";

export const LogoutButton: React.FC = () => {
  async function handleClick() {
    await logout();
    pb.authStore.clear();
  }

  return (
    <>
      <Button onClick={handleClick}>Logout</Button>
    </>
  );
};
