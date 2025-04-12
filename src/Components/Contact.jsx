import buildingImg from "../images/building-img.jpg";

const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
      {/* Image & Text Container */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12">
        {/* Image Section - Made larger */}
        <div className="md:w-[55%]">
          <img 
            src={buildingImg}
            alt="Climange contact illustration"
            className="w-full h-full rounded-xl shadow-lg object-cover min-h-[400px]"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-[45%] flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          
          <div className="space-y-4 text-gray-600">
            <p className="text-lg leading-relaxed">
              Use the below email to send us your quote as detailed as possible to ensure quick delivery.
            </p>

            <div className="my-4">
              <a 
                href="mailto:sales@climange.co.uk" 
                className="text-green-600 hover:text-green-700 text-xl font-semibold transition-colors"
              >
                sales@climange.co.uk
              </a>
            </div>

            <p className="text-lg leading-relaxed">
              If you already have all the details prepared, then please use the same email address to send it across to us 
              (make sure to include your full name, email address, and contact number), and we will respond to your request 
              promptly.
            </p>
          </div>
        </div>
      </div>

      {/* Opening Hours - Now positioned below */}
      <div className="max-w-3xl mx-auto border-t border-gray-200 pt-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
          Opening Hours
        </h3>
        <ul className="space-y-1 text-center">
          <li className="flex justify-center items-center gap-4">
            <span className="font-medium">Mon - Fri</span>
            <span className="text-gray-600">8:00 am – 5:00 pm</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;