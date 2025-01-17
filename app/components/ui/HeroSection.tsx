"use client";


export default function HeroSection() {
  return (
    <section className="min-h-screen">
      <div className="flex flex-col md:flex-row mt-24 md:mt-4 px-4 items-center">
        {/* left info col */}
        <div className="flex-1 ">
          <div className=" rounded-3xl overflow-hidden relative min-h-[700px]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 animate-gradient">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)] animate-wave"></div>
            </div>
            <div className="absolute bg-white bottom-0 rounded-r-2xl p-12">
              <h1 className="text-black text-6xl font-bold max-w-2xl">
                developer & creative designer
              </h1>
            </div>
          </div>
        </div>
        {/* right project column  */}
        <div className="w-[400px] flex flex-col items-center justify-between gap-2 px-4">
          {/* Stats Circle */}
          <div className="aspect-square">
            <div className="bg-black rounded-full w-full h-full flex flex-col items-center justify-center text-white p-8">
              <h2 className="text-5xl md:text-6xl font-bold mb-2">
                UI Library
              </h2>
              <p className="text-center text-gray-300 text-base md:text-lg">
                Animations filled React Tailwind and framer motion UI library
              </p>
            </div>
          </div>
          <div className="aspect-square">
            <div className="bg-[#6C5CE7] rounded-3xl w-full h-full p-8 flex flex-col">
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-16 md:w-20 h-16 md:h-20 mb-8 relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl" />
                  <div className="relative w-full h-full bg-white/90 rounded-full flex items-center justify-center">
                    <GlobeIcon />
                  </div>
                </div>
                <h3 className="text-white text-2xl md:text-3xl font-semibold text-center leading-tight">
                  How to make local Ai Agent to assit in Coding
                </h3>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-8 h-1 rounded-full ${
                        i === 4 ? "bg-white" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
                <button
                  className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
                  aria-label="Learn more"
                >
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="w-12 h-12 text-[#6C5CE7]"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}