import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto flex h-full w-full text-center justify-center">
      <section className="flex flex-col gap-12 items-center justify-center h-screen xl:px-12">
        <h1 className="text-6xl font-medium text-white">
          Document your deploy in the
          <span className="text-berryBlue"> simplest way</span>
        </h1>
        <div className="flex gap-14 items-center">
          <Link
            className="transition-colors text-2xl hover:bg-berryBlue hover:text-black border border-berryBlue text-berryBlue py-4 px-8"
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
