import React from "react";
import { ReactNode } from "react";
import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";

interface Props {
	children: ReactNode;
}

export default function Layout({ children }: Props) {
	return (
		<>
			<TheHeader />
			<main>{children}</main>
			<TheFooter />
		</>
	);
}
