import React from "react";
import { AppConfig } from "@/utils/AppConfig";
import { useTranslations } from "next-intl";

export const Header = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
}) => {
  const t = useTranslations("BaseTemplate");

  return (
    <>
      <header className="border-b border-gray-300">
        <div className="pb-8 pt-16">
          <h1 className="text-3xl font-bold text-gray-900">{AppConfig.name}</h1>
        </div>

        <div className="flex justify-between">
          <nav>
            <ul className="flex flex-wrap gap-x-5 text-xl">{props.leftNav}</ul>
          </nav>

          <nav>
            <ul className="flex flex-wrap gap-x-5 text-xl">{props.rightNav}</ul>
          </nav>
        </div>
      </header>
    </>
  );
};
