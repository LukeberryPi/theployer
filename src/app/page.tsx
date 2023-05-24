import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto flex-col pt-20 flex h-full w-full text-center justify-center">
      <section
        id="hero-banner"
        className="border-b border-zinc-800 flex flex-col gap-10 items-center justify-center py-36"
      >
        <h1 className="text-6xl font-medium text-white">
          Deployment documentation
          <span className="text-berryBlue"> made effortless</span>
        </h1>
        <h3 className="-mt-2 text-2xl text-zinc-400">
          Streamline your processes, enhance collaboration, and ensure seamless{" "}
          <br />
          deployments with our intuitive tools and user-friendly interface.
        </h3>
        <div className="flex gap-14 items-center">
          <Link
            className="transition-all active:translate-y-1 text-xl hover:bg-berryBlue hover:text-black border border-berryBlue text-berryBlue py-4 px-8"
            href="/board"
          >
            Get started
          </Link>
          <Link
            className="hover:underline underline-offset-4 text-xl"
            href="#benefits"
          >
            Learn more
          </Link>
        </div>
      </section>
      <section
        id="benefits"
        className="border-b border-zinc-800 flex flex-col gap-10 items-center justify-center py-36"
      >
        <h2 className="text-6xl font-medium text-white">Benefits</h2>
        <h3 className="-mt-2 text-2xl text-zinc-400">
          Streamline your processes, enhance collaboration, and ensure seamless{" "}
          <br />
          deployments with our intuitive tools and user-friendly interface.
        </h3>
      </section>
      <section
        id="resources"
        className="border-b border-zinc-800 flex flex-col gap-10 items-center justify-center py-36"
      >
        <h2 className="text-6xl font-medium text-white">Resources</h2>
        <h3 className="-mt-2 text-2xl text-zinc-400">
          Streamline your processes, enhance collaboration, and ensure seamless{" "}
          <br />
          deployments with our intuitive tools and user-friendly interface.
        </h3>
      </section>
      <section
        id="upgrade"
        className="border-b border-zinc-800 flex flex-col gap-10 items-center justify-center py-36"
      >
        <h2 className="text-6xl font-medium text-white">Upgrade</h2>
        <h3 className="-mt-2 text-2xl text-zinc-400">
          Streamline your processes, enhance collaboration, and ensure seamless{" "}
          <br />
          deployments with our intuitive tools and user-friendly interface.
        </h3>
      </section>
      <section
        id="faq"
        className="flex flex-col gap-10 items-center justify-center py-36"
      >
        <h2 className="text-6xl font-medium text-white">FAQ</h2>
        <h3 className="-mt-2 text-2xl text-zinc-400">
          Streamline your processes, enhance collaboration, and ensure seamless{" "}
          <br />
          deployments with our intuitive tools and user-friendly interface.
        </h3>
      </section>
    </main>
  );
}
