const sweetsItems = [
  {

    "category": "Pastries",
    "items": [
      {
      "name": "Croissant",
      "price": 3.5
      },
      {
      "name": "Chocolate Croissant",
      "price": 3.5
      },
      {
      "name": "Almond Croissant",
      "price": 4.25
      },
      {
      "name": "Ham & Cheese Croissant",
      "price": 4.25
      },
      {
      "name": "Muffins",
      "price": 3,
      "varieties": [
          "Banana Walnut", 
          "Chocolate chip", 
          "Blueberry", 
          "Lemon Poppy"
        ]
      },
      {
      "name": "Cookies",
      "price": 2.5,
      "varieties": [
          "Chocolate Chip", 
          "Oatmeal Raisin",
        ]
      },
      {
      "name": "Gluten-Free Strawberry Financier",
      "price": 3
      },
      {
      "name": "Danish",
      "price": 3.25,
      "varieties": [
          "Blueberry", 
          "Cheese", 
          "Pear", 
          "Apple Cinnamon"
        ]
      },
      {
        "name": "Sans Bakery, Vegan / Gluten-free pastries",
        "price": 5,
        "varieties": [
          "Brownies", 
          "Banana Bread",  
          "Zucchini Bread",
          "Blueberry Muffins",
          "Chai Chocolate Chip Cookies"
        ]
      }
    ],
  },
  {
    "category": "Gelatos",
    "gelatoFlavors": 
    [
      "*Chocolate Hazelnut",
      "*Vanilla Miso",
      "Cold Brew",
      "Strawberries & Creme",
      "Hazelnut",
      "Chai Salted Caramel",
      "Bees Knees",
      "Cold Brew Rose Chai",
      "Stacciatella",
      "Almond Taragon",

      "Vegan Matcha Coconut (v)",
      "Passion Fruit Sorbet (v)",
      "Lemon Sorbet (v)",
      "Blueberry Ginger Sorbet (v)"
    ], 
    "items": [
      {
        "name": "Cup of gelato",
        "price": {
          "1 Scoop": 4.25,
          "2 Scoops": 6.25,
          "3 Scoops": 8.00,
          "4 Scoops": 9.25
        }
      },
      {
        "name": "Affogato",
        "description": "Espresso with a scoop of your choice",
        "price": {
          "Single": 6,
          "Double": 7
        }
      },
    ]
  },
]
export default sweetsItems