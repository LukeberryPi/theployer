import Image from "next/image";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Link from "next/link";

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
      <body className={`bg-zinc-950 text-zinc-100 ${dmSans.className}`}>
        <nav className="text-white fixed top-0 text-lg bg-zinc-950 w-full px-6 py-4 border-b border-zinc-800">
          <ul className="flex w-full items-center justify-between">
            <li className="transition-all active:translate-y-1">
              <Link href="/" className="flex gap-4 items-center">
                <Image
                  width={40}
                  height={40}
                  src="/logo.png"
                  alt="theployer logo"
                />
                <h1 className="text-2xl font-bold">theployer.com</h1>
              </Link>
            </li>
            <li className="flex items-center gap-10">
              <a className="hover:underline underline-offset-4" href="#">
                Login
              </a>
              <a
                className="transition-all active:translate-y-1 border hover:bg-berryBlue border-berryBlue hover:text-black text-berryBlue py-2 px-4"
                href="#"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
        {children}
        <footer className="border-t border-zinc-800 flex items-center bg-zinc-950 w-full bottom-0 py-5 justify-center">
          <p>© 2023 LukeberryPi, All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
