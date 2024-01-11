const fs = require('fs');
// const { originalItems } = require("../src/items.json")


// Read the original items.json file
const originalItems = require('../src/items.json').items;

// Function to generate a random number within a range
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Function to generate a unique product name based on category
const generateProductName = (category, index) => {
  const adjectives = ["Elegant", "Rugged", "Stylish", "Classic", "Modern", "Futuristic", "Vintage", "Sporty", "Casual", "Sophisticated"];
  return `${adjectives[index % adjectives.length]} ${category}`;
};

// Generate 200 products
const generatedProducts = [];
for (let i = 1; i <= 200; i++) {
  const templateItem = originalItems[i % originalItems.length];
  generatedProducts.push({
    id: i,
    name: generateProductName(templateItem.category, i),
    category: templateItem.category,
    image: templateItem.image,
    price: getRandomNumber(5, 100).toString(),
    rating: getRandomNumber(1, 5),
    stock: getRandomNumber(0, 50)
  });
}

// Write the generated products to a new JSON file
fs.writeFile('./src/items1.json', JSON.stringify({ items: generatedProducts }, null, 2), (err) => {
  if (err) throw err;
  console.log('Generated products saved to generated_products.json');
});
