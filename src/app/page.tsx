import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CATEGORIES, FEATURED_PRODUCTS } from '@/lib/mock-data';

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-primary to-teal-600 text-white py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Health, <br />Our Priority.
            </h1>
            <p className="text-lg text-white/80 max-w-md">
              Get genuine medicines, lab tests, and health products delivered to your doorstep.
              Fast, reliable, and affordable healthcare for everyone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" size="lg" className="font-semibold">
                Order Medicine
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Book Lab Test
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative h-80 w-full">
            <div className="absolute inset-0 bg-white/10 rounded-3xl rotate-3 blur-xl"></div>
            <div className="absolute inset-0 bg-white/20 rounded-3xl -rotate-3 blur-xl"></div>
            <div className="relative h-full w-full bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center backdrop-blur-sm">
              <span className="text-6xl">🏥</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto w-full px-4">
        <h2 className="text-2xl font-bold text-foreground mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="group cursor-pointer p-4 rounded-2xl bg-white border border-gray-100 hover:border-primary hover:shadow-md transition-all text-center space-y-3"
            >
              <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center text-2xl ${cat.color}`}>
                {cat.icon}
              </div>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto w-full px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Featured Products</h2>
          <Button variant="ghost" className="text-primary font-semibold">View All</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-lg transition-all flex flex-col"
            >
              <div className="aspect-square w-full bg-gray-50 rounded-xl mb-4 flex items-center justify-center overflow-hidden relative">
                <span className="text-4xl group-hover:scale-110 transition-transform">💊</span>
                {product.prescriptionRequired && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Prescription Required
                  </span>
                )}
              </div>
              <div className="flex-1 space-y-2">
                <span className="text-[10px] font-bold uppercase text-text-muted tracking-wider">
                  {product.category}
                </span>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
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
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-gray-100">
        <div className="flex items-center gap-4 p-4 rounded-xl bg-accent">
          <div className="p-3 bg-white rounded-full text-xl">🚚</div>
          <div>
            <h4 className="font-semibold text-foreground text-sm">Fast Delivery</h4>
            <p className="text-xs text-text-muted">Same day delivery in selected cities</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 rounded-xl bg-accent">
          <div className="p-3 bg-white rounded-full text-xl">🛡️</div>
          <div>
            <h4 className="font-semibold text-foreground text-sm">100% Genuine</h4>
            <p className="text-xs text-text-muted">Sourced directly from certified brands</p>
          </div>
        </div>
        <div className="flex items-center gap-s4 p-4 rounded-xl bg-accent">
          <div className="p-3 bg-white rounded-full text-xl">👨‍⚕️</div>
          <div>
            <h4 className="font-semibold text-foreground text-sm">Expert Support</h4>
            <p className="text-xs text-text-muted">Certified pharmacists available 24/7</p>
          </div>
        </div>
      </section>
    </div>
  );
}
