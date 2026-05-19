import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-gray-200 pt-12 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-xl font-bold text-primary mb-4">Aks Care</h3>
          <p className="text-text-muted text-sm leading-relaxed">
            Your trusted partner in healthcare and pharmacy. Providing quality medicines
            and health services delivered to your doorstep.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-text-muted">
            <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Contact Us</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Pharmacy</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Lab Tests</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Customer Care</h4>
          <ul className="space-y-2 text-sm text-text-muted">
            <li className="hover:text-primary cursor-pointer transition-colors">Help Center</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Shipping Policy</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Return Policy</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Terms of Use</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-text-muted">
            <li className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502.//... (shortened for brevity)" /></svg>
              support@akscare.com
            </li>
            <li className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502.//... (shortened for brevity)" /></svg>
              1800-AKS-CARE
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200 text-center text-xs text-text-muted">
        © {new Date().getFullYear()} Aks Care. All rights reserved.
      </div>
    </footer>
  );
};
