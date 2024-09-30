export default function Banner() {
  return (
    <section className="flex flex-col max-w-6xl h-dvh  w-full ">
      <div className="mt-8 max-w-4xl">
        <h2 className="text-2xl font-semibold my-6">About Me</h2>
        <div className="flex flex-col gap-4">
          <p className="text-4xl font-semibold">
            <span className="text-base">Developer based in India</span> <br />{" "}
            Driven by curiosity and building high quality applications.
          </p>
          <span className="text-xl text-neutral-600 ">
            Architecting end-to-end solutions: From user interface to database
            backbone. Mastering the details, orchestrating the whole.
          </span>
        </div>
      </div>
    </section>
  );
}
