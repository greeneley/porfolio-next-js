"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { BaseTemplate } from "@/templates/BaseTemplate";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About", href: "/", translation: "about_link" },
  { name: "Education", href: "/education", translation: "education" },
  { name: "Experiences", href: "/experiences", translation: "experiences" },
  { name: "Skills", href: "/skills", translation: "skills" },
  {
    name: "Personal Project",
    href: "/person-projects",
    translation: "person_project",
  },
];
export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const t = useTranslations("RootLayout");
  const pathname = usePathname();
  const navList = navLinks.map((link) => {
    const isActive = pathname === link.href;
    console.log({ isActive });
    return (
      <li key={link.name}>
        <Link
          href={link.href}
          className={clsx(
            "border-none text-gray-700 hover:bg-[#818b981a] hover:px-2 hover:py-1.5 hover:rounded-b",
            isActive && "bg-[#818b9826] px-2 py-1.5 rounded-b",
          )}
        >
          {t(link.translation)}
        </Link>
      </li>
    );
  });
  return (
    <>
      <BaseTemplate leftNav={navList}>
        <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
      </BaseTemplate>
    </>
  );
}
