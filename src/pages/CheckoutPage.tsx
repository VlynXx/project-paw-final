import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { CreditCard, Wallet } from "lucide-react";
import Button from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

const paymentMethods = [
  { id: "credit-card", name: "Credit Card", icon: CreditCard },
  { id: "wallet", name: "Digital Wallet", icon: Wallet },
];

const CheckoutPage: React.FC = () => {
  const { items, subtotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");

  const shipping = subtotal > 100 ? 0 : 10.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPayment) {
      alert("Please select a payment method");
      return;
    }

    if (!user) {
      alert("Please sign in to complete your order");
      navigate("/login");
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      clearCart();
      navigate("/order-success");
      setIsProcessing(false);
    }, 1000);
  };

  if (items.length === 0) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-semibold mb-4">Your cart is empty</h1>
          <Button onClick={() => navigate("/products")} variant="primary">
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {renderInput("firstName", "First Name")}
                {renderInput("lastName", "Last Name")}
              </div>
              {renderInput("email", "Email", "email")}
              {renderInput("phone", "Phone")}
              {renderInput("address", "Address")}
              <div className="grid grid-cols-2 gap-4">
                {renderInput("city", "City")}
                {renderInput("state", "State")}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {renderInput("zipCode", "ZIP Code")}
                {renderInput("country", "Country")}
              </div>
              <div className="border-t border-neutral-200 pt-6">
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                <div className="grid grid-cols-2 gap-4">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setSelectedPayment(method.id)}
                      className={`flex items-center justify-center p-4 border rounded-lg ${
                        selectedPayment === method.id
                          ? "border-primary-600 bg-primary-50"
                          : "border-neutral-300 hover:border-primary-300"
                      }`}
                    >
                      <method.icon className="w-6 h-6 mr-2" />
                      <span>{method.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                isLoading={isProcessing}
              >
                {isProcessing ? "Processing..." : `Pay $${total.toFixed(2)}`}
              </Button>
            </form>
          </div>
          <div>
            <div className="bg-neutral-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4 flex-grow">
                      <h3 className="font-medium">{item.product.name}</h3>
                      <p className="text-sm text-neutral-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <span className="font-medium">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-neutral-200 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-green-600">Free</span>
                  ) : (
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  )}
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-neutral-200 pt-2 mt-2">
                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-lg">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function renderInput(
    id: keyof ShippingInfo,
    label: string,
    type: string = "text"
  ) {
    return (
      <div>
        <label htmlFor={id} className="block text-sm font-medium text-neutral-700 mb-1">
          {label}
        </label>
        <input
          type={type}
          id={id}
          required
          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500"
          value={shippingInfo[id]}
          onChange={(e) =>
            setShippingInfo({ ...shippingInfo, [id]: e.target.value })
          }
        />
      </div>
    );
  }
};

export default CheckoutPage;