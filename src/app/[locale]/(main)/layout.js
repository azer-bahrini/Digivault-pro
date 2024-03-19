"use client";
import NavigationBar from "@/components/navigationBar/NavigationBar";
import PageHeader from "@/components/pageHeader/PageHeader";
import { usePathname } from "next/navigation";

export default function AppLayout({ children, params: { locale } }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full">
      <NavigationBar locale={locale} />
      <section className="w-full flex flex-col flex-1">
        <PageHeader title={pathname.split("/").pop()} />
        {children}
      </section>
    </div>
  );
}
