import { getTranslations } from "next-intl/server";
import "@/styles/page/education/index.css";
import Image from "next/image";

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

export default function Education(props: { params: { locale: string } }) {
	return (
		<div className="w-fit mx-3 md:mx-0 my-5 [&_p]:my-6">
			<div className="timeline-item" date-is="2017 - 2020">
				<div className="bg-gray-100 flex items-center">
					<Image src="/assets/images/insa-cvl.jpg" alt="logo-cvl" width={84} height={84} />
					<div className="mx-5">
						<h4>INSA Centre Val de Loire, Bourges, France</h4>
					</div>
				</div>
				<p>
					Master Degree - <i> Specialization:</i> Computer Security and Technologies
				</p>
			</div>

			<div className="timeline-item" date-is="2015 - 2017">
				<div className="bg-gray-100 flex items-center">
					<Image src="/assets/images/ens-hue.png" alt="logo-ens-hue" width={84} height={84} />
					<div className="mx-5">
						<h4>Hue University of Education, Hue, Vietnam</h4>
					</div>
				</div>
				<p>Higher School Preparatory Engineer Classes</p>
			</div>

			<div className="timeline-item" date-is="2012 - 2015">
				<div className="bg-gray-100 flex items-center">
					<Image src="/assets/images/logo-thpt.png" alt="logo-thpt" width={84} height={84} />
					<div className="mx-5">
						<h4>Le Thanh Tong High School for The Gifted, Vietnam</h4>
					</div>
				</div>
				<p>Specialized math subject class</p>
			</div>
		</div>
	);
}
