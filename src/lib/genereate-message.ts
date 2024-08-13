import { useCartStore } from "@/stores/cart-store"
import { useCheckoutStore } from "@/stores/ckeckout"

export const generateMessage = () => {
    const { name, address } = useCheckoutStore(state => state)
    const { cart } = useCartStore(state => state)

    let orderProducts = [];
    for(let item of cart){
        orderProducts.push(`${item.quantity}x${item.product.name}`)
    }

return `**Dados do Cliente: **
Name: ${name} |
Address: ${address.state} | ${address.city}, ${address.district}, ${address.street}, ${address.number}, (${address.complement})
-----
*Order:*
${orderProducts.join("\n")}`; 
}