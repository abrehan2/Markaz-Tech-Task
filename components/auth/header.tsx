// IMPORTS -
import { headerProps } from "@/types/header";

export const Header: React.FC<headerProps> = ({ label, heading }) => {
  return (
    <div
      className="w-full flex flex-col gap-y-4 *:
    items-center justify-center"
    >
      <h1 className={"text-3xl font-semibold"}>{heading}</h1>

      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
