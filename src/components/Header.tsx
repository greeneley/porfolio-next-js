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
      <header>
        <div className="flex justify-center items-center mt-5">
          <nav>
            <ul className="flex flex-wrap text-xl">{props.leftNav}</ul>
          </nav>
        </div>
      </header>
    </>
  );
};
