const menuItems = [
  {
    category: "Bagels",
    description: "All vegan",
    price: 2.75,
    variants: ["Plain", "Whole Wheat", "Sesame", "Everything", "Cinnamon Raisin"],
    addOns: [
      { name: "Tofu scallion cream cheese (v)", price: 3 },
      { name: "Scallion cream cheese | Tofu cream cheese (v)", price: 2.5 },
      { name: "Plain cream cheese", price: 2 },
      { name: "Butter, Peanut butter or Jam", price: 1.25 }
    ]
  },
  {
    category: "The Traveler Sandwich",
    description: "Two eggs with cheese (sub avocado for vegan)",
    price: 6,
    options:[ 
      {
        Bread: {
          base: ["Bagel (v)", "Ciabatta (v)", "Croissant", "Whole wheat toast"],
          premium: { name: "GF bread (v)", price: 3 }
        },
        Cheese: {
          base: ["Cheddar", "Swiss", "Provolone", "Pepperjack"],
          premium: { name: "Vegan cheese", price: 1 }
        },
        Proteins: {
          base: [ "Bacon", "Ham", "Turkey" ],
          price: 3
        },
        Veggies: {
          base: ["Alfalfa Sprouts", "Roasted Red Peppers", "Spinach", "Onion", "Tomato"],
          price: .75,
          premium:{ name: "Avocado", price: 3}
        },
        Condiments: {
          base: ["Mayo", "Ketchup", "Red Cholula", "Green Cholula", "Sriracha", "Vegan Mayo", "Chipotle Aioli", "Salt & Pepper"],
          price: .50
        }
      }
    ]    
  },
  {
    category: "Signature Dishes",
    items: [
      {
        name: "Eggscape from NY",
        price: 14,
        description: "Two eggs, rosemary parmesan hashbrowns, ham, berries, wheat toast",
        modifiers: [
          { name: "Sub ham for bacon/turkey/avocado", price: 1 }
        ]
      },
      {
        name: "Cheddar Smashbrowns",
        price: 13.5,
        description: "Over-easy eggs, bacon jam, hashbrowns, cheddar, sriracha, scallions"
      },
      {
        name: "Sol Tacos",
        price: 8,
        description: "Two tortillas, eggs, pico de gallo, avocado, cheddar",
        modifiers: [
          { name: "Add protein: Bacon, Ham or Turkey", price: 3 }
        ]
      },
      {
        name: "Loaded Avocado Toast (v)",
        price: 11,
        description: "Smashed avocado, pico de gallo, sprouts",
        modifiers: [
          { name: "Add egg", price: 3 },
          { name: "Sub Gluten Free bread", price: 3 }
        ]
      },
      {
        name: "Monte Cristo Sliders",
        price: 12,
        description: "Ham, brie, raspberry jam, French toast croissants"
      }
    ]
  },
  {
    category: "Sandwiches",
    items: [
      {
        name: "The Launchpad",
        price: 12,
        description: "Turkey, chipotle aioli, spinach, tomato, cheddar, on ciabatta"
      },
      {
        name: "The Runway",
        price: 12,
        description: "Turkey, pesto, mozzarella, roasted peppers, olive oil on ciabatta"
      },
      {
        name: "Layover",
        price: 13,
        description: "6-cheese grilled cheese (asiago, fontina, cheddar, Swiss, mozzarella) on a parmesean, rosemary crusted bread"
      },
      {
        name: "First Class",
        price: 13.5,
        description: "Roast beef, tomatoes, sprouts, mozzarella, truffle glaze, olive oil on baguette"
      },
      {
        name: "Take It Caprese",
        price: 12.5,
        description: "Tomatoes, basil, mozzarella, balsamic glaze, olive oil on baguette",
        note: "Sub avocado for meat (v)"
      }
    ]
  },
  {
    category: "Sides",
    items: [
      { name: "Greek yogurt, berries & honey", price: 6 },
      { 
        name: "Rosemary parmesan hashbrown", 
        variants: ["Vegan (v)"],
        price: 7 
      },
      { 
        name: "Vegan rosemary hashbrown", 
        variants: ["Vegan (v)"],
        price: 7 
      },
      { name: "Seasoned avocado half", 
        price: 3 
      },
      { name: "Side of bacon", 
        price: 5 
      },
      { name: "Egg", 
        price: 2 
      }
    ]
  }
];

export default menuItems