import React from "react";

export const Header = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
}) => {
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
