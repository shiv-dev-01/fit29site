export type CartItem = {
  sku: string;
  name: string;
  price: number;
  image: string;
  checkoutUrl?: string;
};

const KEY = "cart";
const EVT = "fit29:cart-updated";

export const readCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
};

const writeCart = (items: CartItem[]) => {
  localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent(EVT));
};

export const addToCart = (item: CartItem): "added" | "exists" => {
  const cart = readCart();
  if (cart.some((c) => c.sku === item.sku)) return "exists";
  cart.push(item);
  writeCart(cart);
  return "added";
};

export const removeFromCart = (sku: string) => {
  writeCart(readCart().filter((c) => c.sku !== sku));
};

export const clearCart = () => writeCart([]);

export const cartCount = () => readCart().length;

export const onCartChange = (cb: () => void) => {
  window.addEventListener(EVT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVT, cb);
    window.removeEventListener("storage", cb);
  };
};

const extractId = (url?: string): string | null => {
  if (!url) return null;
  try {
    const u = new URL(url);
    return u.searchParams.get("id");
  } catch {
    const m = url.match(/[?&]id=([^&]+)/);
    return m ? m[1] : null;
  }
};

export const checkoutUrl = () => {
  const cart = readCart();
  if (cart.length === 0) return "https://checkout.fit29.com/";
  const ids = cart.map((c) => extractId(c.checkoutUrl)).filter(Boolean) as string[];
  if (ids.length === 0) return "https://checkout.fit29.com/";
  return `https://checkout.fit29.com/?id=${ids.join(",")}`;
};
