"use client";

import { motion } from "framer-motion";
import React from "react";

interface SlideRightProps {
	children: React.ReactNode;
}
export default function SlideRight({ children }: SlideRightProps) {
	return (
		<motion.div
			initial={{ x: 200, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ ease: "easeInOut", duration: 1 }}>
			{children}
		</motion.div>
	);
}
