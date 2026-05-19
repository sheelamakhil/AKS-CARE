import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center space-y-6">
      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-4">
        ✅
      </div>
      <h1 className="text-3xl font-bold text-foreground">Order Placed Successfully!</h1>
      <p className="text-text-muted max-w-md mx-auto">
        Your medicines are on the way. You can track your order in the account section.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/profile">
          <Button variant="primary" size="lg">View Order Details</Button>
        </Link>
        <Link href="/">
          <Button variant="outline" size="lg">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
