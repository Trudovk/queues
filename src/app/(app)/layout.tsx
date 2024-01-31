import { Header } from "@/components/header";
import { getServerSession } from "@/lib/auth";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getServerSession();
  return (
    <>
      <Header user={user} />
      <div>{children}</div>
    </>
  );
}
