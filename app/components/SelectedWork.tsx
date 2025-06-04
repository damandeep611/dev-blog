import Link from "next/link";

const selectedWorks = [
  {
    title: "ReuseMotion",
    info: "react Tailwind + Animated Components UI library",
    href: "https://reusemotion.vercel.app/",
  },
  {
    title: "BuildxSkill ",
    info: "Habit and skill tracker with Analytics",
    href: "https://buildxskill.vercel.app/",
  },
  {
    title: "Synap Directory",
    info: "Bookmarking tool to use and store frequently used resources effectively ",
    href: "https://synap.directory/",
  },
  {
    title: "Agentic",
    info: "coming soon",
    href: "/",
  },
  {
    title: "Github",
    info: "see more on",
    href: "https://github.com/damandeep611",
  },
];

export default function SelectedWork() {
  return (
    <section className="w-full mx-auto px-4 md:px-16">
      <div className="mt-16 ">
        <p className="font-mono py-8 uppercase">
          Some Tools and webApps that i've made
        </p>
        {/* project cards */}
        <div className="flex items-center justify-start">
          <div className="w-full">
            {selectedWorks.map((work) => (
              <SelectedWorkCards
                link={work.href}
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
  link: string;
}

const SelectedWorkCards = ({ title, info, link }: selectedWorksCardsProps) => {
  return (
    <Link href={link} target="_blank">
      <div className=" flex items-center justify-between border-b border-black w-full group">
        <div className="py-6 border-b flex flex-col ">
          <p className="text-[0.8rem] uppercase">{info}</p>
          <h2 className="text-5xl md:text-[4rem] capitalize  tracking-tight transition-all duration-300 group-hover:pl-4 group-hover:text-gray-700">
            {title}
          </h2>
        </div>
        <span className="opacity-0 text-[3rem] group-hover:opacity-100 transition-opacity duration-300">
          {" "}
          →
        </span>
      </div>
    </Link>
  );
};
