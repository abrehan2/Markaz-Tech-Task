// IMPORTS -
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Header } from "./header";
import { cardWrapperProps } from "@/types/card";

export const CardWrapper: React.FC<cardWrapperProps> = ({
  children,
  headerLabel,
  headingLabel,
}) => {
  return (
    <div className="lg:h-[60vh] xl:h-[60vh] h-[55vh] flex justify-center items-center overflow-hidden">
      <Card className="w-[500px] shadow-sm ">
        <CardHeader>
          <Header label={headerLabel} heading={headingLabel} />
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
};
