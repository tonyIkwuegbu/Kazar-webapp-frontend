"use client";

import Header from "@/components/ui/Header";
import "@ant-design/v5-patch-for-react-19";
import Footer from "./ui/Footer";

const LayoutContent: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-1">{children}</main>
			<Footer />
		</div>
	);
};

export default LayoutContent;
