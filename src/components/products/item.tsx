"use client"

import { Product } from "@/types/product"
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast"
import { CartSideBar } from "../cart/sideBar";
import { RocketIcon } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/stores/cart-store";

type Props = {
    item: Product;
}

export const ProductItem = ({ item }: Props) => {
    const { toast } = useToast();

    const { upsertCartItem } = useCartStore(state => state)

    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleOpenCart = () => {
        setIsCartOpen(true);
    }

    const handleAddButton = () => {
        upsertCartItem(item, 1);
        toast({
            title: "Adding to cart",
            description: item.name,
            action: (
                <ToastAction onClick={handleOpenCart} altText="Open Cart">
                    <button onClick={handleOpenCart} className="flex justify-center">
                        <RocketIcon className="mr-2" />
                        <p>Open Cart</p>
                    </button>
                </ToastAction>
            ),
        });
    }

    return (
        <div>
            <div className="rounded-md overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-32 object-cover" />
            </div>

            <div className="mt-3 flex flex-col gap-2">
                <p className="text-lg">{item.name}</p>
                <p className="text-sm opacity-50">$ {item.price.toFixed(2)}</p>
                <Button variant="outline" onClick={handleAddButton}>Add to Cart</Button>
            </div>

            <CartSideBar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
    )
}
