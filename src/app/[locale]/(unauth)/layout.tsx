"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { BaseTemplate } from "@/templates/BaseTemplate";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";

enum TranslationType {
  "about_link",
  "education",
  "experiences",
  "certificates",
  "person_project",
}
interface INavLink {
  name: string;
  href: string;
  translation: keyof typeof TranslationType;
}

const navLinks: Array<INavLink> = [
  { name: "About", href: "/", translation: "about_link" },
  { name: "Education", href: "/education", translation: "education" },
  { name: "Experiences", href: "/experiences", translation: "experiences" },
  { name: "Certificates", href: "/certificates", translation: "certificates" },
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

    return (
      <li key={link.name} className="mx-2 my-1.5 w-fit">
        <Link
          href={link.href}
          className={clsx(
            "border-none text-gray-700 hover:bg-[#818b981a] hover:py-2 hover:rounded-md",
          )}
        >
          {t(link.translation)}
          {isActive && (
            <motion.div
              className="border-b-2 border-b-blue-500"
              layoutId="underline"
            />
          )}
        </Link>
      </li>
    );
  });
  return (
    <>
      <BaseTemplate leftNav={navList}>
        <div className={clsx("py-5 text-xl [&_p]:my-6")}>{props.children}</div>
      </BaseTemplate>
    </>
  );
}
