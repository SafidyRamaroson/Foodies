"use client"

import { useContext, createContext, useState, ReactNode, useEffect } from "react";


export type CartItem = {
    name: string;
    price: number;
    image?: string;
    quantity: number;
}

type CartContextType = {
    items: CartItem[],
    cartTotal: number,
    itemCount: number,
    isInCart: (name: string) => void,
    addToCart: (item: Omit<CartItem, "quantity">) => void,
    removeFromCart: (name: string) => void;
    increaseQuantity: (name: string) => void;
    descreaseQuantity: (name: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isMounted, setIsMounted] = useState<boolean>(false);


    useEffect(() => {
        setIsMounted(true);
        const savedCart = typeof window !== "undefined" ? localStorage.getItem("cart") : null;

        if (savedCart) {
            setItems(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        if (isMounted) {

            localStorage.setItem("cart", JSON.stringify(items));
        }
    }, [items, isMounted])

const isInCart = (name: string) => {
    return items.some(item => item.name === name)
}

const cartTotal = items?.reduce((total, item) => total + item.quantity * item.price, 0)

const itemCount = items.reduce((count, item) => count + item.quantity, 0);
const addToCart = (item: Omit<CartItem, "quantity">) => {
    setItems((prevItems) => {
        const existingtem = prevItems.find(cartItem => cartItem.name == item.name);

        if (existingtem) {
            return prevItems.map(cartItem => cartItem.name == item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
        }

        return [...prevItems, { ...item, quantity: 1 }]
    })
}


const removeFromCart = (name: string) => {
    setItems((prevItems) => prevItems.filter(cartItem => cartItem.name !== name))
}

const increaseQuantity = (name: string) => {
    setItems((prevItems) => {
        return prevItems.map(cartItem => cartItem.name == name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    })
}

const descreaseQuantity = (name: string) => {
    setItems((prevItems) => {
        const existingItem = prevItems.find(cartItem => cartItem.name == name);

        if (existingItem?.quantity == 1) {
            return prevItems.filter(cartItem => cartItem.name !== name)
        }

        return prevItems?.map(cartItem => cartItem.name == name ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
    })
}

return (
    <CartContext.Provider
        value={{
            items,
            cartTotal,
            itemCount,
            isInCart,
            addToCart,
            removeFromCart,
            increaseQuantity,
            descreaseQuantity
        }}
    >
        {children}
    </CartContext.Provider>
)
}

export function useCart() {
    const context = useContext(CartContext);

    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }

    return context
}

