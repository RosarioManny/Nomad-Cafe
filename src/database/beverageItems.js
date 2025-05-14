const beverageItems = [
  {
    "category": "Signatures Lattes",
    "sizePrices": {
      "Small": 2.75,
      "Medium": 3,
      "Large": 3.25
    },
    "icedPremium": 0.5,
    "flavors": [
      {
        "name": "Cin City",
        "description": "Condensed Milk, Cinnamon"
      },
      {
        "name": "Snickerdoodle",
        "description": "Brown Sugar, Cinnamon, Vanilla"
      },
      {
        "name": "Bee Knees",
        "description": "Honey, Lavender"
      },
      {
        "name": "Creme Brulatte",
        "description": "Caramel, Vanilla"
      },
      {
        "name": "Toffee Bar Mocha",
        "description": "Toffee nut, Chocolate"
      },
      {
        "name": "Coconut Cream Pie",
        "description": "Coconut, Vanilla"
      },
      {
        "name": "Nomad",
        "description": "Peanut Butter, Vanilla"
      },
      {
        "name": "Got Nuts?",
        "description": "Coconut, Almond, Hazelnut"
      },
    ]
  },
  {
    "category": "Hot Drinks",
    "sizes": {
      "Small": "12oz",
      "Medium": "16oz",
      "Large": "20oz"
    },
    "items": [
      {
        "name": "Drip Coffee",
        "price": {
          "Small": 2.75,
          "Medium": 3,
          "Large": 3.25
        }
      },
      {
        "name": "Espresso",
        "price": {
          "Single": 2.5,
          "Double": 3.5
        }
      },
      {
        "name": "Standard Hot Drinks",
        "selection": ["Americano", "Au Lait", "Machiatto", "Cappuccino", "Cortado", "Flat White", "Latte", "Chai Latte", "Matcha Latte", "Mocha Latte"],
        "price": {
          "Small": 2.75,
          "Medium": 3,
          "Large": 3.25
        },
        
      },
      {
        "name": "Tea",
        "price": {
          "Small": 2.75,
          "Medium": 3,
          "Large": 3.25
        },
        "teaVarieties": "English Breakfast, Lemon Ginger, Peppermint, Chamomile, Green Tea, Black Tea, Earl grey, Chai"
      },
    ]
  },
  {
    "category": "Iced Drinks",
    "sizes": {
      "Small": "16oz",
      "Medium": "20oz",
      "Large": "24oz"
    },
    "items": [
      {
        "name": "Standard Iced Drinks",
        "description": "Iced Coffee, Cold Brew, Iced Americano, Iced Latte, Iced Chai, Iced Mocha, Iced Matcha",
        "price": {
          "Small": 2.75,
          "Medium": 3,
          "Large": 3.25
        }
      },
      {
        "name": "Iced Tea",
        "price": {
          "Small": 3.25,
          "Medium": 3.75,
          "Large": 4.25
        },
        "varieties": "Raspberry Hibiscus, Peach, Moroccan Mint, Black"
      }
    ]
  },
  {
    "category": "Extras",
    "items": [
      {
        "name": "Additional Shot",
        "price": 1
      },
      {
        "name": "Milk Alternative",
        "description": "Almond, Soy, Oat",
        "price": 0.5
      },
      {
        "name": "Syrups",
        "price": 0.5,
        "varieties": "Salted Caramel, Vanilla, Almond, Coconut, Honey, Lavender, Hazelnut, Chocolate, Toffee Nut, Peanut Butter, Spiced Brown Sugar, Sugar-Free Vanilla"
      }
    ]
  }
]
export default beverageItems