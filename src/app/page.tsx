import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-col pt-20 flex h-full w-full text-center justify-center">
      <section
        id="hero-banner"
        className="border-b border-zinc-800 flex flex-col gap-10 items-center justify-center py-36"
      >
        <h1 className="text-6xl font-bold text-white">
          Deployment documentation
          <span className="text-berryBlue"> made effortless</span>
        </h1>
        <h3 className="text-2xl text-zinc-400 px-48">
          Streamline your processes, enhance collaboration, and ensure seamless
          deployments with our
          <strong className="text-zinc-200"> intuitive tools</strong> and
          <strong className="text-zinc-200"> user-friendly interface.</strong>
        </h3>
        <div className="flex gap-14 items-center">
          <Link
            className="transition-all active:translate-y-1 text-xl hover:bg-berryBlue hover:text-black border border-berryBlue text-berryBlue py-4 px-8"
            href="/board"
          >
            Get Started
          </Link>
          <Link
            className="hover:underline underline-offset-4 text-xl"
            href="#benefits"
          >
            Learn More
          </Link>
        </div>
      </section>
      <section
        id="benefits"
        className="border-b border-zinc-800 flex flex-col gap-10 items-center justify-center py-36"
      >
        <h2 className="text-6xl font-medium text-white">Benefits</h2>
        <h3 className="text-2xl text-zinc-400 px-48">
          Streamline your processes, enhance collaboration, and ensure seamless{" "}
          deployments with our intuitive tools and user-friendly interface.
        </h3>
      </section>
      <section
        id="resources"
        className="border-b border-zinc-800 flex flex-col gap-10 items-center justify-center py-36"
      >
        <h2 className="text-6xl font-medium text-white">Resources</h2>
        <h3 className="text-2xl text-zinc-400 px-48">
          Streamline your processes, enhance collaboration, and ensure seamless{" "}
          deployments with our intuitive tools and user-friendly interface.
        </h3>
      </section>
      <section
        id="faq"
        className="container mx-auto flex flex-col gap-10 py-36"
      >
        <h2 className="text-6xl font-medium text-white">FAQ</h2>
        <details className="flex justify-start text-left w-fit">
          <summary className="cursor-pointer text-2xl">
            How does the details-tag work?
          </summary>
          <p className="text-zinc-400 text-lg mt-4">
            The details tag works as an interactive widget that hides / shows
            content.
          </p>
        </details>
        <details className="flex justify-start text-left w-fit">
          <summary className="cursor-pointer text-2xl">
            How does the summary-tag work?
          </summary>
          <p className="text-zinc-400 text-lg mt-4">
            The summary tag works as the heading of the details tag. The summary
            will always be shown and can be clicked to show or hide the other
            content of the details-tag
          </p>
        </details>
        <details className="flex justify-start text-left w-fit">
          <summary className="cursor-pointer text-2xl">
            What content can I put in the details-tag?
          </summary>
          <p className="text-zinc-400 text-lg mt-4">
            You can put any content you want inside of the details-tag, though
            the summary-tag should be the first child.
          </p>
        </details>
        <details className="flex justify-start text-left w-fit">
          <summary className="cursor-pointer text-2xl">
            Can I have a details-tag open by default?
          </summary>
          <p className="text-zinc-400 text-lg mt-4">
            Yes you can, simply add the open attribute to the details-tag
          </p>
        </details>
      </section>
    </main>
  );
}
