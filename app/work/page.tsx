import { ArrowLeft } from "lucide-react";
import WorkPage from "./WorkPage";

const Work = () => {
  return (
    <div className="container mx-auto p-6">
      <span className="flex items-center gap-1 text-xs text-neutral-400">
        <ArrowLeft className="h-5" /> back to home
      </span>
      <h1 className="text-2xl font-bold p-12">
        I'm a proactive developer who enjoys developing innovative products and
        partnering with users to ensure they meet real needs.{" "}
      </h1>
      <div>
        <WorkPage />
      </div>
    </div>
  );
};

export default Work;
