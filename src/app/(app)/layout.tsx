import { Footer } from "@/components/app/footer";
import { Header } from "@/components/app/header";
import UnderDevelopment from "@/components/common/under-dev";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <UnderDevelopment />;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
