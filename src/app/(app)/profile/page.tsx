import { AddNameForm } from "@/components/addNameForm";
import { getServerSession } from "@/lib/auth";
import { pb } from "@/lib/pb";
import { Github } from "lucide-react";
import { redirect } from "next/navigation";

export default async function Profile() {
  const user = await getServerSession();
  if (!user) return redirect("/login");
  return (
    <>
      <h1>Профиль</h1>
      {!user.name || !user.middleName || !user.lastName ? (
        <AddNameForm id={user.id} />
      ) : (
        <div className="flex gap-2">
          <p>
            {user.lastName} {user.name} {user.middleName}
          </p>
        </div>
      )}
      {!!user.group && (
        <p>
          {" "}
          Группа: {(await pb.collection("groups").getOne(user.group)).name}{" "}
        </p>
      )}
      <p>Статус {user.field}</p>
      <p className="flex ">
        <a
          href={`https://github.com/${user.username}`}
          title={`GitHub ${user.username}`}
          className="flex "
        >
          <Github /> {user.username}
        </a>
      </p>
      <p>С нами с {new Date(user.created).toLocaleDateString()}г.</p>
    </>
  );
}
