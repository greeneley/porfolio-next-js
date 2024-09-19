"use client";
import { useEffect, useLayoutEffect, useState } from "react";

export const useIsMobile = (): boolean => {
  const [width, setWidth] = useState<number>(1000);

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width <= 640;
};
