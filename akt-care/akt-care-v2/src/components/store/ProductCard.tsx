import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  category: string;
  prescriptionRequired: boolean;
  image: string;
}

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-lg transition-all flex flex-col h-full">
      <Link href={`/product/${product.id}`} className="block relative aspect-square w-full bg-gray-50 rounded-xl mb-4 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
          💊
        </div>
        {product.prescriptionRequired && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            Prescription Required
          </span>
        )}
      </Link>
      <div className="flex-1 space-y-2">
        <span className="text-[10px] font-bold uppercase text-text-muted tracking-wider">
          {product.category}
        </span>
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-text-muted line-clamp-2">
          {product.description}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2">
        <div className="flex flex-col">
          <span className="text-xs text-gray-400 line-through">₹{product.price}</span>
          <span className="text-lg font-bold text-foreground">₹{product.discountPrice}</span>
        </div>
        <Button variant="primary" size="sm" className="h-9 w-9 p-0 rounded-full">
          +
        </Button>
      </div>
    </div>
  );
};
