import { Image } from "@heroui/react";
import DefaultLayout from "@/layouts/default";
import { useEffect, useState } from "react";

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
           Contact Us
          </h1>
        </div>
      </div>
    </DefaultLayout>
  );
}
