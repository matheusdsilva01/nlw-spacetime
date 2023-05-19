import { Bai_Jamjuree, Roboto_Flex } from "next/font/google";
import "./globals.css";

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
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
