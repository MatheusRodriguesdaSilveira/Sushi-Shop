import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet"
import { RocketIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/stores/cart-store"
import { CartItem } from "./item"
import { useState } from "react"
import { CheckoutDialog } from "../checkout/dialog"

type CartSideBarProps = {
    isOpen: boolean;
    onClose: () => void;
}

export const CartSideBar = ({ isOpen, onClose }: CartSideBarProps) => {
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const {cart} = useCartStore(state => state);

    let subtotal = 0;
    for (let item of cart) {
        subtotal += item.quantity * item.product.price;
    }


    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                        <RocketIcon/>Cart
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-5 my-3">
                    {cart.map(item => (
                        <CartItem key={item.product.id} item={item} />
                    ))}
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between items-center text-xs">
                    <div>Subtotal:</div>
                    <div>${subtotal.toFixed(2)}</div>
                </div>

                <Separator className="my-4" />

                <div className="text-center">
                    <Button onClick={() => setCheckoutOpen(true)} disabled={cart.length === 0}>
                        Finalize Purchase
                    </Button>
                </div>

                <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />

            </SheetContent>
        </Sheet>
    )
}
