import Image from "next/image";
import { pb } from "../lib/pb";
import { use } from "react";
import { getServerSession } from "@/lib/auth";
import { Header } from "@/components/header";
import Link from "next/link";

export default async function Home() {
  const user = await getServerSession();
  return (
    <>
      <Link href="/profile">Профиль</Link>
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
