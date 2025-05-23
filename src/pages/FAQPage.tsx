import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available at checkout for faster delivery."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide. International shipping times and costs vary by location and can be calculated at checkout."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a confirmation email with tracking information. You can also track your order through your account dashboard."
  },
  {
    question: "Are the products authentic?",
    answer: "Yes, all products sold on Luxescape are 100% authentic. We work directly with brands and authorized distributors to ensure authenticity."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay. All transactions are processed securely through our payment partners."
  }
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h1>
        <p className="text-neutral-600 mb-8">
          Find answers to common questions about our products, shipping, returns, and more.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-neutral-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-medium text-neutral-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="flex-shrink-0 text-neutral-500" size={20} />
                  ) : (
                    <ChevronDown className="flex-shrink-0 text-neutral-500" size={20} />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="p-4 bg-neutral-50 border-t border-neutral-200">
                    <p className="text-neutral-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-primary-50 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Still have questions?</h2>
            <p className="text-neutral-600 mb-4">
              Can't find the answer you're looking for? Please contact our customer support team.
            </p>
            <div className="space-y-2">
              <p className="text-neutral-700">
                Email: support@luxescape.com
              </p>
              <p className="text-neutral-700">
                Phone: (212) 555-1234
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;