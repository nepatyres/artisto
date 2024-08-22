import { useState, useEffect } from 'react';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)!,
    });

    if (error) {
      setErrorMessage(error.message || 'An error occurred');
    } else {
      // Handle successful payment here, possibly by calling your backend
      console.log(paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="payment-element">
        <CardElement options={{
          style: {
            base: {
              color: '#32325d',
              fontFamily: 'Arial, sans-serif',
              fontSmoothing: 'antialiased',
              fontSize: '16px',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#fa755a',
              iconColor: '#fa755a',
            },
          },
        }} />
      </div>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const CheckoutPage = () => {
  const appearance = {
    theme: 'flat' // customize appearance as needed
  };

  const options: StripeElementsOptions = {
    clientSecret: 'your-client-secret',
    appearance,
    layout: {
      type: 'tabs',
      defaultCollapsed: false,
    }
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default CheckoutPage;
