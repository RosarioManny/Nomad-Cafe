const menuItems = [
  {
    category: "Bagels",
    description: "Served with your choice of spread - (v)",
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
    description: "Two eggs and your choice of cheese (sub eggs for avocado +$1)",
    price: 6,
    options:[ 
      {
        Bread: {
          base: ["Bagel (v)", "Ciabatta (v)", "Croissant", "Whole wheat toast", "Gluten-free bread (v) +$3"],
        },
        Cheese: {
          base: ["Cheddar", "Swiss", "Provolone", "Pepperjack", "Vegan cheese +$1", "Mozzarella +$1"]
        },
        Proteins: {
          base: [ "Bacon", "Ham", "Turkey" ],
          price: 3
        },
        Veggies: {
          base: ["Alfalfa Sprouts", "Roasted Red Peppers", "Spinach", "Onion", "Tomato", "Avocado +$3"],
          price: .75,
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
        description: "Two eggs, rosemary parmesan hashbrowns, ham, assorted fruits, and wheat toast platter",
        modifiers: [
          { name: "Sub bacon", price: 1 },
          { name: "Sub turkey", price: 1 },
          { name: "Sub avocado", price: 1 },
          { name: "Add bacon", price: 2 },
          { name: "Add avocado", price: 2 },
          { name: "Add turkey", price: 2 },
        ]
      },
      {
        name: "Cheddar Smashbrowns",
        price: 13.5,
        description: "Two over-easy eggs smashed between cheddar, bacon jam hashbrowns on sriracha topped with scallions"
      },
      {
        name: "Sol Tacos",
        price: 8,
        description: "Two tortillas, eggs, pico de gallo, avocado, cheddar",
        modifiers: [
          { name: "Add Bacon", price: 3 },
          { name: "Add Ham", price: 3 },
          { name: "Add Turkey", price: 3 }
        ]
      },
      {
        name: "Loaded Avocado Toast (v)",
        price: 11,
        description: "Smashed avocado on thick cut multigrain toast topped with pico de gallo and sprouts ",
        modifiers: [
          { name: "Add egg", price: 3 },
          { name: "Sub Gluten Free bread", price: 3 }
        ]
      },
      {
        name: "Monte Cristo Sliders",
        price: 12,
        description: "Two French toast croissants sliders with ham, brie and raspberry jam. Sprinkled with powdered sugar"
      }
    ]
  },
  {
    category: "Sandwiches",
    items: [
      {
        name: "The Launchpad",
        price: 12,
        description: "Turkey, chipotle aioli, cheddar, red onions, spinach, tomato on ciabatta"
      },
      {
        name: "The Runway",
        price: 12,
        description: "Turkey, pesto, olive oil, mozzarella, spinach, red onions, roasted peppers on ciabatta"
      },
      {
        name: "Layover",
        price: 13,
        description: "6-cheese grilled cheese (Asiago, Fontina, Cheddar, Swiss, Mozzarella) on a parmesean, rosemary crusted bread"
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
      }
    ]
  },
  {
    category: "Sides",
    items: [
      { name: "Greek yogurt, berries & honey", 
        price: 6 },
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
      { name: "Two Eggs", 
        price: 3
      }
    ]
  }
];

export default menuItems