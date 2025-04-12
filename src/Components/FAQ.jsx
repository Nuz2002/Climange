const FAQ = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            What is Climange?
          </h3>
          <p className="text-gray-600 leading-6">
            Climange is a company that offers eco-friendly, customizable bags and promotes 
            sustainable practices through influencer marketing.
          </p>
        </div>

        {[
          {
            question: "What products do you offer?",
            answer: "We offer customizable tote bags suitable for personal and business needs."
          },
          {
            question: "What makes Climange eco-friendly?",
            answer: "Our products are made from sustainable materials and are designed to reduce environmental impact by encouraging reusable alternatives."
          },
          {
            question: "How are your products manufactured?",
            answer: "Our products are ethically sourced and manufactured in compliance with sustainability standards."
          },
          {
            question: "Do you offer international shipping?",
            answer: "Currently, we focus on the UK market but plan to expand globally in the near future."
          },
          {
            question: "Can I customize the bags with my own designs?",
            answer: "Yes, we provide customizable options for personal designs, logos, or messages."
          },
          {
            question: "What is the minimum order for custom designs?",
            answer: "Our minimum order quantity for custom designs is 500, ensuring quality and cost-effectiveness."
          },
          {
            question: "How long does it take to deliver custom-designed products?",
            answer: "Custom orders typically take a month from design approval to delivery."
          },
          {
            question: "Do you charge extra for customization?",
            answer: "Customization costs depend on the complexity of the design. Contact us for a personalized quote."
          }
        ].map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-600 leading-6">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;