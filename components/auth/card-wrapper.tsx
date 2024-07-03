// IMPORTS -
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Header } from "./header";
import { cardWrapperProps } from "@/types/card";

export const CardWrapper: React.FC<cardWrapperProps> = ({
  children,
  headerLabel,
}) => {
  return (
    <Card className="w-[400px] shadow-sm">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
};
