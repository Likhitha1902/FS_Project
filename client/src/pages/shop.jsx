import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';
import { CartContext } from '../CartContext';

const plantCategories = {
  'Vegetable Plants': [
    { id: 3, name: 'Bell pepper', price: 150, image: '/images/tomato-plant.jpg', tag: 'bestseller' },
    { id: 4, name: 'Chili Plant', price: 180, image: '/images/chili-plant.jpg' },
    { id: 5, name: 'Cabbage', price: 120, image: '/images/cabbage-plant.jpg' },
  ],
  'Fruit Plants': [
    { id: 6, name: 'Strawberry Plant', price: 220, image: '/images/strawberry-plant.jpg', tag: 'new arrival' },
    { id: 7, name: 'Mango Sapling', price: 300, image: '/images/mango-sapling.jpg' },
  ],
  'Seeds': [
    { id: 8, name: 'Basil Seeds', price: 50, image: '/images/basil-seeds.jpg', tag: 'popular' },
    { id: 9, name: 'Sunflower Seeds', price: 70, image: '/images/sunflower-seeds.jpg' },
  ],
  'Pots & Accessories': [
    { id: 10, name: 'Clay Pot', price: 120, image: '/images/clay-pot.jpg' },
    { id: 11, name: 'Watering Can', price: 250, image: './images/watering-can.jpg', tag: 'bestseller' },
  ],
  'Herbs': [
    { id: 12, name: 'Mint Plant', price: 90, image: '/images/mint-plant.jpg' },
    { id: 13, name: 'Coriander Plant', price: 85, image: '/images/coriander-plant.jpg', tag: 'fresh' },
  ],
  'Succulents': [
    { id: 14, name: 'Echeveria', price: 160, image: '/images/echeveria.jpg' },
    { id: 15, name: 'Jade Plant', price: 200, image: '/images/jade-plant.jpg', tag: 'new arrival' },
  ],
  'Cacti': [
    { id: 16, name: 'Barrel Cactus', price: 180, image: '/images/barrel-cactus.jpg' },
    { id: 17, name: 'Bunny Ear Cactus', price: 190, image: '/images/bunny-ear-cactus.jpg', tag: 'bestseller' },
  ],
  'Hanging Plants': [
    { id: 18, name: 'Spider Plant', price: 220, image: '/images/spider-plant.jpg' },
    { id: 19, name: 'English Ivy', price: 250, image: '/images/english-ivy.jpg' },
  ],
  'Indoor Trees': [
    { id: 20, name: 'Fiddle Leaf Fig', price: 750, image: '/images/fiddle-leaf-fig.jpg', tag: 'premium' },
    
  
  ],
  'Air Purifying Plants': [
    { id: 22, name: 'Areca Palm', price: 450, image: '/images/areca-palm.jpg', tag: 'bestseller' },
    { id: 23, name: 'Boston Fern', price: 320, image: '/images/boston-fern.jpg' }
  ],
  'Bonsai': [
    { id: 24, name: 'Ficus Bonsai', price: 850, image: '/images/ficus-bonsai.jpg', tag: 'limited stock' },
    { id: 25, name: 'Juniper Bonsai', price: 950, image: '/images/juniper-bonsai.jpg' }
  ]
};

const Shop = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { cartItems, setCartItems } = useContext(CartContext);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const addToCart = (item) => {


    if (!isAuthenticated) {
      alert('Please login or sign up to add items to your cart.');
    } else {
      setCartItems(prev => [...prev, item]);
    }
  };

  const removeFromCart = (item) => {
    setCartItems(prev => {
      const index = prev.findIndex(i => i.id === item.id);
      if (index !== -1) {
        const newCart = [...prev];
        newCart.splice(index, 1);
        return newCart;
      }
      return prev;
    });
  };

  const getItemCount = (itemId) => {
    return cartItems.filter(item => item.id === itemId).length;
  };

  const allItems = Object.entries(plantCategories).flatMap(([category, items]) =>
    items.map(item => ({ ...item, category }))
  );

  const filteredItems = allItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOrder === 'priceLowHigh') return a.price - b.price;
    if (sortOrder === 'priceHighLow') return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-[url('https://static.vecteezy.com/system/resources/previews/046/533/344/non_2x/seamless-pattern-of-green-foliage-natural-branches-herbs-plant-wallpaper-hand-drawn-fresh-rustic-eco-friendly-background-flat-simple-illustration-vector.jpg')] bg-contain p-8 font-sans">
      <h1 className="text-5xl font-extrabold text-center text-green-900 drop-shadow-md mb-8">
      Terra & Twine
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <input
          type="text"
          placeholder="Search for plants, gardening accessories..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full sm:w-1/3 px-6 py-3 rounded-full border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
        />

        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="px-4 py-3 rounded-full border border-green-300 shadow-sm focus:outline-none"
        >
          <option value="All">All Categories</option>
          {Object.keys(plantCategories).map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
          className="px-4 py-3 rounded-full border border-green-300 shadow-sm focus:outline-none"
        >
          <option value="default">Sort by</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
        </select>

        <div>
          <label className="text-green-700 font-medium mr-4 text-xl bg-white px-4 py-3 rounded-full shadow-sm border border-green-300">
            Max Price: ₹{priceRange[1]}
          </label>
          <input
            type="range"
            min="0"
            max="1000"
            step="1"
            value={priceRange[1]}
            onChange={e => setPriceRange([0, +e.target.value])}
            className="w-64"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sortedItems.map(item => {
          const count = getItemCount(item.id);
          return (
            <div
              key={item.id}
              className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl"
            >
              {item.tag && (
                <p className="absolute top-2 left-2 text-xs bg-yellow-400 text-white px-2 py-1 rounded-full shadow">
                  {item.tag.toUpperCase()}
                </p>
              )}

              <img
                src={item.image}
                alt={item.name}
                className="w-60 h-60 object-cover rounded-xl mb-4 border-2 border-green-200"
              />

              <h3 className="text-xl font-semibold text-green-800 mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-green-600 italic mb-1">
                {item.category}
              </p>
              <p className="text-green-600 text-lg mb-3 font-medium">
                ₹{item.price}
              </p>

              {count > 0 ? (
                <div className="flex flex-col items-center gap-2">
                  <p className="text-green-700 font-medium"> {count} added to cart</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => removeFromCart(item)}
                      className="bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600"
                    >
                      - Remove
                    </button>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-green-600 text-white px-4 py-1 rounded-full hover:bg-green-700"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(item)}
                  className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition-colors"
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
