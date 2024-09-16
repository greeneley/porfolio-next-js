import Link from "next/link";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { BaseTemplate } from "@/templates/BaseTemplate";

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations("RootLayout");

  return (
    <>
      <BaseTemplate
        leftNav={
          <>
            <li>
              <Link
                href="/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t("about_link")}
              </Link>
            </li>
            <li>
              <Link
                href="/education/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t("education")}
              </Link>
            </li>
            <li>
              <Link
                href="/experiences/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t("experiences")}
              </Link>
            </li>
            <li>
              <Link
                href="/skills/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t("skills")}
              </Link>
            </li>
            <li>
              <Link
                href="/person-projects/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {t("person_project")}
              </Link>
            </li>
          </>
        }
      >
        <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
      </BaseTemplate>
    </>
  );
}
