"use client";

import { motion } from "framer-motion";
import React from "react";

interface LayoutAnimationProps {
	children: React.ReactNode;
}
export default function LayoutAnimation({ children }: LayoutAnimationProps) {
	return <motion.div layoutId="underline" />;
}
