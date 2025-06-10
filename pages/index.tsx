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
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import React from "react";

export default function IndexPage() {

  const [notices, setNotices] = useState<any[]>([]);
  const [imageIndexes, setImageIndexes] = useState<number[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedNotice, setSelectedNotice] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [ministries, setMinistries] = useState<any[]>([]);
  const [currentMinistry, setCurrentMinistry] = useState(0);
  const [modalMinistry, setModalMinistry] = useState<any>(null);
  const { isOpen: isOpenMinistry, onOpen: onOpenMinistry, onClose: onCloseMinistry } = useDisclosure();

  useEffect(() => {
    const fetchNotices = async () => {
      const q = query(collection(db, "news"), where("type", "==", "Necesidad"), orderBy("date", "desc"), limit(3));
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map(doc => doc.data());
      setNotices(docs);
      setImageIndexes(Array(docs.length).fill(0));
    };
    fetchNotices();
  }, []);

  // useEffect para cargar ministerios
  useEffect(() => {
    const fetchMinistries = async () => {
      const q = query(collection(db, "ministries"), orderBy("date", "desc"));
      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map(doc => doc.data());
      setMinistries(docs);
    };
    fetchMinistries();
  }, []);

  // Funciones para el carrusel
  const handlePrevMinistry = () => {
    setCurrentMinistry((prev) => (prev === 0 ? ministries.length - 1 : prev - 1));
  };
  const handleNextMinistry = () => {
    setCurrentMinistry((prev) => (prev === ministries.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (cardIdx: number) => {
    setImageIndexes(prev =>
      prev.map((idx, i) =>
        i === cardIdx
          ? (idx === 0 ? getImages(notices[i]).length - 1 : idx - 1)
          : idx
      )
    );
  };

  const handleNext = (cardIdx: number) => {
    setImageIndexes(prev =>
      prev.map((idx, i) =>
        i === cardIdx
          ? (idx === getImages(notices[i]).length - 1 ? 0 : idx + 1)
          : idx
      )
    );
  };

  // Helper para obtener array de urls de imágenes
  const getImages = (notice: any) => {
    if (!notice?.images) return [];
    return Object.values(notice.images).filter(Boolean);
  };

  return (
    <DefaultLayout>
      <div className="relative w-full h-[550px] overflow-hidden">
        <Image
          alt="Main Image"
          src="../MainBTTN.png"
          radius="none"
          width="100%"
          height="700px"
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
            <a
              href={siteConfig.links.sponsor}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-normal text-default-600 bg-default-100 px-4 py-2 rounded-xl shadow hover:bg-default-200 transition"
            >
              <HeartFilledIcon className="text-danger mr-2" />
              Support
            </a>
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


      <div className="relative w-full max-w-xl mx-auto mb-20">
        <h2
            className="text-blue-900 text-xl md:text-4xl font-extrabold text-center "
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Sombra alrededor del texto
            }}
          >
            Our Ministries
          </h2>
        {ministries.length > 0 && (
          <Card className="max-w-[600px] mx-auto transition-all duration-500">
            <CardHeader className="flex gap-3 flex-col items-center">
              <Image
                alt={ministries[currentMinistry].ministry_name}

                radius="sm"
                src={ministries[currentMinistry].logo_url}
                className="object-contain mx-auto max-h-56"
              />
              <div className="flex flex-col items-center">
                <p className="text-md font-bold">{ministries[currentMinistry].ministry_name}</p>
                <p className="text-small text-default-500">{ministries[currentMinistry].mision}</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>{ministries[currentMinistry].description}</p>
            </CardBody>
            <Divider />
            <CardFooter className="flex justify-between">
              <Button
                className="rounded-xl bg-blue-600 text-white"
                onPress={() => {
                  setModalMinistry(ministries[currentMinistry]);
                  onOpenMinistry();
                }}
              >
                Ver más
              </Button>
              <div className="flex gap-2">
                <Button
                  isIconOnly
                  size="sm"
                  className="rounded-full bg-gray-200"
                  onPress={handlePrevMinistry}
                  aria-label="Anterior"
                >
                  &#8249;
                </Button>
                <Button
                  isIconOnly
                  size="sm"
                  className="rounded-full bg-gray-200"
                  onPress={handleNextMinistry}
                  aria-label="Siguiente"
                >
                  &#8250;
                </Button>
              </div>
            </CardFooter>
          </Card>
        )}


        <Modal isOpen={isOpenMinistry} onClose={onCloseMinistry} backdrop="blur" size="3xl" scrollBehavior="inside">
          <ModalContent>
            {(onCloseMinistry) => (
              modalMinistry && (
                <>
                  <ModalHeader className="flex flex-col gap-1 text-2xl font-bold">
                    {modalMinistry.ministry_name}
                  </ModalHeader>
                  <ModalBody>
                    <div className="flex flex-col gap-2 p-2 justify-center items-center">
                      <Image
                        alt={ministries[currentMinistry].ministry_name}
                        radius="sm"
                        src={ministries[currentMinistry].logo_url}
                        className="object-contain mx-auto max-h-44 justify-center mb-4"
                      />
                      <p><span className="font-bold">Mision:</span> {modalMinistry.mision}</p>
                      <p><span className="font-bold">Vision:</span> {modalMinistry.vision}</p>
                      <p><span className="font-bold">Description:</span> {modalMinistry.description}</p>
                      <p><span className="font-bold">Category:</span> {modalMinistry.category}</p>
                      <p><span className="font-bold">Leader:</span> {modalMinistry.leader}</p>
                      <p>
                        <span className="font-bold">Monthly Budget:</span>
                        <span className="text-green-600 font-bold">
                          {" $"}
                          {Number(modalMinistry.budget).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </span>
                      </p>                      <p><span className="font-bold">Start Date:</span> {modalMinistry.date && new Date(modalMinistry.date.seconds * 1000).toLocaleDateString()}</p>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onCloseMinistry}>
                      Cerrar
                    </Button>
                  </ModalFooter>
                </>
              )
            )}
          </ModalContent>
        </Modal>
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
          <p className="text-center text-justify font-bold text-4xl">Recent Updates</p>
          <p className="text-center text-justify text-xl py-6 tracking-normal "><a className="text-blue-600 after:content-['_↗']"
            href="https://xmainc-bloom.kindful.com/?campaign=1295532">
            Blessing to the Nations Ministry</a> we have identified several key needs for the proper functioning of our organization.
            These include urgent repairs and improvements to the facilities where the children receive classes,
            in order to provide a safe and dignified learning environment.
            In addition, we continue to need support in general areas such as administrative supplies,
            basic maintenance and educational resources. We are deeply grateful for your continued support in this mission.</p>
        </div>
      </section>
      <section>
        <div className={`w-full gap-6 grid px-8 pb-24
      ${notices.length === 1
            ? "grid-cols-1 justify-items-center"
            : notices.length === 2
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 justify-items-center"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3"
          }
      `}>
          {notices.map((notice, idx) => {
            const images = getImages(notice);
            return (
              <Card key={idx} isFooterBlurred className="w-full h-[250px] flex flex-col max-w-[400px]">
                <CardHeader className="absolute z-10 top-1 flex-col items-start bg-black/10 top-0">
                  <p className="text-tiny text-white/60 uppercase font-bold">{notice.minName}</p>
                  <h4 className="text-white/90 font-medium text-xl">{notice.new_title}</h4>
                </CardHeader>
                <div className="relative w-full h-full flex-1 flex items-center justify-center">
                  {images.length > 0 && (
                    <>
                      <Image
                        removeWrapper
                        alt={notice.new_title}
                        className="z-0 w-full h-full object-cover"
                        src={images[imageIndexes[idx]] as string}
                      />
                      {images.length > 1 && (
                        <>
                          <button
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1"
                            onClick={() => handlePrev(idx)}
                            type="button"
                          >
                            &#8592;
                          </button>
                          <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1"
                            onClick={() => handleNext(idx)}
                            type="button"
                          >
                            &#8594;
                          </button>
                        </>
                      )}
                    </>
                  )}
                </div>
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 w-full">
                  <div className="flex flex-grow gap-2 items-center">
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/100">Budget needed: ${Number(notice.act_bugdet).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>
                  </div>
                  <Button
                    radius="full"
                    size="sm"
                    onPress={() => {
                      setSelectedNotice(notice);
                      onOpen();
                    }}
                  >
                    More info
                  </Button>
                </CardFooter>
              </Card>
            );
          })}

          <Modal isOpen={isOpen} onClose={onClose} backdrop="blur" size="5xl" scrollBehavior="inside">
            <ModalContent>
              {(onClose) => (
                selectedNotice && (
                  <>
                    <ModalHeader className="flex flex-col gap-1 text-2xl font-bold">
                      {selectedNotice.new_title}
                    </ModalHeader>
                    <ModalBody>
                      <div className="">
                        <span className="text-xl"><a className="font-bold">Ministry: {selectedNotice.minName}</a> </span>
                      </div>
                      <div className="">
                        <div className="">
                          <span className="font-bold">Description:</span>
                          <br />
                          {selectedNotice.description}
                        </div>
                        <div className="">
                          <span className="">
                            <a className="font-bold">Budged needed:</a>
                            <a className="text-green-600 font-bold">$ {Number(selectedNotice.act_bugdet).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</a>
                          </span>
                        </div>
                        <span className="font-bold">Address:</span> {selectedNotice.zone}
                      </div>
                      <div className="mb-2">
                        <span className="font-bold">Date:</span> {selectedNotice.date && new Date(selectedNotice.date.seconds * 1000).toLocaleDateString()}
                      </div>
                      <div className="mb-2">
                        <div className="flex gap-2 flex-wrap mt-2 justify-center">
                          {selectedNotice.images &&
                            (Object.values(selectedNotice.images) as string[]).map((url, i) => (
                              <Image
                                key={i}
                                src={url}
                                alt={`Imagen ${i + 1}`}
                                width={320}
                                height={220}
                                className="rounded-2xl object-contain bg-white"
                                style={{ maxWidth: 480, maxHeight: 320 }}
                                onClick={() => setSelectedImage(url)}
                              />
                            ))}
                        </div>
                        {selectedImage && (
                          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
                            <button
                              className="absolute top-6 right-8 text-white text-4xl font-bold z-50"
                              onClick={() => setSelectedImage(null)}
                              aria-label="Cerrar"
                            >
                              &times;
                            </button>
                            <img
                              src={selectedImage}
                              alt="Imagen ampliada"
                              className="max-w-[90vw] max-h-[80vh] rounded-2xl shadow-lg"
                              style={{ objectFit: "contain", background: "white" }}
                            />
                          </div>
                        )}
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </>
                )
              )}
            </ModalContent>
          </Modal>
        </div>
      </section>
    </DefaultLayout>
  );
}
