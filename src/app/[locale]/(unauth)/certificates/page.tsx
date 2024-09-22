import { getTranslations } from "next-intl/server";

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
      <section className="px-2">
        <div className="header">
          <div className="bg-gray-100 flex items-center p-4">
            <div className="mx-5">
              <h4 className="size-sm">Certifications</h4>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex sm:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <img
                src="/assets/images/aws.jfif"
                alt="aws"
                width="64"
                height="64"
              />
              <div className="[&_p]:my-0">
                <p>AWS Certified Cloud Practitioner (08/2021)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-2">
        <div className="header">
          <div className="bg-gray-100 flex items-center p-4">
            <div className="mx-5">
              <h4 className="size-sm">Language</h4>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="col-span-2 flex items-center">
              <img
                src="/assets/images/toeic.png"
                alt="toeic"
                width="84"
                height="84"
              />
              <div className="[&_p]:my-0">
                <p>
                  <b>TOEIC:</b> 790/990 (06/2020)
                </p>
                <p className="text-sm italic">
                  Listening 395/495, Reading: 395/495
                </p>
              </div>
            </div>
            <div className="col-span-2 flex items-center">
              <img
                src="/assets/images/delf.png"
                alt="delf"
                width="84"
                height="84"
              />
              <div className="[&_p]:my-0">
                <p>
                  <b>DELF B2:</b> 80/100 (05/2022)
                </p>
                <p className="text-sm italic">
                  French language (1st national class)
                </p>
                <p className="text-sm italic">Listening 15/25, Reading 20/25</p>
                <p className="text-sm italic">Writing 24/25, Speaking 21/20</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-2">
        <div className="header">
          <div className="bg-gray-100 flex items-center p-4">
            <div className="mx-5">
              <h4 className="size-sm">Prizes</h4>
            </div>
          </div>
        </div>
        <div className="p-4 [&_p]:my-0">
          <div className="grid grid-cols-4 gap-1 ">
            <div className="col-span-1 sm:col-span-1 time mr-auto ">
              <p className="text-[#4682b4] italic">03/2019</p>
            </div>
            <div className="name col-span-4 sm:col-span-3">
              <p className="">Erasmus Mundus Scholarship</p>
              <p className="text-sm md:text-lg">INSA Centre Val De Loire</p>
              <p className="italic text-sm md:text-lg">Fourth-year student</p>
            </div>
          </div>
          <br />
          <div className="grid grid-cols-4 gap-1 ">
            <div className="col-span-1 sm:col-span-1 time mr-auto ">
              <p className="text-[#4682b4] italic">01/2015</p>
            </div>
            <div className="name col-span-4 sm:col-span-3">
              <p className="">Mathematical Encouragement Prize</p>
              <p className="text-sm md:text-lg">
                National excellent student for Mathematical
              </p>
              <p className="italic text-sm md:text-lg">Grade: 12</p>
            </div>
          </div>
          <br />
          <div className="grid grid-cols-4 gap-1 ">
            <div className="col-span-1 sm:col-span-1 time mr-auto ">
              <p className="text-[#4682b4] italic">10/2014</p>
            </div>
            <div className="name col-span-4 sm:col-span-3">
              <p className="">First Prize</p>
              <p className="text-sm md:text-lg">
                Provincial excellent student for Mathematical of Quang Nam
              </p>
              <p className="italic text-sm md:text-lg">Grade: 12</p>
            </div>
          </div>
          <br />
          <div className="grid grid-cols-4 gap-1 ">
            <div className="col-span-1 sm:col-span-1 time mr-auto ">
              <p className="text-[#4682b4] italic">04/2014</p>
            </div>
            <div className="name col-span-4 sm:col-span-3">
              <p className="">Bronze Medal</p>
              <p className="text-sm md:text-lg">
                Mathematical Olympiad 30-4 for High School Students
              </p>
              <p className="italic text-sm md:text-lg">Grade: 11</p>
            </div>
          </div>

          <br />
          <div className="grid grid-cols-4 gap-1 ">
            <div className="col-span-1 sm:col-span-1 time mr-auto ">
              <p className="text-[#4682b4] italic">10/2013</p>
            </div>
            <div className="name col-span-4 sm:col-span-3">
              <p className="">Second Prize</p>
              <p className="text-sm md:text-lg">
                Provincial excellent student for Mathematical of Quang Nam
              </p>
              <p className="italic text-sm md:text-lg">Grade: 11</p>
            </div>
          </div>

          <br />
          <div className="grid grid-cols-4 gap-1 ">
            <div className="col-span-1 sm:col-span-1 time mr-auto ">
              <p className="text-[#4682b4] italic">04/2013</p>
            </div>
            <div className="name col-span-4 sm:col-span-3">
              <p className="">Gold Medal</p>
              <p className="text-sm md:text-lg">
                Mathematical Olympiad 30-4 for High School Students
              </p>
              <p className="italic text-sm md:text-lg">Grade: 10</p>
            </div>
          </div>

          <br />
          <div className="grid grid-cols-4 gap-1 ">
            <div className="col-span-1 sm:col-span-1 time mr-auto ">
              <p className="text-[#4682b4] italic">03/2012</p>
            </div>
            <div className="name col-span-4 sm:col-span-3">
              <p className="">Third Prize</p>
              <p className="text-sm md:text-lg">
                Provincial excellent student for Mathematical of Quang Nam
              </p>
              <p className="italic text-sm md:text-lg">Grade: 9</p>
            </div>
          </div>
          <br />
          <div className="grid grid-cols-4 gap-1 ">
            <div className="col-span-1 sm:col-span-1 time mr-auto ">
              <p className="text-[#4682b4] italic">03/2012</p>
            </div>
            <div className="name col-span-4 sm:col-span-3">
              <p className="">First Prize</p>
              <p className="text-sm md:text-lg">
                Provincial excellent student for mathematical Casio of Quang Nam
              </p>
              <p className="italic text-sm md:text-lg">Grade: 9</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
