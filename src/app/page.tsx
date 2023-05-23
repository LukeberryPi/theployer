import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col gap-12 items-center justify-center h-screen">
        <h1 className="text-6xl text-white">
          Document your deploy in the
          <span className="text-berryBlue"> simplest way</span>
        </h1>
        <div className="flex gap-14 items-center">
          <Link
            className="text-2xl hover:bg-berryBlue hover:text-black transition-colors border border-berryBlue text-berryBlue py-4 px-8"
            href="/board"
          >
            Get started
          </Link>
          <Link
            className="hover:underline underline-offset-4 text-2xl"
            href="/about"
          >
            Learn more
          </Link>
        </div>
      </section>
    </main>
  );
}
