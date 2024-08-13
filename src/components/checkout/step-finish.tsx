import { useCheckoutStore } from "@/stores/ckeckout";
import { Button } from "../ui/button";
import Link from "next/link";
import { generateMessage } from "@/lib/genereate-message";

export const StepFinish = () => {
  const { name } = useCheckoutStore((state) => state);

  const message = generateMessage();
  const linkZap = `https://wa.me//${
    process.env.NEXT_PUBLIC_ZAP
  }?text=${encodeURI(message)}`;

  return (
    <div className="text-center flex flex-col gap-5">
      <p>
        Perfect <strong>{name}</strong>!
      </p>
      <p>
        Now send your order to our WhatsApp to complete. Our attendant will
        guide you through the progress of your order.
      </p>
      <Button>
        <Link target="_blank" href={linkZap}>
          Send to WhatsApp
        </Link>
      </Button>
    </div>
  );
};
