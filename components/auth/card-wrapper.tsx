// IMPORTS -
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Header } from "./header";
import { cardWrapperProps } from "@/types/card";

export const CardWrapper: React.FC<cardWrapperProps> = ({
  children,
  headerLabel,
}) => {
  return (
    <div className="h-[60vh] flex justify-center items-center overflow-hidden">
      <Card className="w-[500px] shadow-sm ">
        <CardHeader>
          <Header label={headerLabel} />
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
};
