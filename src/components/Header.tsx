"use client";
import React from "react";
import { motion, useCycle } from "framer-motion";
import { LuAlignJustify } from "react-icons/lu";
import clsx from "clsx";
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
        {isMobile && (
          <div
            className={clsx(
              "flex justify-end mt-5 mr-10",
              isMobile ? "block" : "hidden",
            )}
          >
            <LuAlignJustify onClick={() => toggleOpen()} />
          </div>
        )}
        <div className="flex justify-center items-center mt-5">
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
                <ul
                  className="flex flex-col flex-wrap text-xl"
                  onClick={() => toggleOpen()}
                >
                  {props.leftNav}
                </ul>
              </motion.nav>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
