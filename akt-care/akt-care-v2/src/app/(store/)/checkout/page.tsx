import React, { useState } from 'react';
import { useCartStore } from '@/store/useCartStore';
import { paymentService, PaymentResponse } from '@/services/paymentService';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<'address' | 'payment'>('address');
  const router = useRouter();

  const handlePayment = async () => {
    setIsLoading(true);
    const amount = getTotal() * 1.12;
    const response: PaymentResponse = await paymentService.processPayment(amount, {
      method: 'MockCard',
      currency: 'INR',
    });

    setIsLoading(false);
    if (response.success) {
      clearCart();
      router.push('/success');
    } else {
      alert(`Payment Failed: ${response.error}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full px-4 py-12">
      <h1 className="text-3xl font-bold text-foreground mb-8 text-center">Secure Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          {step === 'address' ? (
            <div className="bg-white border border-gray-100 rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Delivery Address</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-muted">Full Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-muted">Address</label>
                  <textarea className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="House No, Street, Area..."></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-muted">City</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="City" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-muted">Pincode</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="110001" />
                  </div>
                </div>
              </div>
              <Button variant="primary" className="w-full py-6" onClick={() => setStep('payment')}>
                Continue to Payment
              </Button>
            </div>
          ) : (
            <div className="bg-white border border-gray-100 rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Payment Method</h3>
              <div className="space-y-3">
                <div className="p-4 border-2 border-primary rounded-xl flex items-center justify-between bg-primary/5 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">💳</span>
                    <span className="font-semibold text-foreground">Credit / Debit Card</span>
                  </div>
                  <input type="radio" checked readOnly />
                </div>
                <div className="p-4 border border-gray-200 rounded-xl flex items-center justify-between hover:border-primary cursor-pointer transition-all">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📱</span>
                    <span className="font-semibold text-foreground">UPI (GPay, PhonePe)</span>
                  </div>
                  <input type="radio" />
                </div>
                <div className="p-4 border border-gray-200 rounded-xl flex items-center justify-between hover:border-primary cursor-pointer transition-all">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🏦</span>
                    <span className="font-semibold text-foreground">Net Banking</span>
                  </div>
                  <input type="radio" />
                </div>
              </div>
              <Button variant="primary" className="w-full py-6" isLoading={isLoading} onClick={handlePayment}>
                Pay Now & Confirm Order
              </Button>
              <Button variant="ghost" className="w-full" onClick={() => setStep('address')}>
                Go back to address
              </Button>
            </div>
          )}
        </div>

        <div className="bg-gray-50 rounded-3xl p-6 h-fit space-y-6">
          <h3 className="text-lg font-bold text-foreground">Payment Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-text-muted">
              <span>Total Amount</span>
              <span>₹{Math.round(getTotal() * 1.12)}</span>
            </div>
            <div className="flex justify-between text-text-muted">
              <span>Delivery Charge</span>
              <span className="text-green-600">FREE</span>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-400 text-center mb-4">Secure 256-bit SSL Encrypted Payment</p>
            <div className="flex justify-center gap-2 opacity-50 grayscale">
              <div className="w-8 h-5 bg-gray-300 rounded"></div>
              <div className="w-8 h-5 bg-gray-300 rounded"></div>
              <div className="w-8 h-5 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
