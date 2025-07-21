import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import WorkHeader from "./workHeader";

const Work = () => {
  return (
    <div className=" p-4">
      <Link
        href="/"
        className="flex items-center gap-1 text-xs text-neutral-400"
      >
        <ArrowLeft className="h-5" /> back to home
      </Link>
      <WorkHeader />
    </div>
  );
};

export default Work;
