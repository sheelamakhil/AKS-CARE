import React from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { Button } from '@/components/ui/button';

export default function ProfilePage() {
  const { user, logout } = useAuthStore();

  if (!user) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center space-y-4">
        <p className="text-text-muted">You must be logged in to view your profile.</p>
        <Button variant="primary" onClick={() => window.location.href = '/login'}>Login Now</Button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto w-full px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="bg-white border border-gray-100 rounded-3xl p-6 text-center space-y-4">
            <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center text-3xl mx-auto font-bold">
              {user.fullName[0]}
            </div>
            <div>
              <h2 className="font-bold text-foreground text-lg">{user.fullName}</h2>
              <p className="text-xs text-text-muted">{user.email}</p>
            </div>
            <Button variant="outline" size="sm" className="w-full" onClick={logout}>
              Logout
            </Button>
          </div>
          <div className="bg-white border border-gray-100 rounded-3xl p-4 space-y-2">
            <button className="w-full text-left px-4 py-3 rounded-xl bg-primary/5 text-primary font-medium text-sm">My Orders</button>
            <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-text-muted font-medium text-sm transition-colors">Account Settings</button>
            <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-text-muted font-medium text-sm transition-colors">Manage Addresses</button>
            <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-text-muted font-medium text-sm transition-colors">Help & Support</button>
          </div>
        </div>
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white border border-gray-100 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">My Orders</h3>
            <div className="space-y-4">
              <div className="p-4 border border-gray-100 rounded-2xl space-y-3 hover:border-primary transition-colors cursor-pointer">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-text-muted">Order #AKS-98231</span>
                  <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-green-100 text-green-600 uppercase">Delivered</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-xl">💊</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">Paracetamol 500mg</p>
                    <p className="text-xs text-text-muted">Ordered on May 15, 2026</p>
                  </div>
                  <span className="font-bold text-foreground">₹39.00</span>
                </div>
              </div>
              <div className="p-4 border border-gray-100 rounded-2xl space-y-3 hover:border-primary transition-colors cursor-pointer">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-text-muted">Order #AKS-98240</span>
                  <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-blue-100 text-blue-600 uppercase">Processing</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-xl">🌿</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">Multivitamin Complex</p>
                    <p className="text-xs text-text-muted">Ordered on May 18, 2026</p>
                  </div>
                  <span className="font-bold text-foreground">₹249.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
