"use client"

import { useState } from "react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme";
import { CartSideBar } from "@/components/cart/sideBar";
import { RocketIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart-store";

export const Header = () => {
    const {cart} = useCartStore(state => state);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleOpenCart = () => {
        setIsCartOpen(true);
    };

    const handleCloseCart = () => {
        setIsCartOpen(false);
    };

    return (
        <header className="flex justify-between items-center my-5 mx-3">
            <div className="flex items-center gap-3">
                <Logo/>
                <ThemeToggle/>
            </div>

            <div className="flex items-center gap-3">
                <Button onClick={handleOpenCart} className="flex items-center relative">
                    <RocketIcon className="mr-2" />
                    <p>Cart</p>
                    {cart.length > 0 && 
                        <div className="absolute size-3 bg-red-500 rounded-full -right-1 -top-1"></div>
                    }
                </Button>
                <CartSideBar isOpen={isCartOpen} onClose={handleCloseCart} />
            </div>
        </header>
    );
}
