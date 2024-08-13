"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { StepAddress } from "@/components/checkout/step-address";
import { StepFinish } from "@/components/checkout/step-finish";
import { StepUser } from "@/components/checkout/step-user";
import { Steps } from "@/types/steps";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const CheckoutDialog = ({ open, onOpenChange }: Props) => {
  const [step, setStep] = useState<Steps>("user");

  let progreesPct = 0;
  switch (step) {
    case "user":
      progreesPct = 30;
      break;
    case "address":
      progreesPct = 70;
      break;
    case "finish":
      progreesPct = 100;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {step === "user" && "Personal data"}
            {step === "address" && "Delivery address"}
            {step === "finish" && "Finalize the order"}
          </DialogTitle>
        </DialogHeader>

        <Progress value={progreesPct} />

        <div className="flex flex-col gap-3">
          {step === "user" && <StepUser setStep={setStep} />}
          {step === "address" && <StepAddress setStep={setStep} />}
          {step === "finish" && <StepFinish />}
        </div>
      </DialogContent>
    </Dialog>
  );
};
