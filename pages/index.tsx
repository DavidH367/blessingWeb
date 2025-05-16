import { Link } from "@heroui/link";

import { Card, CardHeader, CardBody, CardFooter, Image, Button, Chip, Divider } from "@heroui/react";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import {
  HeartFilledIcon,
} from "@/components/icons";
import { useEffect, useState } from "react";
import { collection, query, where, orderBy, limit, startAfter, getDocs, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { db } from "@/lib/firebase";


export default function IndexPage() {

  return (
    <DefaultLayout>
      <div className="relative w-full h-[550px] overflow-hidden">
        <Image
          alt="Main Image"
          src="../MainBTTN.png"
          radius="none"
          width="100%"
          height="600px"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-blue-500 opacity-25 z-10"></div>
        <div className="absolute inset-0 flex items-start justify-start z-10 p-6 sm:p-10 md:p-16 lg:p-32">
          <div className="absolute inset-0 flex flex-col items-start justify-center z-10 space-y-4 p-6 md:px-16 lg:px-20">
            <h1
              className="text-white text-6xl font-extrabold text-left"
              style={{
                fontFamily: "'Playfair Display', serif",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Sombra alrededor del texto
              }}
            >
              Bringing blessing to all Nations
            </h1>
            <p className="text-shadow-lg text-white text-left font-semibold text-lg sm:text-xl md:text-2xl">
              We mobilize with purpose, obeying the Great Commission, to be a light amid darkness.
            </p>
            <p className="text-shadow-lg text-white text-left text-lg sm:text-xl md:text-2xl">
              Matthew 28 and Acts 1:8
            </p>
            <Button
              isExternal
              as={Link}
              className="text-sm font-normal text-default-600 bg-default-100"
              href={siteConfig.links.sponsor}
              startContent={<HeartFilledIcon className="text-danger" />}
              variant="flat"
            >
              Support
            </Button>
          </div>
        </div>
      </div>

      <section className="py-32">
        <div className="container max-w-full tracking-wide  py-8 px-6 md:pb-8 md:py-14 md:px-10 lg:px-20 xl:px-40 2xl:px-[400px] flex flex-col items-center justify-center text-center z-10 ">
          <h2
            className="text-blue-900 text-2xl md:text-6xl font-extrabold text-center "
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Sombra alrededor del texto
            }}
          >
            Our Mision
          </h2>
          <p className="text-justify text-xl md:text-3xl py-6 tracking-normal text-black">
            To carry out practical missions centered on Christ, moving in faith and love, in service to people and communities in need.
          </p>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 justify-items-center p-6">
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="EMIH"
              height={120}
              radius="sm"
              src="../logo_emih.png"
              width={160}
            />
            <div className="flex flex-col">
              <p className="text-md">Intercultural Missions School of Honduras</p>
              <p className="text-small text-default-500">Lema</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>IMSH is a school created to contribute to the integral formation of men and women called to go to the unreached (Romans 10:14-15).</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui">
              See more about IMSH...
            </Link>
          </CardFooter>
        </Card>


        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="NLP"
              height={120}
              radius="sm"
              src="../nlp_logo_rectangular.png"
              width={160}
            />
            <div className="flex flex-col">
              <p className="text-md">New Life Project</p>
              <p className="text-small text-default-500">Lema</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>NLP is a school that seeks to form and guide children to grow up with Christ-like character, empowering them to follow their God-given passions and purpose.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui">
              See more about NLP...
            </Link>
          </CardFooter>
        </Card>

        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            <Image
              alt="BMC"
              height={120}
              radius="sm"
              src="../logo_bethesda.jpg"
              width={160}
            />
            <div className="flex flex-col">
              <p className="text-md">Bethesda Medical Center</p>
              <p className="text-small text-default-500">Lema</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Brief description: Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui">
              See more about BMC...
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="relative min-h-[700px] sm:min-h[1000px] md:h-[800px] h-auto">
        <div className="absolute inset-0 bg-blue-900 z-10"></div>
        <Image
          alt="Main Image"
          src="../whatwedo.jpg"
          radius="none"
          width="100%"
          height="1000px"
          style={{
            objectFit: "cover",
            opacity: 0.1,
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 min-h-[800px] md:min-h-screen p-6">
          <h1
            className="text-white text-4xl md:text-6xl font-extrabold"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Sombra alrededor del texto
            }}
          >
            What we do
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 m-10">

            <div className="flex flex-col items-center text-center">
              <Image
                src="/serve.png"
                alt="Icon 5"
                className="w-20 h-25 md:w-40 md:h-36"
              />
              <h3 className="text-2xl md:text-3xl font-bold mt-4 text-white">Serve</h3>
              <p className="text-sm md:text-base mt-2 text-white">
                At MEBN, we serve among peoples, tribes, and languages with one goal:
                to do what Jesus did—bringing faith and hope to those who most need to experience the love of God.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image
                src="/connect.png"
                alt="Icon 4"
                className="w-25 h-20 md:w-36 md:h-36"
              />
              <h3 className="text-2xl md:text-3xl font-bold mt-4 text-white">Connect</h3>
              <p className="text-sm md:text-base mt-2 text-white">
                Jesus is our supreme model of missionary leadership. He taught that loving your neighbor is at the core of the Gospel.
              </p>
            </div>




            <div className="flex flex-col items-center text-center">
              <Image
                src="/educate.png"
                alt="Icon 6"
                className="w-22 h-20 md:w-36 md:h-36"
              />
              <h3 className="text-2xl md:text-3xl font-bold mt-4 text-white">Educate</h3>
              <p className="text-sm md:text-base mt-2 text-white">
                We believe that training before sending is essential.
                A well-prepared missionary is equipped to face the challenges of the mission field with strong faith and a willing heart.
              </p>
            </div>


          </div>
        </div>
      </div>
      <section>
        <div className="container max-w-full flex-grow tracking-wide pb-6 py-14 px-10 md:px-20 lg:px-50 xl:px-40 2xl:px-80">
          <p className="text-center text-justify font-bold text-4xl">Updates</p>
          <p className="text-center text-justify text-xl py-6 tracking-normal "><a className="text-blue-600 after:content-['_↗']" href="https://xmainc-bloom.kindful.com/?campaign=1295533">
            The New Life Project</a> is a ministry whose vision is to transform children in an integral way and in this way change their lives and give them the necessary knowledge so that these children can change their lives firstly in the spiritual area and collaterally in the rest, and so that these children can be examples in their country, their family, and their community.</p>
        </div>
      </section>
      <section>
        <div className="w-full gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 px-8 pb-24">
          <Card isFooterBlurred className="w-full h-[250px]">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Notice subject:</p>
              <h4 className="text-white/90 font-medium text-xl">Notice Tittle:</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://heroui.com/images/album-cover.png"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="https://heroui.com/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Brief notice description</p>
                </div>
              </div>
              <Button radius="full" size="sm">
                More Info
              </Button>
            </CardFooter>
          </Card>

          <Card isFooterBlurred className="w-full h-[250px]">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Notice subject:</p>
              <h4 className="text-white/90 font-medium text-xl">Notice Tittle:</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://heroui.com/images/album-cover.png"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="https://heroui.com/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Brief notice description</p>
                </div>
              </div>
              <Button radius="full" size="sm">
                More Info
              </Button>
            </CardFooter>
          </Card>

          <Card isFooterBlurred className="w-full h-[250px]">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Notice subject:</p>
              <h4 className="text-white/90 font-medium text-xl">Notice Tittle:</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://heroui.com/images/album-cover.png"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="https://heroui.com/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Brief notice description</p>
                </div>
              </div>
              <Button radius="full" size="sm">
                More Info
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}
