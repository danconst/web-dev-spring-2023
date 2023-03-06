import { ref } from "vue";
import type { Product } from "./products";
const cart = ref([]);
export function useCart() {
    return cart
}
export interface CartItem {
    productId : number;
    quantity: number;
    product: Product;
}
