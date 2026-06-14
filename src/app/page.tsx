"use client";
//import EscrowProcess from "@/components/Home/EscrowProcess";
import HeroArea from "@/components/Home/HeroArea";
import HowItWorks from "@/components/Home/HowItWorks";
import PerfectForBusiness from "@/components/Home/PerfectForBusiness";
//import StrategicPartners from "@/components/Home/StrategicPartners";
import TrustedCommunity from "@/components/Home/TrustedCommunity";
import WaitListForm from "@/components/Home/WaitListForm";
import WhyChooseKazar from "@/components/Home/WhyChooseKazar";
import Header from "@/components/ui/Header";

export default function Home() {
	return (
		<div>
			<Header />
			<HeroArea />
			{/* <EscrowProcess /> */}
			<HowItWorks />
			<PerfectForBusiness />
			<WhyChooseKazar />
			<TrustedCommunity />
			{/* <StrategicPartners /> */}
			<WaitListForm />
		</div>
	);
}
