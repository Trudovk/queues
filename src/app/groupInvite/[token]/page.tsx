import { redirect } from "next/navigation";
import { pb } from "@/lib/pb";
import { getServerSession } from "@/lib/auth";

export default async function GroupInvite(context: {
  params: { token: string };
}) {
  // try {
  const user = await getServerSession();
  if (!user) return redirect("/login");
  const invite = await pb
    .collection("invites")
    .getFirstListItem(`token="${context.params.token}"`);
  const id = user.id;
  await pb.collection("users").update(user.id, {
    group: invite.group,
  });
  const students = await pb.collection("groups").getOne(invite.group);
  await pb.collection("groups").update(invite.group, {
    students: [...students.students, id],
  });

  return redirect("/profile");
  // } catch (e) {
  //   return `Ошибка ${e}`;
  // }
}
