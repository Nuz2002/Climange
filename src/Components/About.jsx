import goodVibesImg from "../images/good-vibes-bag.jpg"

const About = () => {
  return (
    <section id="about" className="w-full py-16">
      <div className="container mx-auto px-6 flex flex-col">
        {/* Image on top */}
        <div className="w-full mb-8 md:mb-12">
          <img 
            src={goodVibesImg}
            alt="Person handing a teal shopping bag to a customer" 
            className="w-full h-auto rounded-xl shadow-lg transition-transform duration-300 hover:scale-95"
          />
        </div>

        {/* Text content */}
        <div className="w-full">
          <div className="max-w-4xl mx-auto text-left space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight">
              Welcome to Climange - Where Sustainability Meets Innovation
            </h2>
            
            <div className="space-y-6 text-gray-900">
              <p className="text-lg leading-relaxed">
                At Climange, we're on a mission to inspire and empower individuals and businesses to make eco-conscious choices that positively impact our planet. We specialize in creating eco-friendly solutions that drive meaningful change. Our journey began with a simple yet powerful vision: to foster a greener future for generations to come. Whether through our innovative products, educational resources, or community collaborations, we aim to make sustainability accessible, stylish, and rewarding.
              </p>
              
              <p className="text-lg leading-relaxed">
                Climange is more than just a brand - it's a movement. Our passionate team is committed to addressing the climate crisis and helping our community take actionable steps toward sustainable living. From our stylish eco-friendly tote bags to practical green living guides, everything we do reflects our dedication to planetary health. Join us in reshaping our future - one thoughtful choice, one quality product, and one conscious step at a time. Together, we can spark the transformative change our world needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;