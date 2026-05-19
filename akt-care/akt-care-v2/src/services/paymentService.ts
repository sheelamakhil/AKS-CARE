export interface PaymentResponse {
  success: boolean;
  paymentId?: string;
  error?: string;
}

export interface PaymentProvider {
  processPayment(amount: number, details: any): Promise<PaymentResponse>;
}

class MockPaymentProvider implements PaymentProvider {
  async processPayment(amount: number, details: any): Promise<PaymentResponse> {
    console.log(`Processing mock payment of ₹${amount}...`, details);

    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulate random success/failure (90% success rate)
    const isSuccess = Math.random() > 0.1;

    if (isSuccess) {
      return {
        success: true,
        paymentId: `MOCK_${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      };
    }

    return {
      success: false,
      error: 'Insufficient funds or bank server timeout',
    };
  }
}

export const paymentService = new MockPaymentProvider();
