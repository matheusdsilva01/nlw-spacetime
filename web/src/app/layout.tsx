import { Bai_Jamjuree, Roboto_Flex } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

import Copyright from "../components/Copyright";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Signin from "../components/Signin";

const roboto = Roboto_Flex({ subsets: ["latin"], variable: "--font-roboto" });
const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bai-jamjuree"
});

export const metadata = {
  title: "NLW spacetime - Matheus Silva",
  description: "Capsula do tempo desenvolvida no NLW spacetime"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = cookies().has("token");

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2">
          <section className=" relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"></div>

            <div className="absolute bottom-0 right-2 top-0 w-2  bg-stripes"></div>

            {isAuthenticated ? <Profile /> : <Signin />}

            <Hero />
            <Copyright />
          </section>

          <section className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-14">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
