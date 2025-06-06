import { Link } from "@heroui/link";

import { Card, CardHeader, CardFooter, Image, Button, Chip } from "@heroui/react";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import {
  HeartFilledIcon,
} from "@/components/icons";
import { useEffect, useState } from "react";
import { collection, query, where, orderBy, limit, startAfter, getDocs, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { db } from "@/lib/firebase";


export default function NlpPage() {
  const [children, setChildren] = useState<{ id: string;[key: string]: any }[]>([]);
  const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchChildren = async (nextPage = false, reset = false) => {
    setLoading(true);
    try {
      const childrenRef = collection(db, "nlp");
  
      // Obtener el total de niños para calcular las páginas
      const totalSnapshot = await getDocs(query(childrenRef, where("sponsor_code", "==", "N/A")));
      const totalChildren = totalSnapshot.size;
      setTotalPages(Math.ceil(totalChildren / 4)); // 4 niños por página
  
      let q = query(
        childrenRef,
        where("sponsor_code", "==", "N/A"),
        orderBy("dates_sponsorship", "asc"),
        limit(4)
      );
  
      if (nextPage && lastVisible) {
        q = query(
          childrenRef,
          where("sponsor_code", "==", "N/A"),
          orderBy("dates_sponsorship", "asc"),
          startAfter(lastVisible),
          limit(4)
        );
      }
  
      const querySnapshot = await getDocs(q);
  
      // Si no hay más datos, reinicia la paginación
      if (querySnapshot.empty) {
        console.log("No more children to fetch. Restarting pagination.");
        setPage(1);
        fetchChildren(false, true); // Reinicia desde la primera página
        return;
      }
  
      const newChildren = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      setChildren(reset ? newChildren : [...children, ...newChildren]);
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    } catch (error) {
      console.error("Error fetching children:", error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleNextPage = () => {
    setPage((prev) => prev + 1);
    fetchChildren(true, true); // Reemplazar los datos al avanzar de página
  };
  
  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      fetchChildren(false, true); // Reemplazar los datos al retroceder de página
    }
  };

  useEffect(() => {
    fetchChildren();
  }, []);
  
  const slides = [
    {
      image: "../img_home.png",
      title: "Sponsor a Child",
      description:
        "New Life Project School is a ministry that transforms children through education and faith.",
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
            className={`absolute inset-0 transition-transform duration-700 ${index === currentSlide ? "translate-x-0" : "translate-x-full"
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
          onPress={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &#8249;
        </Button>
        
        <Button
          onPress={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &#8250;
        </Button>
      </div>
      <section>
        <div className="container max-w-full flex-grow tracking-wide pb-24 py-14 px-10 md:px-20 lg:px-50 xl:px-40 2xl:px-80">
          <p className="text-center text-justify font-bold text-2xl">Proyecto Nueva Vida exists to shape and guide children so that they grow with Christ-like character, empowering them to follow their God-given passions and purpose.</p>
          <p className="text-center text-justify text-xl py-6 tracking-normal">The New Life Project is a ministry whose vision is to transform children in an integral way and in this way change their lives and give them the necessary knowledge so that these children can change their lives firstly in the spiritual area and collaterally in the rest, and so that these children can be examples in their country, their family, and their community.</p>
        </div>
      </section>
      <div className="relative opacity-90 ">
        <div className="flex flex-col items-center justify-start text-center z-10">
          <h2
            className="text-black text-2xl md:text-6xl font-extrabold text-center"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
            }}
          >
            Sponsor a Child
          </h2>

          <section className="container mx-auto py-10 px-4 mb-20">
            <div className="flex flex-wrap justify-center gap-6">
              {children.map((child) => (
                <Card key={child.id} isFooterBlurred className="w-52 h-full">
                  <CardHeader className="absolute z-10 flex-col items-center bg-slate-400/50 p-2">
                    <h4 className="text-white text-tiny font-bold uppercase text-sm text-center">
                      {child.firstname} {child.lastname}
                    </h4>
                  </CardHeader>
                  {child.imageurl ? (
                    <Image
                      removeWrapper
                      alt="Child Cards"
                      className="z-0 w-[250px] h-[300px] scale-100 object-cover"
                      src={child.imageurl}
                    />
                  ) : (
                    <div className="z-0 w-[250px] h-[300px] scale-100 bg-gray-300 animate-pulse"></div>
                  )}
                  <CardFooter className="absolute bg-white/30 bottom-0 border-t-0 border-zinc-100/50 z-10 grid justify-items-center text-center p-1">
                    <div>
                      <p className="text-black text-tiny">
                        Age: {Math.floor((Date.now() - new Date(child.date.seconds * 1000).getTime()) / (1000 * 60 * 60 * 24 * 365.25))}
                      </p>
                      <Button
                        className="text-black text-tiny w-16 h-6 rounded-md bg-white"
                        onPress={() => console.log("More Info", child)}
                      >
                        More Info
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <Button
                disabled={page === 1 || loading}
                onPress={handlePrevPage}
                className="bg-gray-300 text-black px-4 py-2 rounded"
              >
                Previous
              </Button>
              <Button
                disabled={loading}
                onPress={handleNextPage}
                className="bg-gray-300 text-black px-4 py-2 rounded"
              >
                Next
              </Button>
            </div>
          </section>
        </div>
      </div>
      <section>
        <div className="container max-w-full flex-grow tracking-wide pb-24 py-14 px-10 md:px-20 lg:px-50 xl:px-40 2xl:px-80">
          <p className="text-center text-justify font-bold text-4xl">Sponsoring a child at New Life Project School: why is it so important?</p>
          <p className="text-center text-justify text-xl py-6 tracking-normal "><a className="text-blue-600 after:content-['_↗']" href="https://xmainc-bloom.kindful.com/?campaign=1295533">
          The New Life Project</a> Sponsoring a child from PNV not only transforms their life forever, 
          it also opens their heart to the love and hope that can only be found in Jesus Christ. 
          It’s more than an act of generosity — it’s planting eternity in the heart of a child.</p>
        </div>
      </section>
      <section>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 p-6">

          <div className="flex flex-col items-center text-center">
            <img 
              src="/4.png"
              alt="Icon 4"
              className="w-25 h-20 md:w-24 md:h-24"
            />
            <h3 className="text-lg md:text-xl font-bold mt-4">Kids</h3>
            <p className="text-sm md:text-base mt-2">
              The children of Proyecto Nueva Vida are a living reflection of the mercy and grace we receive through salvation in Christ. 
              He gives us new life, and our desire is to offer that same opportunity to the children in our community.
            </p>
          </div>


          <div className="flex flex-col items-center text-center">
            <img
              src="/5.png"
              alt="Icon 5"
              className="w-20 h-25 md:w-24 md:h-24"
            />
            <h3 className="text-lg md:text-xl font-bold mt-4">Jesus</h3>
            <p className="text-sm md:text-base mt-2">
              Jesus is our everything. Nothing is more important than Him. Everything we do has one purpose: to glorify His name.
            </p>
          </div>


          <div className="flex flex-col items-center text-center">
            <img
              src="/6.png"
              alt="Icon 6"
              className="w-22 h-20 md:w-24 md:h-24"
            />
            <h3 className="text-lg md:text-xl font-bold mt-4">School</h3>
            <p className="text-sm md:text-base mt-2">
              Education transforms lives, opening doors to new opportunities. Families can now dream without limits and walk in faith toward a better future.
            </p>
          </div>


        </div>
      </section>
    </DefaultLayout>
  );
}
