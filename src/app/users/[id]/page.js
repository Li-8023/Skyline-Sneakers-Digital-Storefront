'use client';
import UserTabs from "@/components/Layout/UserTabs";
import { useProfile } from "@/components/UseProfile";

export default function EditUserPage() {
  const { data, loading } = useProfile();
  if (loading) {
    return "Loading user info...";
  }

  if (!data.admin) {
    return "Not an admin";
  }
  return (
    <section className="mt-8 mx-auto max-w-lg">
      <UserTabs isAdmin={true} />
      <div className="mt-8">user info form</div>
    </section>
  );
}
