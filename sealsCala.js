const mongose = require("mongoose");

mongose
  .connect("mongodb://localhost/prodactes")
  .then(() => console.log("conected db..."))
  .catch((err) => console.log(err));

const productSchema = new mongose.Schema({
  name: String,
  price: Number,
  description: String,
  brand: String,
  category: String,
  countInStock: Number,
  image: String,
  isAvailable: Boolean,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongose.model("Product", productSchema);

async function createProducts() {
  const products = [
    {
      name: "Laptop Asus ROG",
      price: 85000,
      description: "Gaming laptop with RTX graphics",
      brand: "Asus",
      category: "Electronics",
      countInStock: 4,
      image: "asus-rog.jpg",
      isAvailable: true,
    },
    {
      name: "iPhone 15",
      price: 72000,
      description: "Apple smartphone with A17 chip",
      brand: "Apple",
      category: "Mobile",
      countInStock: 10,
      image: "iphone15.jpg",
      isAvailable: true,
    },
    {
      name: "Samsung TV 55 Inch",
      price: 43000,
      description: "4K Smart TV",
      brand: "Samsung",
      category: "Home Appliances",
      countInStock: 3,
      image: "samsung-tv.jpg",
      isAvailable: true,
    },
    {
      name: "Nike Air Max",
      price: 6500,
      description: "Comfortable running shoes",
      brand: "Nike",
      category: "Fashion",
      countInStock: 15,
      image: "nike-airmax.jpg",
      isAvailable: true,
    },
    {
      name: "Mechanical Keyboard",
      price: 3200,
      description: "RGB mechanical keyboard",
      brand: "Logitech",
      category: "Accessories",
      countInStock: 8,
      image: "keyboard.jpg",
      isAvailable: true,
    },
    {
      name: "Bluetooth Headphones",
      price: 5400,
      description: "Noise cancelling headphones",
      brand: "Sony",
      category: "Audio",
      countInStock: 6,
      image: "sony-headphone.jpg",
      isAvailable: true,
    },
    {
      name: "Office Chair",
      price: 7800,
      description: "Ergonomic office chair",
      brand: "Ikea",
      category: "Furniture",
      countInStock: 2,
      image: "chair.jpg",
      isAvailable: false,
    },
    {
      name: "Coffee Maker",
      price: 4100,
      description: "Automatic coffee machine",
      brand: "Philips",
      category: "Kitchen",
      countInStock: 5,
      image: "coffee-maker.jpg",
      isAvailable: true,
    },
    {
      name: "Smart Watch",
      price: 9800,
      description: "Fitness and health tracking",
      brand: "Xiaomi",
      category: "Wearable",
      countInStock: 12,
      image: "smart-watch.jpg",
      isAvailable: true,
    },
    {
      name: "Backpack",
      price: 2100,
      description: "Waterproof travel backpack",
      brand: "Adidas",
      category: "Bags",
      countInStock: 20,
      image: "backpack.jpg",
      isAvailable: true,
    },
  ];

  const result = await Product.insertMany(products);
  console.log(result);
  createProducts();
}

async function getProducts() {
  const productesDb = await Product.find().limit(5).sort({name: -1}).select({ name: "Laptop",  price: 2100,});
  console.log(productesDb);
}
  

getProducts();
