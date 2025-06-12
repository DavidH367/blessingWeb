import { Image } from "@heroui/react";
import DefaultLayout from "@/layouts/default";
import { FiPhone, FiMail, FiMapPin, FiCreditCard } from "react-icons/fi"; // Importa los iconos

export default function DocsPage() {
  return (
    <DefaultLayout>
      <div className="relative opacity-90">
        <Image
          alt="Main Image"
          src="https://firebasestorage.googleapis.com/v0/b/mebnapp3.appspot.com/o/imagenes%2FimagenesWeb%2Fwhatwedo.jpg?alt=media&token=55dc734f-d482-49bb-a4c8-8e431d4614e9"
          radius="none"
          width="100%"
          height="400px"
          style={{ objectFit: "cover", objectPosition: "50% 70%" }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1
            className="text-white text-6xl font-extrabold text-center "
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Sombra alrededor del texto
            }}
          >
            Contact Us
          </h1>
        </div>
      </div>
      <section>
        <div className="container max-w-full flex-grow tracking-wide pb-32 py-14 px-4 md:px-20 lg:px-50 xl:px-40 2xl:px-80">
          <p className="text-center font-bold text-2xl">Do you have questions, comments or would you like to order information material?</p>
          <p className="text-center text-justify text-xl py-8 tracking-normal">Talk to us: here is our address, phone number and email address.
            Call us at the phone number that suits your needs or send us an email to ask for more information.
            We are at your disposal and we will be happy to help you.Intercultural Missions School of Honduras</p>
        </div>
      </section>

      <div className="relative w-full h-[950px] overflow-hidden">
        <div className="absolute inset-0 bg-blue-500 opacity-15 z-10"></div>
        <section>
          <div className="container max-w-full flex-grow tracking-wide pb-32 py-14 px-10 md:px-20 lg:px-50 xl:px-40 2xl:px-80">
            <p className="text-center font-bold text-3xl">Contact Information</p>
            <p className="flex flex-col sm:flex-row items-center justify-start text-lg sm:text-xl md:text-2xl py-4 sm:py-6 tracking-normal px-2 sm:px-0">
              <FiPhone className="mr-2" /> <span className="font-bold">Telephone :</span><span>+504 9999-9999</span> 
            </p>
            <p className="flex flex-col sm:flex-row items-center justify-start text-lg sm:text-xl md:text-2xl py-4 sm:py-6 tracking-normal px-2 sm:px-0">
              <FiMail className="mr-2" /> <span className="font-bold">EMail :</span> <span>blessingtothenations@gmail.com</span>
            </p>
            <p className="flex flex-col sm:flex-row items-center justify-start text-lg sm:text-xl md:text-2xl py-4 sm:py-6 tracking-normal px-2 sm:px-0">
              <FiMapPin className="mr-2" /> <span className="font-bold">Location</span>
            </p>
            <div className="flex justify-center py-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2097.522651881887!2d-87.81275601123696!3d14.481054552082346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2shn!4v1747349582151!5m2!1ses-419!2shn"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps location of Asociación Compassion España"
              />
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className="container max-w-full flex-grow tracking-wide pb-32 py-14 px-10 md:px-20 lg:px-50 xl:px-40 2xl:px-80">

          <p className="text-center text-justify text-3xl py-6 tracking-normal flex items-center justify-start">
            <FiCreditCard className="mr-2" /> <span className="font-bold">Donation Information:</span>
          </p>
          <p className="text-center text-justify text-xl py-6 tracking-normal"><span className="font-bold">Online Donation</span>: through this page, with Paypal you will be able to make your donation securely with credit card and prepaid cards.</p>
        </div>
      </section>
    </DefaultLayout>
  );
}
