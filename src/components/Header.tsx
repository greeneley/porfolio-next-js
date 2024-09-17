import React, { useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { useCycle } from "framer-motion";
import { MenuToggle } from "@/components/MenuToggle";
import { LuAlignJustify } from "react-icons/lu";
import clsx from "clsx";
import SlideBottom from "@/components/transition/SlideBottom";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hook/useIsMobile";

export const Header = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const isMobile: boolean = useIsMobile();

  const variants = {
    open: { opacity: 1, y: 0, height: "200px" },
    closed: { opacity: 0, y: "-10%", height: 0 },
  };

  return (
    <>
      <header>
        <div className={clsx("flex justify-end mt-5 mr-10")}>
          {isMobile && <LuAlignJustify onClick={() => toggleOpen()} />}
        </div>
        <div className={clsx("flex justify-center md:items-center mt-5")}>
          {!isMobile && (
            <nav>
              <ul className="flex flex-row flex-wrap text-xl">
                {props.leftNav}
              </ul>
            </nav>
          )}
          {isMobile && (
            <motion.nav
              initial={false}
              animate={isOpen ? "open" : "closed"}
              variants={variants}
            >
              <ul className="flex flex-col flex-wrap text-xl">
                {props.leftNav}
              </ul>
            </motion.nav>
          )}
        </div>
      </header>
    </>
  );
};
