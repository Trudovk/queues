import { LoginButton } from "@/components/loginButton";
import { LogoutButton } from "@/components/logoutButton";
import { getServerSession } from "@/lib/auth";
import { pb } from "@/lib/pb";

export default async function LoginPage() {
  const user = await getServerSession();

  return <>{user ? <LogoutButton /> : <LoginButton />}</>;
}
