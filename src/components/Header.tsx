"use client";
import React from "react";
import { motion, useCycle } from "framer-motion";
import { LuAlignJustify } from "react-icons/lu";
import clsx from "clsx";
import { useIsMobile } from "@/hook/useIsMobile";

const HeaderMobile = (props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const variants = {
    open: { opacity: 1, y: 0, height: "200px" },
    closed: { opacity: 0, y: "-10%", height: 0 },
  };

  const onToggleClick = () => toggleOpen();
  return (
    <>
      <div className={clsx("flex justify-end mt-5 mr-10")}>
        <LuAlignJustify onClick={onToggleClick} />
      </div>
      {isOpen && (
        <div className="flex justify-center items-center mt-5">
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
          >
            <ul
              className="flex flex-col flex-wrap text-xl"
              onClick={onToggleClick}
            >
              {props.leftNav}
            </ul>
          </motion.nav>
        </div>
      )}
    </>
  );
};

export const Header = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
}) => {
  const isMobile: boolean = useIsMobile();

  return (
    <>
      <header>
        {isMobile ? (
          <HeaderMobile leftNav={props.leftNav} />
        ) : (
          <div className="flex justify-center items-center mt-5">
            <nav>
              <ul className="flex flex-row flex-wrap text-xl">
                {props.leftNav}
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
