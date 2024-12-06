import Image from "next/image";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata(props: { params: { locale: string } }) {
	const t = await getTranslations({
		locale: props.params.locale,
		namespace: "Certificates"
	});

	return {
		title: t("meta_title"),
		description: t("meta_description")
	};
}

type CertificateProps = {
	imageSrc: string;
	alt: string;
	title: string;
	description?: string;
	date: string;
};

const Certificate: React.FC<CertificateProps> = ({ imageSrc, alt, title, description, date }) => (
	<div className="rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg">
		<div className="flex items-start gap-4">
			<Image src={imageSrc} alt={alt} width={64} height={64} className="shrink-0" />
			<div className="grow">
				<div className="mb-2 flex flex-col justify-between sm:flex-row sm:items-center">
					<h3 className="text-lg font-semibold text-[#4682b4]">{title}</h3>
					<span className="mt-1 text-sm text-gray-500 sm:mt-0">{date}</span>
				</div>
				{description && <p className="text-sm italic text-gray-600">{description}</p>}
			</div>
		</div>
	</div>
);

type LanguageCertificateProps = {
	details: string[];
} & CertificateProps;

const LanguageCertificate: React.FC<LanguageCertificateProps> = ({ imageSrc, alt, title, details, date }) => (
	<div className="rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg">
		<div className="flex items-start gap-4">
			<Image src={imageSrc} alt={alt} width={64} height={64} className="shrink-0" />
			<div className="grow">
				<div className="mb-2 flex flex-col justify-between sm:flex-row sm:items-center">
					<h3 className="text-lg font-semibold text-[#4682b4]">{title}</h3>
					<span className="mt-1 text-sm text-gray-500 sm:mt-0">{date}</span>
				</div>
				<div className="space-y-1">
					{details.map((detail, index) => (
						<p key={index} className="text-sm italic text-gray-600">
							{detail}
						</p>
					))}
				</div>
			</div>
		</div>
	</div>
);

type PrizeProps = {
	date: string;
	title: string;
	organization: string;
	details: string;
};

const Prize: React.FC<PrizeProps> = ({ date, title, organization, details }) => (
	<div className="rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg">
		<div className="mb-2 flex flex-col items-start justify-between sm:flex-row sm:items-center">
			<h3 className="text-lg font-semibold text-[#4682b4]">{title}</h3>
			<span className="mt-1 text-sm text-gray-500 sm:mt-0">{date}</span>
		</div>
		<div className="space-y-2">
			<p className="text-base text-gray-700">{organization}</p>
			<p className="text-sm italic text-gray-600">{details}</p>
		</div>
	</div>
);

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
	<section className="px-2">
		<div className="header">
			<div className="flex items-center bg-gray-100 p-4">
				<div className="mx-5">
					<h4 className="size-sm">{title}</h4>
				</div>
			</div>
		</div>
		<div className="p-4">{children}</div>
	</section>
);

export default function Certificates() {
	return (
		<>
			<Section title="Certifications">
				<div className="space-y-4">
					<Certificate
						imageSrc="/assets/images/aws.jfif"
						alt="aws"
						title="AWS Certified Cloud Practitioner"
						date="08/2021"
						description="Validation of foundational understanding of AWS Cloud concepts"
					/>
					{/* Add more certificates here if needed */}
				</div>
			</Section>

			<Section title="Language">
				<div className="grid gap-4 sm:grid-cols-2">
					<LanguageCertificate
						imageSrc="/assets/images/toeic.png"
						alt="toeic"
						title="TOEIC: 790/990"
						date="06/2020" // Add date here
						details={["Listening 395/495, Reading: 395/495"]}
					/>
					<LanguageCertificate
						imageSrc="/assets/images/delf.png"
						alt="delf"
						title="DELF B2: 80/100"
						date="05/2022" // Add date here
						details={[
							"French language (1st national class)",
							"Listening 15/25, Reading 20/25",
							"Writing 24/25, Speaking 21/20"
						]}
					/>
				</div>
			</Section>

			<Section title="Prizes">
				<div className="grid gap-4 sm:grid-cols-2">
					<Prize
						date="03/2019"
						title="Erasmus Mundus Scholarship"
						organization="INSA Centre Val De Loire"
						details="Fourth-year student"
					/>
					<Prize
						date="01/2015"
						title="Encouragement Prize"
						organization="National excellent student for Mathematical"
						details="Grade: 12"
					/>
					<Prize
						date="10/2014"
						title="First Prize"
						organization="Provincial excellent student for Mathematical of Quang Nam"
						details="Grade: 12"
					/>
					<Prize
						date="04/2014"
						title="Bronze Medal"
						organization="Mathematical Olympiad 30-4 for High School Students"
						details="Grade: 11"
					/>
					<Prize
						date="10/2013"
						title="Second Prize"
						organization="Provincial excellent student for Mathematical of Quang Nam"
						details="Grade: 11"
					/>
					<Prize
						date="04/2013"
						title="Gold Medal"
						organization="Mathematical Olympiad 30-4 for High School Students"
						details="Grade: 10"
					/>
					<Prize
						date="03/2012"
						title="Third Prize"
						organization="Provincial excellent student for Mathematical of Quang Nam"
						details="Grade: 9"
					/>
					<Prize
						date="03/2012"
						title="First Prize"
						organization="Provincial excellent student for mathematical Casio of Quang Nam"
						details="Grade: 9"
					/>
				</div>
			</Section>
		</>
	);
}
