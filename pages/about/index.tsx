import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Image, Card, CardBody } from "@heroui/react";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <div className="relative opacity-90">
        <Image
          alt="Main Image"
          src="../img_main.png"
          radius="none"
          width="100%"
          height="400px"
          style={{ objectFit: "cover" }}
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
          <p className="text-center text-justify font-bold text-2xl">Our reason to exist: To help children in Honduras in general educational and biblical formation.</p>
          <p className="text-center text-justify text-xl py-6 tracking-normal">The New Life Project is a ministry whose vision is to transform children in an integral way and in this way change their lives and give them the necessary knowledge so that these children can change their lives firstly in the spiritual area and collaterally in the rest, and so that these children can be examples in their country, their family, and their community.</p>
        </div>
      </section>
      <div className="relative opacity-90">
        <Image
          alt="Main Image"
          src="../img_second.png"
          radius="none"
          width="100%"
          height="600px"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 h-[600px]">
          <h1
            className="text-white text-2xl md:text-6xl font-extrabold"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Sombra alrededor del texto
            }}
          >
            Kids and Education
          </h1>
          <div className="container max-w-full tracking-wide py-8 px-6 md:pb-8 md:py-14 md:px-10 lg:px-20 xl:px-40 2xl:px-[400px]">
            <p className="font-bold text-lg md:text-2xl text-white">
              La educación es un proceso continuo que involucra tanto a la escuela como a la familia. Cuando ambos trabajan juntos, los niños y jóvenes desarrollan mejor sus habilidades intelectuales, emocionales y sociales.
            </p>
            <p className="text-justify text-md md:text-xl py-6 tracking-normal text-white">
              Esta alianza beneficia a los estudiantes a que mejoren su rendimiento y adaptación, los padres entienden mejor el desarrollo de sus hijos, y las escuelas crean un mejor ambiente de aprendizaje. Los padres tienen un rol clave en la prevención de problemas y en el apoyo educativo.
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
            New Life Project, today
          </h2>
          <p className="text-justify text-md md:text-xl py-6 tracking-normal text-black">
            Esta alianza beneficia a los estudiantes a que mejoren su rendimiento y adaptación,
            los padres entienden mejor el desarrollo de sus hijos,
            y las escuelas crean un mejor ambiente de aprendizaje.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

          <div className="flex flex-col items-center text-center">
            <img
              src="/1.png"
              alt="Icon 1"
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <h3 className="text-lg md:text-xl font-bold mt-4">Niños</h3>
            <p className="text-sm md:text-base mt-2">
              Breve descripción del primer icono.
            </p>
          </div>


          <div className="flex flex-col items-center text-center">
            <img
              src="/3.png"
              alt="Icon 3"
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <h3 className="text-lg md:text-xl font-bold mt-4">Dios</h3>
            <p className="text-sm md:text-base mt-2">
              Breve descripción del tercer icono.
            </p>
          </div>


          <div className="flex flex-col items-center text-center">
            <img
              src="/2.png"
              alt="Icon 2"
              className="w-20 h-20 md:w-24 md:h-24"
            />
            <h3 className="text-lg md:text-xl font-bold mt-4">Educación</h3>
            <p className="text-sm md:text-base mt-2">
              Breve descripción del segundo icono.
            </p>
          </div>


        </div>
      </section>
    </DefaultLayout>
  );
}
