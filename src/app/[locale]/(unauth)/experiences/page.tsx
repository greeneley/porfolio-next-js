import Experiences from "@/app/[locale]/(unauth)/experiences/experiences-content";
import { getTranslations } from "next-intl/server";
export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "Experiences",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}
export default function Wrapper(props: { params: { locale: string } }) {
  return (
    <>
      <Experiences params={props.params} />
    </>
  );
}
