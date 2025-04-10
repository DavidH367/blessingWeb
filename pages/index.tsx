import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { Image, Card, CardBody, Button } from "@heroui/react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import {
  HeartFilledIcon,
} from "@/components/icons";
import { useState } from "react";


export default function IndexPage() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "../img_home.png",
      title: "Sponsor a Child",
      description:
        "Our reason to exist: To help children in Honduras in general educational and biblical formation.",
    },
    {
      image: "../img_second.png",
      title: "Transform Lives",
      description:
        "Join us in making a difference in the lives of children through education and faith.",
    },
    {
      image: "../img_third.png",
      title: "Make an Impact",
      description:
        "Your support helps provide education and hope for a brighter future.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <DefaultLayout>
      <div className="relative w-full h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ${
              index === currentSlide ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              transform:
                index === currentSlide
                  ? "translateX(0)"
                  : index < currentSlide
                  ? "translateX(-100%)"
                  : "translateX(100%)",
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-start justify-start z-10 p-6 sm:p-10 md:p-16 lg:p-32">
              <div className="bg-transparent w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <h1
                  className="text-shadow-lg text-white text-3xl sm:text-4xl md:text-4xl font-extrabold text-left"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                  }}
                >
                  {slide.title}
                </h1>
                <p className="text-shadow-lg text-white text-left font-semibold text-lg sm:text-xl md:text-2xl mt-4">
                  {slide.description}
                </p>
                <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100 mt-4"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor now
          </Button>
              </div>
            </div>
          </div>
        ))}

        <Button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &#8249;
        </Button>
        <Button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &#8250;
        </Button>
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
          src="../background_sponsor.png"
          radius="none"
          width="100%"
          height="600px"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 h-[600px]">
        <h2
            className="text-black text-2xl md:text-6xl font-extrabold text-center "
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Sombra alrededor del texto
            }}
          >
            Sponsor a Child
          </h2>
          <div className="container max-w-full tracking-wide py-8 px-6 md:pb-8 md:py-14 md:px-10 lg:px-20 xl:px-40 2xl:px-[400px]">
            
          </div>
        </div>
      </div>
      <section>
        
      </section>

    </DefaultLayout>
  );
}
