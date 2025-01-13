const productModel = require("../Model/productModel");

const createProduct = async (req, res) => {
  try {
    const products = [
      {
        name: "Mobile",
        category: "electronics",
        stock: true,
        price: 100,
      },
      {
        name: "Laptop",
        category: "electronics",
        stock: true,
        price: 200,
      },
      {
        name: "shoes",
        category: "Lather",
        stock: true,
        price: 50,
      },
      {
        name: "Bag",
        category: "Lather",
        stock: true,
        price: 50,
      },
      {
        name: "Jacket",
        category: "Clooth",
        stock: true,
        price: 30,
      },
    ];
    const addProduct = await productModel.insertMany(products);
    res.status(200).json({
      success: true,
      message: `Product created, quantity: ${addProduct.length}`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

//Start Database Agragassion

//Filter the product which price are more than 50

const getterThanFiftyProduct = async (req, res) => {
  const filterData = await productModel.aggregate([
    { $match: { price:{$gte:50} }},
    {
        $group:{
            _id:'$category',
            price:{$sum:'$price'}
        }
    },
    {$sort:{price:1}}
  ]);
  console.log(filterData);
};

module.exports = { createProduct, getterThanFiftyProduct };
