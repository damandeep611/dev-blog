import { format } from "date-fns";

export default function DateComponent({ dateString }: { dateString: string }) {
  return (
    <time dateTime={dateString} className="text-gray-600 dark:text-gray-400">
      {format(new Date(dateString), "MMMM d, yyyy")}
    </time>
  );
}
