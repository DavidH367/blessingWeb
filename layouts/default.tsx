import { Link } from "@heroui/link";

import { Head } from "./head";
import {Divider} from "@heroui/divider";
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
      <Divider className="my-1" />
      <main className="container mx-auto max-w-full flex-grow pt-1">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://xmaonline.com/from-student-to-teacher/"
          title="xma homepage"
        >
          <span className="text-default-600">All Rights Reserved</span>
          <p className="text-primary">Ministerio Bendicion a las Naciones</p>
        </Link>
      </footer>
    </div>
  );
}
