import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/useAuthStore';

export default function VerifyOTPPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const router = useRouter();
  const { setAuth } = useAuthStore();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setAuth({
      id: 'user_123',
      fullName: 'Sheel User',
      email: 'user@example.com',
      phone: '+91 9876543210',
      isVerified: true,
    });
    setIsLoading(false);
    router.push('/');
  };

  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">Verify Your Account</h1>
          <p className="text-text-muted text-sm">We've sent a 6-digit code to your device</p>
        </div>
        <form onSubmit={handleVerify} className="space-y-8">
          <div className="flex justify-center gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => { if (el) inputRefs.current[index] = el; }}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
            ))}
          </div>
          <Button variant="primary" className="w-full py-6 text-lg" isLoading={isLoading}>
            Verify & Proceed
          </Button>
          <div className="text-center space-y-2">
            <p className="text-sm text-text-muted">
              Didn't receive the code?{' '}
              <button
                type="button"
                disabled={timer > 0}
                className={`font-semibold ${timer > 0 ? 'text-gray-400' : 'text-primary hover:underline'}`}
              >
                Resend OTP
              </button>
            </p>
            {timer > 0 && (
              <p className="text-xs text-gray-400">Resend available in {timer}s</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
