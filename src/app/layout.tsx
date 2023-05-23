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
      <body className={`bg-zinc-950 text-white ${dmSans.className}`}>
        <nav className="text-white fixed top-0 text-lg bg-zinc-950 w-full px-6 py-4">
          <ul className="flex w-full items-center justify-between">
            <li>
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
            <li>
              Your next deploy is{" "}
              <span className="text-berryBlue">Today at 2PM</span>
            </li>
            <li className="flex items-center gap-10">
              <a href="#">Login</a>
              <a
                className="border border-berryBlue text-berryBlue py-2 px-4"
                href="#"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
        {children}
        <footer className="flex items-center fixed w-full bottom-0 py-5 justify-center">
          <p>
            Created by{" "}
            <Link
              href="https://twitter.com/LukeberryPi"
              target="_blank"
              className="text-berryBlue"
            >
              @LukeberryPi
            </Link>{" "}
            / 2023
          </p>
        </footer>
      </body>
    </html>
  );
}
