import whiteBag from "../images/simple-white-bag.png";
import vegetablesBag from "../images/bag-with-vegetables.jpg";
import zoomedBag from "../images/zoomed-bag.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white font-[Roboto]">
      {/* Hero Section */}
        <section id="hero" className="w-full pt-12 pb-8 mt-10 mb-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black leading-snug">
                  High-quality, customisable, and eco-friendly bags tailored for businesses
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
                  Customisable, sustainable bags for retailers, brands, and events that promote eco-friendly values.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Link to={"/contact"} className="bg-teal-800 hover:bg-teal-900 text-white font-bold py-3 px-6 rounded-full border-2 border-teal-800 transition duration-300">
                    REQUEST YOUR QUOTE TODAY
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={whiteBag}
                  alt="White tote bag with black handles"
                  className="w-full max-w-sm md:max-w-md"
                />
              </div>
            </div>
          </div>
        </section>

      {/* Testimonials */}
      <section id="testimonials" className="w-full py-20 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center text-black">What our Clients Say About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria L.",
                text: `"As a small business owner, keeping costs low is essential. Climange’s recyclable tote bags offer the perfect balance of affordability and quality. 
                Not only are they budget-friendly, 
                but they also add a professional, eco-conscious touch to our packaging. Our customers love them, and so do we!"`,
              },
              {
                name: "Anisah T.",
                text: `"Climange has been a game-changer for our business at the community market. 
                Their recyclable tote bags are not only eco-friendly but also the most affordable option we’ve found. 
                They’ve helped us reduce packaging costs while keeping our customers happy with sustainable choices."`,
              },
              {
                name: "Lisa M.",
                text: `We’ve been using Climange tote bags for our bulk rice products, and they’re an absolute steal 
                for the price. It’s rare to find eco-friendly options that don’t break the bank, but Climange delivers 
                on both quality and affordability. These bags have truly enhanced our customer experience."`,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 ${index < 2 ? "md:border-r border-gray-200" : ""}`}
              >
                <div className="text-green-800 text-5xl font-serif mb-8 ml-5">
                  <svg
                    preserveAspectRatio="xMidYMid meet"
                    data-bbox="40 40 120 120"
                    viewBox="40 40 120 120"
                    xmlns="http://www.w3.org/2000/svg"
                    data-type="color"
                    role="presentation"
                    aria-hidden="true"
                    aria-label=""
                    className="w-9 h-9"
                  >
                    <defs>
                      <style>{`#comp-m4ikzr112 svg [data-color="1"] {fill: #1B5219;}`}</style>
                    </defs>
                    <g>
                      <path
                        d="M40 160v-45.9c0-40.9 14.8-65 47.1-74.1v25.1c-15.4 6.6-21.5 20.3-21 45.4h21V160H40z"
                        fill="#166534"
                        data-color="1"
                      ></path>
                      <path
                        d="M112.9 160v-45.9c0-40.9 14.8-65 47.1-74.1v25.1c-15.4 6.6-21.5 20.4-21 45.4h21V160h-47.1z"
                        fill="#166534"
                        data-color="1"
                      ></path>
                    </g>
                  </svg>
                </div>

                <h3 className="font-bold text-3xl mb-4">{testimonial.name}</h3>
                <p className="text-base text-gray-700 leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>

          {/* CTA Button - Centered at the end of the section */}
        <div className="mt-16 flex justify-center">
          <Link to="/contact" className="bg-teal-800 hover:bg-teal-900 text-white font-bold py-3 px-6 rounded-full border-2 border-teal-800 transition duration-300">
            REQUEST YOUR QUOTE TODAY
          </Link>
        </div>
        
        </div>
      </section>

      {/* Benefits Title */}
      <section className="mt-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-black">The Benefits of Working with Climange</h2>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="w-full py-20 relative"
        style={{
          backgroundImage: `url(${vegetablesBag})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {["Affordable", "Customizable", "Sustainablity"].map((title, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
                <p className="text-center text-gray-700 leading-relaxed">
                  {idx === 0 &&
                    "Climange offers eco-friendly products at competitive prices, making sustainable practices accessible for businesses of all sizes. By partnering with Climange, you can reduce your environmental footprint without exceeding your budget."}
                  {idx === 1 &&
                    "With Climange, you get recyclable tote bags that are fully customizable to reflect your brand’s identity. This not only enhances your product presentation but also promotes your business as a leader in sustainability.​"}
                  {idx === 2 &&
                    "Consumers today value businesses that prioritize eco-conscious solutions. By working with Climange, you can offer sustainable packaging options that resonate with environmentally aware customers, fostering trust and long-term loyalty."}
                </p>
              </div>
            ))}
          </div>

           {/* CTA Button - Added and centered at the end of the section */}
    <div className="mt-12 flex justify-center">
      <Link to="/contact" className="bg-teal-800 hover:bg-teal-900 text-white font-bold py-3 px-6 rounded-full border-2 border-teal-800 transition duration-300">
        REQUEST YOUR QUOTE TODAY
      </Link>
    </div>

        </div>
      </section>

      {/* How to Get Started Section */}
      <section
        id="get-started"
        className="w-full py-20 relative"
        style={{
          backgroundImage: `url(${zoomedBag})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center text-black">How Do I Get Started?</h2>

          {[
            {
              step: "Step 1",
              icon: (
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <g>
                    <path
                      d="M20 20v160c44.183 0 80-35.817 80-80S64.183 20 20 20z"
                      fill="#22c55e"
                    ></path>
                    <path
                      d="M100 100c0 44.183 35.817 80 80 80V20c-44.183 0-80 35.817-80 80z"
                      fill="#22c55e"
                    ></path>
                  </g>
                </svg>
              ),
              text: "Browse our range of eco-friendly, recyclable tote bags and select the design and size that best suits your business needs.",
            },
            {
              step: "Step 2",
              icon: (
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path
                    d="M100 20c-44.118 0-80 35.882-80 80s35.882 80 80 80 80-35.882 80-80h-80V20z"
                    fill="#22c55e"
                  />
                </svg>
              ),
              text: "Share your branding details, such as your logo, colors, or any custom text. Our team will help you create a design that aligns perfectly with your vision.",
            },
            {
              step: "Step 3",
              icon: (
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <g>
                    <path
                      d="M102.887 20v117.469c32.371 0 58.613-26.296 58.613-58.734C161.5 46.296 135.258 20 102.887 20z"
                      fill="#22c55e"
                    />
                    <path
                      d="M38.5 121.266C38.5 153.704 64.742 180 97.113 180V62.532c-32.371 0-58.613 26.296-58.613 58.734z"
                      fill="#22c55e"
                    />
                  </g>
                </svg>
              ),
              text: "Confirm the quantity, finalize your order, and let us handle the rest. We'll ensure a seamless process and deliver your sustainable tote bags on time.",
            },
          ].map(({ step, icon, text }, idx) => (
            <div key={idx} className="mb-16 text-center max-w-2xl mx-auto">
              <div className="flex justify-center mb-6 w-16 h-16 mx-auto">{icon}</div>
              <h3 className="text-xl font-bold mb-4 text-black">{step}</h3>
              <p className="text-black-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

         {/* CTA Button - Added and centered at the end of the section */}
    <div className="mt-12 flex justify-center">
      <Link to="/contact" className="bg-teal-800 hover:bg-teal-900 text-white font-bold py-3 px-6 rounded-full border-2 border-teal-800 transition duration-300">
        REQUEST YOUR QUOTE TODAY
      </Link>
    </div>
    
      </section>
    </div>
  );
};

export default Home;
