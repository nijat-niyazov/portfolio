import { format } from "date-fns";
type Props = {
  startDate: Date;
  endDate: Date | null;
  totalMonths: number;
};
const WorkingDate = ({ startDate, endDate, totalMonths }: Props) => {
  return (
    <p className="px-2 py-1 bg-main-content text-balance rounded-md">
      {format(startDate, "LLLL y")} - {endDate ? format(endDate, "LLLL y") : "Present"} | <br className="md:hidden" /> {totalMonths}
      {" month" + (totalMonths > 1 ? "s" : "")}
    </p>
  );
};

export default WorkingDate;
