import zoomedBag from "../images/zoomed-bag.jpg";
import redBag from "../images/red-bag.png";
import darkBlueBag from "../images/dark-blue-bag.png";
import greenBag from "../images/big-green-bag.png"
import whiteBag from "../images/white-bag.png"
import lightBlueBag from "../images/light-blue-bag.png"
import blackBag from "../images/black-bag.png"

import { Link } from "react-router-dom";


const Shop = () => {

  const products = [
    {
      id: 1,
      name: 'Red Tote Bag',
      image: redBag,
      slug: 'red-tote'
    },
    {
      id: 2,
      name: 'Navy Blue Tote Bag',
      image: darkBlueBag,
      slug: 'navy-tote'
    },
    {
      id: 3,
      name: 'Green Tote Bag',
      image: greenBag,
      slug: 'green-tote'
    },
    {
      id: 4,
      name: 'Natural Canvas Tote Bag',
      image: whiteBag,
      slug: 'natural-tote'
    },
    {
      id: 5,
      name: 'Turquoise Tote Bag',
      image: lightBlueBag,
      slug: 'turquoise-tote'
    },
    {
      id: 6,
      name: 'Black Tote Bag',
      image: blackBag,
      slug: 'black-tote'
    }
  ];

    return (
      <div>
          <section className="cotton-bag-container">
            <div className="product-image">
              <img src={zoomedBag} alt="Close-up of natural cotton bag fabric and strap" />
            </div>
            
            <div className="flex flex-col items-center px-4 mt-20">
              <h2 className="product-title text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight font-sans text-center">
                Cotton Bag
              </h2>

              <p className="product-description text-lg text-gray-600 leading-7 tracking-normal max-w-2xl mb-6 text-center">
                Our cotton bags are made of 100% natural, eco-friendly cotton, making
                them both sustainable and reusable. You can customize every aspect,
                size, colour, designing and printing - to create a bag that perfectly
                reflects your style.
              </p>
            </div>
        </section>


        <section className="products-grid container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="product-card flex flex-col items-center">
                <div className="product-image mb-4">
                  <img src={product.image} alt={product.name} className="w-full" />
                </div>
                <Link 
                  to={'/contact'} 
                  className="shop-now-btn bg-green-700 text-white py-2 px-6 rounded-full flex items-center"
                >
                  SHOP NOW
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
    </section>
      </div>
    )
  }
  
  export default Shop
