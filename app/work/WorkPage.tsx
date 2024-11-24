import { projects } from "@/lib/project-data";
import WorkCard from "../components/WorkCard";

export default function WorkPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1>These are projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((work, index) => (
          <div key={index}>
            <WorkCard
              title={work.title}
              image={work.image}
              overlayHeading={work.heading}
              overlayInfo={work.info}
              description={work.description}
              tags={work.tags}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
