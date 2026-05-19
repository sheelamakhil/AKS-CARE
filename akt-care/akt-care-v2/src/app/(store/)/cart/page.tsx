import React from 'react';
import { useCartStore } from '@/store/useCartStore';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
        <p className="text-text-muted mb-8">Looks like you haven't added any medicines yet.</p>
        <Link href="/pharmacy">
          <Button variant="primary" size="lg">Go to Pharmacy</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto w-full px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-3xl font-bold text-foreground mb-8">Your Shopping Cart</h1>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-4 hover:shadow-sm transition-all">
              <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center text-2xl">💊</div>
              <div className="flex-1 space-y-1">
                <h3 className="font-semibold text-foreground">{item.name}</h3>
                <p className="text-xs text-text-muted">₹{item.discountPrice} per unit</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="font-medium w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
              <div className="text-right min-w-[80px]">
                <p className="font-bold text-foreground">₹{item.discountPrice * item.quantity}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-[10px] text-red-500 font-semibold hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-3xl p-6 h-fit sticky top-24 space-y-6">
        <h3 className="text-lg font-bold text-foreground">Order Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm text-text-muted">
            <span>Items Total</span>
            <span>₹{getTotal()}</span>
          </div>
          <div className="flex justify-between text-sm text-text-muted">
            <span>Delivery Fee</span>
            <span className="text-green-600 font-medium">FREE</span>
          </div>
          <div className="flex justify-between text-sm text-text-muted">
            <span>Taxes (GST)</span>
            <span>₹{Math.round(getTotal() * 0.12)}</span>
          </div>
          <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
            <span className="font-bold text-foreground">Grand Total</span>
            <span className="text-2xl font-bold text-primary">₹{Math.round(getTotal() * 1.12)}</span>
          </div>
        </div>
        <Link href="/checkout" className="block w-full">
          <Button variant="primary" size="lg" className="w-full py-6">
            Proceed to Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
}
