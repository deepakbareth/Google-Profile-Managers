import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      description: 'Perfect for small businesses just getting started on Google Maps.',
      features: [
        '1 post weekly',
        'Basic profile optimization'
      ],
      highlighted: false
    },
    {
      name: 'Growth',
      price: '$199',
      description: 'Our most popular plan for businesses looking to generate steady leads.',
      features: [
        'Weekly posts',
        'Review replies',
        'Map ranking strategies'
      ],
      highlighted: true
    },
    {
      name: 'Premium',
      price: '$399',
      description: 'Comprehensive management for businesses dominating their local market.',
      features: [
        'Full profile management',
        'Advanced Local SEO',
        'Priority support'
      ],
      highlighted: false
    }
  ];

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden font-sans border-t border-gray-100">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 md:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 leading-tight tracking-tight mb-8">
            Transparent <span className="text-blue-700">Pricing Plans</span>
          </h2>
          <p className="text-[17px] sm:text-lg text-slate-600 leading-relaxed font-medium">
            Many customers leave when they have no idea about pricing. We keep it simple and transparent so you know exactly what you get.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-300 flex flex-col ${plan.highlighted
                ? 'border-2 border-blue-600 shadow-[0_20px_40px_rgb(37,99,235,0.12)] md:-translate-y-4'
                : 'border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-gray-200/50'
                }`}
            >

              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed min-h-[40px]">{plan.description}</p>
              </div>

              <div className="mb-8 border-b border-gray-100 pb-8">
                <div className="flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="text-lg text-gray-500 font-medium ml-1">/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Check size={12} className="text-emerald-600" strokeWidth={3} />
                      </div>
                    </div>
                    <span className="text-[15px] text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-[15px] transition-all duration-200 ${plan.highlighted
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                  }`}
              >
                Get Started
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
