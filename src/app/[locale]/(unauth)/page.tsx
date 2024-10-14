import { getTranslations } from "next-intl/server";
import clsx from "clsx";
import SlideLeft from "@/components/transition/SlideLeft";
import SlideRight from "@/components/transition/SlideRight";
import { ZaloContact } from "@/components/ZaloContact";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "Index",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default function Index() {
  return (
    <div className="flex flex-col justify-center items-center">
      <section className="text-center w-full">
        <div className="max-w-52 pb-2.5 m-auto">
          <img
            src="/assets/images/avatar.png"
            className="rounded-full border-gray-500 border-1 shadow-md"
            alt="avatar"
            width="200"
            height="200"
          />
        </div>
        <SlideLeft>
          <h1 className={clsx("font-medium mt-2.5 w-full")}>Đinh Thanh Hải</h1>
        </SlideLeft>
        <ul className="mx-auto p-0 ">
          <li>
            <span className="fi fi-vn"></span>
          </li>
        </ul>
      </section>
      <section className="m-auto mt-5 mb-8">
        <SlideRight>
          <h3 className="font-normal text-[#9d9d9d]">Full stack developer</h3>
        </SlideRight>
      </section>
      <ZaloContact />
    </div>
  );
}
