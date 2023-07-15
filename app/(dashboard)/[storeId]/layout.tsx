import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  return <></>;
}
