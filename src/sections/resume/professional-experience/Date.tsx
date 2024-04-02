import { differenceInMonths, format } from "date-fns";
type Props = { date: { start: string; end?: string } };

const WorkingDate = ({ date: { start, end } }: Props) => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : null;
  const present = new Date();
  const totalMonths = differenceInMonths(endDate ?? present, startDate);
  return (
    <p className="px-2 py-1 bg-secondary whitespace-nowrap rounded-md">
      {format(startDate, "LLLL y")} - {endDate ? format(endDate, "LLLL y") : "Present"} | {totalMonths}
      {" month" + (totalMonths > 1 ? "s" : "")}
    </p>
  );
};

export default WorkingDate;
