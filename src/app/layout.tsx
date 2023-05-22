import { LogoRocket } from "@/icons";
import "./globals.css";
import { DM_Sans } from "next/font/google";

export const metadata = {
  title: "theployer",
  description: "Your loyal deploy companion",
};

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-offBlack overflow-hidden text-white ${dmSans.className}`}
      >
        <nav className="text-berryBlue bg-offBlack w-full px-8 py-4">
          <ul className="flex w-full items-center justify-between">
            <li className="flex items-center">
              <LogoRocket />
              <h1 className="text-2xl">theployer</h1>
            </li>
            <li className="flex justify-between items-center w-36">
              <a href="#">Login</a>
              <a className="bg-berryBlue text-offBlack py-2 px-4" href="#">
                Signup
              </a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
