const Footer = () => {
    return (
      <footer className="w-full bg-green-900 text-white py-8 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company Info Column */}
            <div>
              <h3 className="font-bold text-xl mb-4">Climange</h3>
              <p className="mb-4">
                Climange is a sustainable lifestyle brand committed to creating 
                eco-friendly, reusable, and customizable bags. Our mission is to 
                inspire eco-conscious living through high-quality, sustainable 
                products.
              </p>
            </div>
  
            {/* Contact Info Column */}
            <div>
              <h3 className="font-bold text-xl mb-4">Contact Us</h3>
              <p className="mb-2">Have questions or need assistance? Reach out to us!</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Email: <a href="mailto:sales@climange.co.uk" className="hover:underline">sales@climange.co.uk</a></span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Phone: +44 7857 114483</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Address: 11 Brindley Place Brunswick Square, Birmingham, England, B1 2LP</span>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Social Media Links */}
          <div className="mt-8">
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Facebook: <a href="https://facebook.com/Climange" className="hover:underline">@Climange</a></span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Instagram: <a href="https://instagram.com/Climange" className="hover:underline">@Climange</a></span>
              </li>
            </ul>
          </div>
  
          {/* Copyright */}
          <div className="mt-8 pt-4 border-t border-green-800 text-sm">
            <p>© Copyright 2025 Climange. All Rights Reserved. <a href="/privacy-policy" className="hover:underline">privacy policy</a>/ <a href="/terms" className="hover:underline">terms and conditions</a></p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;