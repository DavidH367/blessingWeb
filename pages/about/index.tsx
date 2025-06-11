import DefaultLayout from "@/layouts/default";
import { Image } from "@heroui/react";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <div className="relative opacity-100">
        <div className="absolute inset-0 bg-blue-500 opacity-65 z-10"></div>
        <Image
          alt="Main Image"
          src="../about_.jpeg"
          radius="none"
          width="100%"
          height="400px"
          style={{ objectFit: "cover", opacity: 0.6 }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1
            className="text-white text-6xl font-extrabold text-center "
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Sombra alrededor del texto
            }}
          >
            Who We Are
          </h1>
        </div>
      </div>

      <section>
        <div className="container max-w-full flex-grow tracking-wide pb-32 py-14 px-10 md:px-20 lg:px-50 xl:px-40 2xl:px-80">
          <p className="text-center text-justify font-bold text-2xl">Our purpose: Is to train and mobilize passionate disciples of Christ building strategic partnerships with pastors, leaders, churches, and like-minded organizations.</p>
          <p className="text-center text-justify text-xl py-6 tracking-normal">
            We believe that training before sending is essential. A well-prepared missionary is equipped to face the challenges of the mission field with strong faith and a willing heart.</p>
        </div>
      </section>
      <div className="relative opacity-90">
        <div className="absolute inset-0 bg-blue-500 opacity-35 z-10"></div>
        <Image
          alt="Main Image"
          src="../about_impact.png"
          radius="none"
          width="100%"
          height="600px"
          style={{ objectFit: "cover", opacity: 0.6 }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 h-[600px]">
          <h1
            className="text-white text-3xl md:text-6xl font-extrabold"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Sombra alrededor del texto
            }}
          >
            Blessing to the Nations and its impact
          </h1>
          <div className="container max-w-full tracking-wide py-8 px-6 md:pb-8 md:py-14 md:px-10 lg:px-20 xl:px-40 2xl:px-[400px]">
            <p className="font-bold text-lg md:text-2xl text-white">
              We aim to contribute to the spiritual and social development of children, youth, and adults transformed by the Word of God.
            </p>
            <p className="text-justify text-md md:text-xl py-6 tracking-normal text-white">
              We believe the effect of this movement will be multiplicative and generational,
              leaving behind a lasting legacy of hope in Christ among those who live without God, without faith, and without hope.
            </p>

          </div>
        </div>
      </div>
      <section>
        <div className="container max-w-full tracking-wide  py-8 px-6 md:pb-8 md:py-14 md:px-10 lg:px-20 xl:px-40 2xl:px-[400px] flex flex-col items-center justify-center text-center z-10 ">
          <h2
            className="text-black text-2xl md:text-6xl font-extrabold text-center "
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Sombra alrededor del texto
            }}
          >
            Serving others
          </h2>
          <p className="text-justify text-md md:text-xl py-6 tracking-normal text-black">
            At MEBN, we serve among peoples, tribes, and languages with one goal:
            to do what Jesus did—bringing faith and hope to those who most need to experience the love of God.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

          <div className="flex flex-col items-center text-center">
            <img
              src="/7.png"
              alt="Icon 1"
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <h3 className="text-lg md:text-xl font-bold mt-4">Community</h3>
            <p className="text-sm md:text-base mt-2">
              The true Gospel is lived out with consistency between what we say and what we do. That is why, in every circumstance,
              we follow Jesus example to genuinely connect with people.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/3.png"
              alt="Icon 3"
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <h3 className="text-lg md:text-xl font-bold mt-4">God</h3>
            <p className="text-sm md:text-base mt-2">
              We aim to contribute to the spiritual and social development of children, youth, and adults transformed by the Word of God.
            </p>
          </div>


          <div className="flex flex-col items-center text-center">
            <img
              src="/2.png"
              alt="Icon 2"
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <h3 className="text-lg md:text-xl font-bold mt-4">Education</h3>
            <p className="text-sm md:text-base mt-2">
              We believe the effect of this movement will be multiplicative and generational,
              leaving behind a lasting legacy of hope in Christ among those who live without God,
              without faith, and without hope.
            </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
