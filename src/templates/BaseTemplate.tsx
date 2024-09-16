import { useTranslations } from "next-intl";

import { AppConfig } from "@/utils/AppConfig";
import React from "react";
import { Header } from "@/components/Header";

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations("BaseTemplate");

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto max-w-screen-md flex flex-col min-h-screen">
        <Header leftNav={props.leftNav} rightNav={props.rightNav} />

        <main className="flex-1">{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          {`© Copyright ${new Date().getFullYear()}. ${t("made_with")} `}
          <a
            href="https://creativedesignsguru.com"
            className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          >
            {AppConfig.name}
          </a>
          .
        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
