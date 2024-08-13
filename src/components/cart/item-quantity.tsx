import { useCartStore } from "@/stores/cart-store";
import { Cart } from "@/types/cart"
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
    cartItem: Cart;
}


export const CartItemQuantity = ({ cartItem }: Props) => {
    const { upsertCartItem } = useCartStore(state => state)

    const handlePlusButton = ( ) => {
        upsertCartItem(cartItem.product, 1)
    }

    const handleMinusButton = ( ) => {
       upsertCartItem(cartItem.product, -1) 
    }
    return (
        <div className="flex items-center gap-2">
            <Button onClick={handlePlusButton} variant="outline" size='icon' className="size-5"> <Plus className="size-3"/> </Button>
            <div className="text-xs">
                {cartItem.quantity}
            </div>
            <Button onClick={handleMinusButton} variant="outline" size='icon' className="size-5"> <Minus className="size-3"/> </Button>
        </div>
    )
}