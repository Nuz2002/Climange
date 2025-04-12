import whiteBag from "../images/simple-white-bag.png";
import vegetablesBag from "../images/bag-with-vegetables.jpg";
import zoomedBag from "../images/zoomed-bag.jpg";


const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - reduced padding/margin from top */}
      <section id="hero" className="w-full pt-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                High-quality, customisable, and eco-friendly bags tailored for businesses
              </h1>
              <p className="text-lg mb-8 text-black">
                Customisable, sustainable bags for retailers, brands, and events that promote eco-friendly values.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={whiteBag}
                alt="White tote bag with black handles"
                className="w-auto max-h-96"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="w-full py-16 border-t border-b border-gray-200">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
      What our Clients Say About Us
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
      {/* First Testimonial */}
      <div className="border-r border-gray-200 p-8">
        <div className="text-green-800 text-5xl font-serif mb-6">"</div>
        <h3 className="font-bold text-xl mb-4">Maria L.</h3>
        <p className="text-base">
          "As a small business owner, keeping costs low is essential. Climange's recyclable tote bags offer the perfect balance of affordability and quality. Not only are they budget-friendly, but they also add a professional, eco-conscious touch to our packaging. Our customers love them, and so do we!"
        </p>
      </div>
      
      {/* Second Testimonial */}
      <div className="border-r border-gray-200 p-8 flex flex-col">
        <div className="text-green-800 text-5xl font-serif mb-6">"</div>
        <h3 className="font-bold text-xl mb-4">Anisah T.</h3>
        <p className="text-base mb-8">
          "Climange has been a game-changer for our business at the community market. Their recyclable tote bags are not only eco-friendly but also the most affordable option we've found. They've helped us reduce packaging costs while keeping our customers happy with sustainable choices."
        </p>
      </div>
      
      {/* Third Testimonial */}
      <div className="p-8">
        <div className="text-green-800 text-5xl font-serif mb-6">"</div>
        <h3 className="font-bold text-xl mb-4">Lisa M.</h3>
        <p className="text-base">
          "We've been using Climange tote bags for our bulk rice products, and they're an absolute steal for the price. It's rare to find eco-friendly options that don't break the bank, but Climange delivers on both quality and affordability. These bags have truly enhanced our customer experience."
        </p>
      </div>
    </div>
  </div>
</section>

<section className="mt-10">
<h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-black">
      The Benefits of Working with Climange
    </h2>
</section>

<section 
  id="benefits" 
  className="w-full py-16 relative"
  style={{
    backgroundImage: `url(${vegetablesBag})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>
  {/* Semi-transparent overlay to ensure text readability */}
  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
  
  <div className="container mx-auto px-6 relative z-10">
    
    
    {/* Benefits cards container */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {/* Benefit 1 Card */}
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
        <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mb-6">
          <span className="text-2xl font-bold">1</span>
        </div>
        <h3 className="text-xl font-bold mb-4 text-center">Benefit 1</h3>
        <p className="text-center">
          Climange offers eco-friendly products at competitive prices, making sustainable practices accessible for businesses of all sizes. By partnering with Climange, you can reduce your environmental footprint without exceeding your budget.
        </p>
      </div>
      
      {/* Benefit 2 Card */}
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
        <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mb-6">
          <span className="text-2xl font-bold">2</span>
        </div>
        <h3 className="text-xl font-bold mb-4 text-center">Benefit 2</h3>
        <p className="text-center">
          With Climange, you get recyclable tote bags that are fully customizable to reflect your brand's identity. This not only enhances your product presentation but also promotes your business as a leader in sustainability.
        </p>
      </div>
      
      {/* Benefit 3 Card */}
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
        <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mb-6">
          <span className="text-2xl font-bold">3</span>
        </div>
        <h3 className="text-xl font-bold mb-4 text-center">Benefit 3</h3>
        <p className="text-center">
          Consumers today value businesses that prioritize eco-conscious solutions. By working with Climange, you can offer sustainable packaging options that resonate with environmentally aware customers, fostering trust and long-term loyalty.
        </p>
      </div>
    </div>
  </div>
</section>

<section id="benefits" 
  className="w-full py-16 relative"
  style={{
    backgroundImage: `url(${zoomedBag})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}>
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold mb-16 text-center text-black">
      How Do I Get Started?
    </h2>
    
    {/* Logo/icon */}
    <div className="flex justify-center mb-8">
      <div className="w-16 h-16 flex items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <g>
            <path
              d="M20 20v160c44.183 0 80-35.817 80-80S64.183 20 20 20z"
              fill="#22c55e"
              clipRule="evenodd"
              fillRule="evenodd"
              data-color="1"
            ></path>
            <path
              d="M100 100c0 44.183 35.817 80 80 80V20c-44.183 0-80 35.817-80 80z"
              fill="#22c55e"
              clipRule="evenodd"
              fillRule="evenodd"
              data-color="1"
            ></path>
          </g>
        </svg>
      </div>
    </div>

    
    {/* Step 1 */}
    <div className="mb-12 text-center">
      <h3 className="text-xl font-bold mb-4">Step 1</h3>
      <p className="max-w-2xl mx-auto">
        Browse our range of eco-friendly, recyclable tote bags and select the design and size that best suits your business needs.
      </p>
    </div>
    
    {/* Icon for step 2 */}
    <div className="flex justify-center mb-8">
      <div className="w-16 h-16 flex items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M100 20c-44.118 0-80 35.882-80 80s35.882 80 80 80 80-35.882 80-80h-80V20z"
            fill="#22c55e"
          />
        </svg>
      </div>
    </div>

    
    {/* Step 2 */}
    <div className="mb-12 text-center">
      <h3 className="text-xl font-bold mb-4">Step 2</h3>
      <p className="max-w-2xl mx-auto">
        Share your branding details, such as your logo, colors, or any custom text. Our team will help you create a design that aligns perfectly with your vision.
      </p>
    </div>
    
    {/* Icon for step 3 */}
  <div className="flex justify-center mb-8">
    <div className="w-24 h- flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <g>
          <path
            d="M102.887 20v117.469c32.371 0 58.613-26.296 58.613-58.734C161.5 46.296 135.258 20 102.887 20z"
            fill="#22c55e"
            clipRule="evenodd"
            fillRule="evenodd"
            data-color="1"
          />
          <path
            d="M38.5 121.266C38.5 153.704 64.742 180 97.113 180V62.532c-32.371 0-58.613 26.296-58.613 58.734z"
            fill="#22c55e"
            clipRule="evenodd"
            fillRule="evenodd"
            data-color="1"
          />
        </g>
      </svg>
    </div>
  </div>

    
    {/* Step 3 */}
    <div className="mb-8 text-center">
      <h3 className="text-xl font-bold mb-4">Step 3</h3>
      <p className="max-w-2xl mx-auto">
        Confirm the quantity, finalize your order, and let us handle the rest. We'll ensure a seamless process and deliver your sustainable tote bags on time.
      </p>
    </div>
  </div>
  
</section>



    </div>
  );
};

export default Home;