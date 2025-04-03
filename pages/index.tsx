import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { Image, Card, CardBody } from "@heroui/react";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="relative">
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
          className="text-white text-4xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          New Life Project
        </h1>
      </div>
    </div>
      <section>
        <div className="container mx-auto max-w-full flex-grow pt-2 sm:m-4 sm:px-6 md:m-12 ">
          <p className="text-center text-justify font-bold text-2xl m-6">Our reason to exist: To help children in Comayagua in general educational and biblical formation.</p>
          <p className="text-center text-justify mt-2 text-lg m-6">The New Life Project is a ministry whose vision is to transform children in an integral way and in this way change their lives and give them the necessary knowledge so that these children can change their lives firstly in the spiritual area and collaterally in the rest, and so that these children can be examples in their country, their family, and their community.</p>
        </div>
      </section>
    </DefaultLayout>
  );
}
