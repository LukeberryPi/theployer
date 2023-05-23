import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col gap-12 items-center justify-center h-screen">
        <h1 className="text-6xl text-white">
          Document your deploy in a
          <span className="text-berryBlue"> simple, shareable way</span>
        </h1>
        <div className="flex gap-16 items-center">
          <Link
            className="text-2xl border border-berryBlue text-berryBlue py-4 px-8"
            href="/board"
          >
            Get Started
          </Link>
          <Link className="text-3xl" href="/about">
            Learn More
          </Link>
        </div>
      </section>
    </main>
  );
}
