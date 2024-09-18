import React from "react";
import { useCycle } from "framer-motion";
import clsx from "clsx";

export const Header = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  // const isMobile: boolean = useIsMobile();
  // console.log({ isMobile });
  const variants = {
    open: { opacity: 1, y: 0, height: "200px" },
    closed: { opacity: 0, y: "-10%", height: 0 },
  };

  return (
    <>
      <header>
        {/*<div className={clsx("flex justify-end mt-5 mr-10")}>*/}
        {/*  {isMobile && <LuAlignJustify onClick={() => toggleOpen()} />}*/}
        {/*</div>*/}
        <div className={clsx("flex justify-center md:items-center mt-5")}>
          <nav>
            <ul className="flex flex-row flex-wrap text-xl">{props.leftNav}</ul>
          </nav>
        </div>
      </header>
    </>
  );
};
