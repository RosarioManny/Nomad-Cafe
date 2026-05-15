
export const questions = [
  {
    text: "How do you usually start your morning?",
    options: [
      { label: "Straight to business — I need to wake up fast", tags: ["bold", "hot"] },
      { label: "Slow and easy — I like to ease into things", tags: ["mellow", "cold"] },
      { label: "Something sweet to get me going", tags: ["sweet", "cold"] },
      { label: "I skip morning, I'm more of an afternoon person", tags: ["sweet", "specialty"] }
    ]
  },
  {
    text: "Pick the vibe that matches your energy today.",
    options: [
      { label: "Focused and productive", tags: ["bold", "hot"] },
      { label: "Cozy and comfortable", tags: ["mellow", "hot"] },
      { label: "Playful and a little indulgent", tags: ["sweet", "specialty"] },
      { label: "Cool and refreshed", tags: ["cold", "mellow"] }
    ]
  },
  {
    text: "What do you usually pair with your drink?",
    options: [
      { label: "Nothing — the drink is the moment", tags: ["bold", "simple"] },
      { label: "A pastry or something sweet", tags: ["sweet", "mellow"] },
      { label: "A full meal, I'm hungry", tags: ["hot", "bold"] },
      { label: "A good book or my phone", tags: ["cold", "curious"] }
    ]
  },
  {
    text: "How do you like to order?",
    options: [
      { label: "Same thing every time — I know what I want", tags: ["simple", "hot"] },
      { label: "I ask what's good today", tags: ["curious", "specialty"] },
      { label: "Whatever looks interesting on the menu", tags: ["curious", "mellow"] },
      { label: "Something cold, always", tags: ["cold", "iced"] }
    ]
  }
]

export const drinks = [
  {
    name: "Double Espresso",
    desc: "Two shots of rich, concentrated espresso. No fuss, no frills — just pure coffee doing what it does best.",
    personality: "You're the person who gets things done. Direct, dependable, and quietly impressive.",
    pairings: [
      { name: "Classic Croissant", note: "Buttery, flaky, no distractions." },
      { name: "Affogato Upgrade", note: "Ask us to pour your shot over vanilla gelato." }
    ],
    tags: ["bold", "hot", "simple"]
  },
  {
    name: "Signature Latte",
    desc: "One of Nomad's handcrafted latte flavors, made with espresso and your choice of milk. Creme Brulee is a fan favorite.",
    personality: "Creative, thoughtful, and up for something well-made. Make it the full moment.",
    pairings: [
      { name: "Runway Sandwich", note: "Just as much flavor as your drink!" },
      { name: "Launchpad Sandwich", note: "A Nomad staple worth an addition." }
    ],
    tags: ["mellow", "hot", "specialty"]
  },
  {
    name: "Iced Cold Brew",
    desc: "24 hours of steeped cold brew poured over ice. Smooth, low-acid, and built for people who take their coffee seriously.",
    personality: "Patient, cool under pressure, and never in a rush.",
    pairings: [
      { name: "Scallion Cream Cheese Bagel", note: "Smooth meets smooth." },
      { name: "Sweet Cheese Danish", note: "A little indulgence never hurt anyone." }
    ],
    tags: ["cold", "bold", "iced"]
  },
  {
    name: "Drip Coffee",
    desc: "An honest, no-nonsense cup of drip coffee. Straightforward, reliable, and exactly what it needs to be.",
    personality: "Classic and dependable. You don't need to dress things up to make them good.",
    pairings: [
      { name: "Eggscape NY Platter", note: "Sit down, slow down, eat well." },
      { name: "Traveler + Bacon on Croissant", note: "A baconeggandcheese the New York way." }
    ],
    tags: ["simple", "hot", "bold"]
  },
  {
    name: "Matcha Latte",
    desc: "Ceremonial grade matcha whisked with steamed oat milk. Earthy, smooth, and a little unexpected.",
    personality: "You march to your own drum. You discovered matcha before it was everywhere and you're not apologizing for it.",
    pairings: [
      { name: "Ham & Swiss Croissant", note: "Savory and earthy — a natural match." },
      { name: "Sol Taco", note: "Bold flavors that hold up to the matcha beautifully." }
    ],
    tags: ["mellow", "sweet", "curious"]
  },
  {
    name: "Seasonal Special",
    desc: "Nomad is always rotating something creative, limited, and worth the trip. Ask at the counter.",
    personality: "Spontaneous and always up for something new. You're the friend who orders the best thing without looking too hard.",
    pairings: [
      { name: "Ask what's fresh", note: "There's usually something worth adding to your order." },
      { name: "Today's Pastry", note: "First come, first served — don't sleep on it." }
    ],
    tags: ["specialty", "sweet", "curious"]
  }
]