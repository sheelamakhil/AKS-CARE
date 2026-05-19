import React, { useState } from 'react';
import { CATEGORIES, FEATURED_PRODUCTS } from '@/lib/mock-data';
import { ProductCard } from '@/components/store/ProductCard';
import { Button } from '@/components/ui/button';

export default function PharmacyPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter(p => p.category.toLowerCase() === activeCategory);

  return (
    <div className="max-w-7xl mx-auto w-full px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Online Pharmacy</h1>
          <p className="text-text-muted">Get genuine medicines delivered quickly to your home.</p>
        </div>
        <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-lg">
          <Button
            variant={activeCategory === 'all' ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setActiveCategory('all')}
          >
            All
          </Button>
          {CATEGORIES.map(cat => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filteredProducts.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="text-text-muted">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
