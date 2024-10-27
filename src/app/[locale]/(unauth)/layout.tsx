"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";
import dynamic from "next/dynamic";
import { Spinner } from "@nextui-org/spinner";

const BaseTemplate = dynamic(
  () =>
    import("@/templates/BaseTemplate").then((module) => module.BaseTemplate),
  {
    ssr: false,
    loading: () => {
      return (
        <div className="flex justify-center items-center mt-16 md:mt-32">
          <Spinner />
        </div>
      );
    },
  },
);

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
            "py-2 text-lg font-medium transition-colors duration-300",
            isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600",
          )}
        >
          {t(link.translation)}
          {isActive && (
            <motion.div
              className="border-b-2 border-b-blue-500"
              layoutId="underline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </Link>
      </li>
    );
  });
  return (
    <>
      <BaseTemplate leftNav={navList}>
        <div className={clsx("py-5 text-xl")}>{props.children}</div>
      </BaseTemplate>
    </>
  );
}
