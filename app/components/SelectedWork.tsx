const selectedWorks = [
  {
    title: "Kallista UI",
    info: "react Tailwind UI library",
  },
  {
    title: "Tracker ",
    info: "Habit and skill tracker with time",
  },
  {
    title: "BuildxPrompt",
    info: "Text Prompt Library ",
  },
  {
    title: "Agentic",
    info: "coming soon",
  },
  {
    title: "Github",
    info: "see more on",
  },
];

export default function SelectedWork() {
  return (
    <section className="w-full mx-auto max-w-[1160px] px-10">
      <div className="mt-16 ">
        <p className="text-lg text-center uppercase">Selected work</p>
        {/* project cards */}
        <div className="flex items-center justify-start">
          <div className="w-full">
            {selectedWorks.map((work) => (
              <SelectedWorkCards
                key={work.title}
                title={work.title}
                info={work.info}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface selectedWorksCardsProps {
  title: string;
  info: string;
}

const SelectedWorkCards = ({ title, info }: selectedWorksCardsProps) => {
  return (
    <div className=" flex items-center justify-between border-b border-black w-full group">
      <div className="py-6 border-b flex flex-col ">
        <p className="text-[0.8rem] uppercase">{info}</p>
        <h2 className="text-[6rem] capitalize  tracking-tight transition-all duration-300 group-hover:pl-4 group-hover:text-gray-700">
          {title}
        </h2>
      </div>
      <span className="opacity-0 text-[3rem] group-hover:opacity-100 transition-opacity duration-300">
        {" "}
        →
      </span>
    </div>
  );
};
