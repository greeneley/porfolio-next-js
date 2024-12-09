import { getTranslations } from "next-intl/server";
import "@/styles/page/education/index.css";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export async function generateMetadata(props: { params: { locale: string } }) {
	const t = await getTranslations({
		locale: props.params.locale,
		namespace: "Education"
	});

	return {
		title: t("meta_title"),
		description: t("meta_description")
	};
}

interface EducationEntry {
	period: string;
	institution: string;
	location: string;
	description: string;
	logoUrl: string;
}

const educationData: EducationEntry[] = [
	{
		period: "2017 - 2020",
		institution: "INSA Centre Val de Loire",
		location: "Bourges, France",
		description: "Master Degree - Specialization: Computer Security and Technologies",
		logoUrl: "/assets/images/insa-cvl.jpg"
	},
	{
		period: "2015 - 2017",
		institution: "Hue University of Education",
		location: "Hue, Vietnam",
		description: "Higher School Preparatory Engineer Classes",
		logoUrl: "/assets/images/ens-hue.png"
	},
	{
		period: "2012 - 2015",
		institution: "Le Thanh Tong High School for The Gifted",
		location: "Vietnam",
		description: "Specialized math subject class",
		logoUrl: "/assets/images/logo-thpt.png"
	}
];

export default function Education(props: { params: { locale: string } }) {
	return (
		<div className="mx-3 md:mx-0 my-5 [&_p]:my-6">
			{educationData.map((entry, index) => (
				<div key={index} className="timeline-item" date-is={entry.period}>
					<Card className="p-4">
						<div className="flex gap-4 items-start">
							<div className="relative w-[80px] h-[80px] shrink-0 border border-border rounded-md overflow-hidden">
								<Image src={entry.logoUrl} alt={`${entry.institution} logo`} fill className="object-cover" />
							</div>
							<div className="space-y-1">
								<h3 className="font-semibold text-xl">{entry.institution}</h3>
								<p className="text-sm text-muted-foreground">{entry.location}</p>
								<p className="text-sm">{entry.description}</p>
							</div>
						</div>
					</Card>
				</div>
			))}
		</div>
	);
}
