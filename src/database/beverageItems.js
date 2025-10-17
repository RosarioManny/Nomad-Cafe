const beverageItems = [
  {
    "category": "Signature Lattes", 
    "prices": {
      "Sm": 5,
      "Md": 5.5,
      "Lg": 6.25
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
      }, // Fixed: Removed trailing comma
    ]
  },
  {
    "category": "Hot Drinks",
    "sizes": {
      "Sm": "12oz",
      "Md": "16oz",
      "Lg": "20oz"
    },
    "items": [
      {
        "name": "Drip Coffee",
        "price": {
          "Sm": 2.75,
          "Md": 3.25,
          "Lg": 3.75
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
        "name": "Americano",
        "price": {
          "Sm": 3.5,
          "Md": 4.5,
          "Lg": 6
        }
      },
      {
        "name": "Macchiato",
        "price": {
          "Standard": 3.75
        }
      },
      {
        "name": "Cortado",
        "price": {
          "Standard": 4
        }
      },
      {
        "name": "Cappuccino", 
        "price": {
          "Sm": 4.25,
          "Md": 4.75,
          "Lg": 5.5
        }
      },
      {
        "name": "Latte",
        "price": {
          "Sm": 4.75,
          "Md": 5,
          "Lg": 5.75
        }
      },
      {
        "name": "Chai Latte",
        "price": {
          "Sm": 4.5,
          "Md": 5,
          "Lg": 5.5
        }
      },
      {
        "name": "Mocha Latte",
        "price": {
          "Sm": 5,
          "Md": 5.5,
          "Lg": 6.25
        }
      },
      {
        "name": "Matcha Latte",
        "price": {
          "Sm": 5,
          "Md": 5.5,
          "Lg": 6
        }
      },
      {
        "name": "Tea",
        "price": {
          "Sm": 2.75,
          "Md": 3,
          "Lg": 3.25
        },
        "varieties": ["English Breakfast", "Lemon Ginger", "Peppermint", "Chamomile", "Green Tea", "Black Tea", "Earl Grey", "Chai" ]
      },
    ]
  },
  {
    "category": "Iced Drinks",
    "sizes": {
      "Sm": "16oz",
      "Md": "20oz",
      "Lg": "24oz"
    },
    "items": [
      {
        "name": "Iced Coffee",
        "sizes": {
          "Sm": 4.25,
          "Md": 4.75,
          "Lg": 5.25
        }
      },
      {
        "name": "Cold Brew",
        "sizes": {
          "Sm": 4.75,
          "Md": 5.25,
          "Lg": 5.75
        }
      },
      {
        "name": "Iced Americano",
        "sizes": {
          "Sm": 4,
          "Md": 5,
          "Lg": 6.50
        }
      },
      {
        "name": "Iced Latte",
        "sizes": {
          "Sm": 5.25,
          "Md": 5.75,
          "Lg": 6.25
        }
      },
      {
        "name": "Iced Chai",
        "sizes": {
          "Sm": 5,
          "Md": 5.5,
          "Lg": 6
        }
      },
      {
        "name": "Iced Mocha",
        "sizes": {
          "Sm": 5.5,
          "Md": 6,
          "Lg": 6.75
        }
      },
      {
        "name": "Iced Matcha",
        "sizes": {
          "Sm": 5.5,
          "Md": 6,
          "Lg": 6.5
        }
      },
      {
        "name": "Iced Tea",
        "price": {
          "Sm": 3.75,
          "Md": 4.25,
          "Lg": 4.75
        },
        "varieties": ["Raspberry Hibiscus", "Peach", "Moroccan Mint", "Black"]
      }
    ]
  },
  {
    "category": "Bottled Drinks", 
    "items": [
      {
        "name": "Poland Spring Water",
        "price": 2
      },
      {
        "name": "Essentia Water",
        "price": 3.67
      },
      {
        "name": "Martinelli's Apple Juice",
        "price": 5.5
      },
      {
        "name": "Guayaki Yerba Mate",
        "price": 3.75
      },
      {
        "name": "Perrier",
        "price": 2,
      },
      {
        "name": "Natalie's Juices",
        "price": 5,
        "varieties": ["Orange Juice", "Orange & Beet", "Carrot, Ginger, Tumeric & Apple", "Lemonade", "Strawberry Lemonade"] 
      },
      {
        "name": "BKE Kombucha",
        "price": 6,
        "varieties": ["Yerba Mate & Lemon", "Pear & Chrysanthemum"] 
      },
      {
        "name": "San Pellegrino", 
        "price": 2.25,
        "varieties": ["Sparkling Water", "Lemon", "Blood Orange", "Classic"]
      },
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
        "varieties": 
        [
          "Salted Caramel", "Vanilla", "Almond", 
          "Coconut", "Honey", "Lavender", 
          "Hazelnut","Chocolate", "Toffee Nut", 
          "Peanut Butter",  "Pistachio", "Spiced Brown Sugar",
          "Agave", "Sugar-Free Vanilla", "Sugar-Free Hazelnut", 
          "*Peach ", "*Pumpkin Spice ", "*Strawberry" 
        ]

      }
    ]
  }
]
export default beverageItems