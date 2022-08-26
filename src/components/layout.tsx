import React from "react";
import { ReactNode } from "react";
import TheFooter from "~/components/layouts/footer/TheFooter";
import TheHeader from "~/components/layouts/header/TheHeader";

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
