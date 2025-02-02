import { ProfileSidebar } from "@/components/app/profile/profile-sidebar"

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container p-4 mx-auto grid xl:grid-cols-5 gap-8 mt-10">
      <div className="xl:col-span-1">
        <ProfileSidebar />
      </div>
      <div className="xl:col-span-4 xl:mb-[400px]">{children}</div>
    </div>
  )
}
