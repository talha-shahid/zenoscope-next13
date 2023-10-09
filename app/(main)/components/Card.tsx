import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IconType } from "react-icons";
import { Separator } from "@/components/ui/separator";

//Interface
interface CardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  body: React.ReactElement;
  actionLabel: string;
}

// Create a submit function
// function handleSubmit(action: SubmitAction) {
//   switch (action) {
//     case SubmitAction.SAVE:
//       // Perform save action
//       console.log("Performing save action");
//       break;
//     case SubmitAction.UPDATE:
//       // Perform update action
//       console.log("Performing update action");
//       break;
//     case SubmitAction.DELETE:
//       // Perform delete action
//       console.log("Performing delete action");
//       break;
//     default:
//       // Handle unknown action (optional)
//       console.error("Unknown action");
//   }
// }

const CardWithForm: React.FC<CardProps> = ({
  icon,
  title,
  subtitle,
  body,
  actionLabel,
}) => {
  console.log(icon);
  return (
    <Card className="w-[500px]">
      <CardHeader>
        <div className="flex items-center">
          {icon}
          <span className="ml-4">
            <CardTitle>{title}</CardTitle>
          </span>
        </div>
        {subtitle && <CardDescription>{subtitle}</CardDescription>}
      </CardHeader>
      <Separator className="mb-7" />
      {body}
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>{actionLabel}</Button>
      </CardFooter>
    </Card>
  );
};

export default CardWithForm;
