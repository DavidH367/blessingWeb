import { Link } from "@heroui/link";
import { Image } from "@heroui/react";
import { Head } from "./head";
import { Divider } from "@heroui/divider";
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <Divider className="m-2" />
      <main className="container mx-auto max-w-full flex-grow flex-shrink-0 pt-1">
        {children}
      </main>
      <footer className="w-full flex flex-col items-center justify-end py-3 flex-shrink-0">
        
        <div className="relative opacity-90 flex flex-col items-center">
          
          <Image
            alt="Main Image"
            src="../img_footer.png"
            radius="none"
            width="100%"
            height="100px"
            style={{ objectFit: "cover" }}
          />

          <div className="w-full" style={{ height: "80px", backgroundColor: "#012d67" }} />
        </div>
        <Link
          isExternal
          className="flex flex-col items-center gap-1 text-current mt-4"
          href="https://xmaonline.com/from-student-to-teacher/"
          title="xma homepage"
        >
          <span className="text-default-600">© Copyright All Rights Reserved</span>
          <p className="text-primary">Ministerio Bendicion a las Naciones 2008-2025</p>
        </Link>
        
      </footer>
    </div>
  );
}
