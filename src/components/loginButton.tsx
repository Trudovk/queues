"use client";
import { Button } from "@/components/ui/button";
import { login } from "@/lib/auth";
import { pb } from "@/lib/pb";
import { Github } from "lucide-react";

export const LoginButton: React.FC = () => {
  async function handleClick() {
    const authData = await pb
      .collection("users")
      .authWithOAuth2({ provider: "github" });
    document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
    await login();
  }

  return (
    <>
      <Button onClick={handleClick} className="gap-3">
        <Github size={20} />
        Войти через GitHub
      </Button>
    </>
  );
};
