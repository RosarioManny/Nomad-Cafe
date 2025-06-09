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
          premium: { name: "Gluten-free bread (v)", price: 3 }
        },
        Cheese: {
          base: ["Cheddar", "Swiss", "Provolone", "Pepperjack"],
          premium: { name: "Vegan cheese", price: 1 }
        },
        Proteins: {
          base: [ "Bacon", "Ham", "Turkey", ],
          price: 3
        },
        Veggies: {
          base: ["Alfalfa sprouts", "Roasted red peppers", "Spinach", "Onion", "Tomato"],
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
        price: 15.5,
        description: "2 eggs any style, rosemary parmesan hashbrowns, ham, fruits, wheat toast & butter",
        modifiers: [
          { name: "Sub ham for bacon/turkey/avocado", price: 1 }
        ]
      },
      {
        name: "Cheddar Smashbrowns",
        price: 14.5,
        description: "Over-easy eggs, bacon jam, hashbrowns, cheddar, sriracha, scallions"
      },
      {
        name: "Sol Tacos",
        price: 8.5,
        description: "2 tortillas, eggs, pico de gallo, avocado, cheddar",
        modifiers: [
          { name: "Add protein: Bacon, Ham or Turkey", price: 3 }
        ]
      },
      {
        name: "Loaded Avocado Toast (v)",
        price: 11,
        description: "Smashed avocado, pico de gallo, sprouts on thick cut toast",
        modifiers: [
          { name: "Add egg", price: 3 },
          { name: "Sub Gluten Free bread", price: 3 }
        ]
      },
      {
        name: "Monte Cristo Sliders",
        price: 13,
        description: "Ham, brie, raspberry jam, French toast croissants"
      }
    ]
  },
  {
    category: "Sandwiches",
    items: [
      {
        name: "Launchpad",
        price: 13.5,
        description: "Turkey, chipotle aioli, spinach, tomato, cheddar on ciabatta"
      },
      {
        name: "Runway",
        price: 13.5,
        description: "Turkey, pesto, mozzarella, roasted peppers on ciabatta"
      },
      {
        name: "Layover",
        price: 14,
        description: "6-cheese grilled cheese on rosemary parmesan wheat toast (Asiago, Parmesan, Fontina, Cheddar, Swiss, Mozzarella)"
      },
      {
        name: "First Class",
        price: 15,
        description: "Roast beef, tomatoes, sprouts,  mozzarella, olive oil, truffle glaze on baguette"
      },
      {
        name: "Take It Caprese",
        price: 13.5,
        description: "Tomatoes, basil, mozzarella, olive oil, balsamic glaze on baguette",
        note: "Sub avocado for meat (v)"
      }
    ]
  },
  {
    category: "Sides",
    items: [
      { name: "Greek yogurt, berries & honey", price: 7 },
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
        price: 3 
      }
    ]
  }
];

export default menuItems