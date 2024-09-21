import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "Certificates",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default function Certificates(props: { params: { locale: string } }) {
  return (
    <>
      <section>
        <h4>Language certificates</h4>
        <ul className="pl-5 list-disc">
          <li>Upper-Intermediate in English: TOEIC (790/990)</li>
          <li>Upper-Intermediate in French: DELF Diploma B2 (80/100)</li>
        </ul>
      </section>
      <hr />
      <section>
        <h4>Prizes</h4>
        <div className="flex">
          <div className="name [&_p]:my-1">
            <p>Erasmus Mundus Scholarship</p>
            <p>INSA Centre Val De Loire</p>
            <i>Fourth-year student</i>
          </div>
          <div className="time ml-auto">
            <span className="text-gray-500 italic">03/2019</span>
          </div>
        </div>
        <br />
        <div className="flex">
          <div className="name [&_p]:my-1">
            <p>Mathematical Encouragement Prize</p>
            <p>National excellent student for Mathematical</p>
            <i>Grade: 12</i>
          </div>
          <div className="time ml-auto">
            <span className="text-gray-500 italic">01/2015</span>
          </div>
        </div>
        <br />
        <div className="flex">
          <div className="name [&_p]:my-1">
            <p>First Prize</p>
            <p>Provincial excellent student for Mathematical of Quang Nam</p>
            <i>Grade: 12</i>
          </div>
          <div className="time ml-auto">
            <span className="text-gray-500 italic">10/2014</span>
          </div>
        </div>
        <br />
        <div className="flex">
          <div className="name [&_p]:my-1">
            <p>Bronze Medal</p>
            <p>
              Mathematical Olympiad 30-4 for High School Students for the gifted
            </p>
            <i>Grade: 11</i>
          </div>
          <div className="time ml-auto">
            <span className="text-gray-500 italic">04/2014</span>
          </div>
        </div>
        <br />
        <div className="flex">
          <div className="name [&_p]:my-1">
            <p>Second Prize</p>
            <p>Provincial excellent student for Mathematical of Quang Nam</p>
            <i>Grade: 11</i>
          </div>
          <div className="time ml-auto">
            <span className="text-gray-500 italic">10/2013</span>
          </div>
        </div>
        <br />
        <div className="flex">
          <div className="name [&_p]:my-1">
            <p>Gold Medal</p>
            <p>
              Mathematical Olympiad 30-4 for High School Students for the gifted
            </p>
            <i>Grade: 10</i>
          </div>
          <div className="time ml-auto">
            <span className="text-gray-500 italic">04/2013</span>
          </div>
        </div>
        <br />
        <div className="flex">
          <div className="name [&_p]:my-1">
            <p>Third Prize</p>
            <p>Provincial excellent student for Mathematical of Quang Nam</p>
            <i>Grade: 9</i>
          </div>
          <div className="time ml-auto">
            <span className="text-gray-500 italic">03/2012</span>
          </div>
        </div>
        <br />
        <div className="flex">
          <div className="name [&_p]:my-1">
            <p>First Prize</p>
            <p>Provincial excellent student for Mathematical of Quang Nam</p>
            <i>Grade: 9</i>
          </div>
          <div className="time ml-auto">
            <span className="text-gray-500 italic">03/2012</span>
          </div>
        </div>
      </section>
    </>
  );
}
