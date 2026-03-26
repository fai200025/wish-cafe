export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const MENU_DATA: MenuCategory[] = [
  {
    category: "Appetizers",
    items: [
      { name: "French Fries", price: "199/-" },
      { name: "Fish & Chips", price: "299/-" },
      { name: "Fish Finger", price: "289/-" },
      { name: "Fried Calamari", price: "299/-" },
      { name: "Golden Fried Prawn (8pcs)", price: "329/-" },
      { name: "Prawn Butterfly (8pcs)", price: "329/-" },
      { name: "Crab Fry", price: "329/-" },
      { name: "Crab Masala", price: "349/-" },
      { name: "Loaded Fries", price: "379/-" },
      { name: "Chicken Nachos", price: "369/-" },
      { name: "Japanies Nanban Chicken", price: "398/-" },
      { name: "Fried Chicken (6pcs/1pcs)", price: "499/90/-" },
      { name: "Broast Chicken (4pcs/1pcs)", price: "549/150/-" },
      { name: "BBQ Wings (8pcs)", price: "329/-" },
      { name: "Peri Peri Wings (8pcs)", price: "389/-" },
      { name: "Wonton (6pcs/1pcs)", price: "239/40/-" },
    ],
  },
  {
    category: "Soup",
    items: [
      { name: "Thai Soup (Thick) 1:1/1:4/1:6", price: "199/600/900/-" },
      { name: "Thai Soup (Clear) 1:1/1:4/1:6", price: "199/600/900/-" },
      { name: "Corn Soup 1:1/1:4/1:6", price: "199/600/900/-" },
      { name: "Creamy Mushroom Soup", price: "239/-" },
      { name: "Sea Food Soup", price: "249/-" },
    ],
  },
  {
    category: "Pizza (8\" / 12\")",
    items: [
      { name: "Tandoori Chicken Pizza", price: "579 / 889/-" },
      { name: "BBQ Chicken Pizza", price: "589 / 889/-" },
      { name: "Peri Peri Chicken Pizza", price: "649 / 949/-" },
      { name: "Beef Pizza", price: "669 / 969/-" },
      { name: "Beef Preparoni Pizza", price: "499 / 799/-" },
      { name: "Peri Peri Beef Pizza", price: "699 / 999/-" },
      { name: "Meat Lover Pizza", price: "699 / 999/-" },
      { name: "Sea Food Pizza", price: "689 / 989/-" },
      { name: "Sousage Pizza", price: "539 / 839/-" },
      { name: "Mashroom Pizza", price: "549 / 849/-" },
    ],
  },
  {
    category: "Burger",
    items: [
      { name: "Chicken Burger", price: "219/-" },
      { name: "BBQ Chicken Burger", price: "229/-" },
      { name: "Naga Chiken Burger", price: "239/-" },
      { name: "Beef Burger", price: "249/-" },
      { name: "Naga Beef Burger", price: "259/-" },
    ],
  },
  {
    category: "Salad (1:2)",
    items: [
      { name: "Honey Cashewnut Salad", price: "389/-" },
      { name: "Grill Chicken Salad", price: "339/-" },
      { name: "Chicken Prawn Salad", price: "399/-" },
      { name: "Sea Food Salad", price: "419/-" },
    ],
  },
  {
    category: "Pasta (1:2)",
    items: [
      { name: "Creamy Chicken Baked Pasta", price: "349/-" },
      { name: "Meatball Pasta", price: "369/-" },
      { name: "Bolognese Spaghetti Pasta", price: "379/-" },
      { name: "Arrabiata Pasta", price: "349/-" },
      { name: "Sea Food Pasta", price: "399/-" },
    ],
  },
  {
    category: "Chowmein (1:2)",
    items: [
      { name: "Chicken Chowmein", price: "329/-" },
      { name: "Beef Chowmein", price: "369/-" },
      { name: "Sea Food Chowmein", price: "399/-" },
      { name: "Hakka Chowmein", price: "389/-" },
      { name: "Mix Chowmein", price: "419/-" },
    ],
  },
  {
    category: "Indian",
    items: [
      { name: "Chicken Carry", price: "299/-" },
      { name: "Chicken Achari", price: "329/-" },
      { name: "Chicken Bhuna", price: "309/-" },
      { name: "Beef Carry", price: "329/-" },
      { name: "Beef Achari", price: "349/-" },
      { name: "Beef Bauna", price: "349/-" },
      { name: "Daal Butter Fry", price: "149/-" },
      { name: "Mix Vegetable", price: "229/-" },
      { name: "Steam Rice 1:2", price: "189/-" },
    ],
  },
  {
    category: "Biriyani",
    items: [
      { name: "Hyderabadi Chicken Biriyani", price: "349/-" },
      { name: "Hyderabadi Mutton Biriyani", price: "399/-" },
      { name: "Afgan Chicken Biriyani", price: "399/-" },
      { name: "Afgan Mutton Biriyani", price: "429/-" },
      { name: "Beef Biriyani", price: "299/-" },
    ],
  },
  {
    category: "Kabab",
    items: [
      { name: "Tandoori Chicken", price: "199/-" },
      { name: "Chicken Chaap", price: "199/-" },
      { name: "Chicken Masala", price: "289/-" },
      { name: "Chicken Hariyali Kabab", price: "299/-" },
      { name: "Chicken Reshmi Kabab", price: "299/-" },
      { name: "Chicken Tikka Kabab", price: "299/-" },
      { name: "Chicken 69", price: "299/-" },
      { name: "Chiken Achari Kabab", price: "329/-" },
      { name: "Beef Adana Kabab", price: "399/-" },
      { name: "Turkish Beef Pepper Kabab", price: "409/-" },
      { name: "Regular Naan", price: "39/-" },
      { name: "Garlic Naan", price: "69/-" },
      { name: "Regular Parata", price: "29/-" },
      { name: "Tandoori Parata", price: "39/-" },
      { name: "Pudina Parata", price: "59/-" },
      { name: "Kabab Platter (1:2/1:4)", price: "1099/2199/-" },
    ],
  },
  {
    category: "Fresh Juice",
    items: [
      { name: "Lemon Mint", price: "139/-" },
      { name: "Lemonade", price: "139/-" },
      { name: "Orrange Juice", price: "179/-" },
      { name: "Raw Orrange Juice", price: "309/-" },
      { name: "Mango Juice", price: "199/-" },
      { name: "Apple Juice", price: "199/-" },
      { name: "Papaya Juice", price: "179/-" },
      { name: "Watermelon Juice", price: "199/-" },
    ],
  },
  {
    category: "Milk Shake",
    items: [
      { name: "Classic Vanila", price: "199/-" },
      { name: "Classic Chocolate", price: "199/-" },
      { name: "Classic Mango", price: "199/-" },
      { name: "Classic Strawberry", price: "199/-" },
    ],
  },
  {
    category: "Signature Shake",
    items: [
      { name: "Cookies N Cream", price: "239/-" },
      { name: "Kitkat N Cream", price: "249/-" },
      { name: "Snickers N Cream", price: "249/-" },
      { name: "Neutella N Cream", price: "259/-" },
      { name: "Chocolate N Cream", price: "249/-" },
      { name: "Caramel N Cream", price: "259/-" },
    ],
  },
  {
    category: "Lassi",
    items: [
      { name: "Sweet Lassi", price: "139/-" },
      { name: "Mint Lassi", price: "149/-" },
      { name: "Caramel Lassi", price: "169/-" },
    ],
  },
  {
    category: "Coffee",
    items: [
      { name: "Regular Coffee", price: "99/-" },
      { name: "Cold Coffee", price: "179/-" },
      { name: "Caramel Cold Coffee", price: "229/-" },
    ],
  },
  {
    category: "Boba Bliss",
    items: [
      { name: "Mango Boba", price: "249/-" },
      { name: "Green Apple Boba", price: "249/-" },
      { name: "Strawberr Boba", price: "249/-" },
      { name: "Blueberry Boba", price: "249/-" },
      { name: "Passion Boba", price: "249/-" },
    ],
  },
  {
    category: "Smoothie",
    items: [
      { name: "Mango Fruits", price: "279/-" },
      { name: "Green Apple Fruits", price: "279/-" },
      { name: "Strawberr Fruits", price: "279/-" },
      { name: "Blueberry Fruits", price: "279/-" },
      { name: "Passion Fruits", price: "279/-" },
    ],
  },
  {
    category: "Mojito",
    items: [
      { name: "Virgin Mojito", price: "279/-" },
      { name: "Orrang Mojito", price: "279/-" },
      { name: "Wild Apple Mojito", price: "279/-" },
      { name: "Strawberr Mojito", price: "279/-" },
      { name: "Mango Mojito", price: "279/-" },
    ],
  },
  {
    category: "Dessert",
    items: [
      { name: "Faluda", price: "199/-" },
      { name: "Fresh Brownie", price: "149/-" },
      { name: "Brownie With Ice Cream", price: "229/-" },
      { name: "Sizzling Brownie", price: "279/-" },
      { name: "Cream Caramel", price: "129/-" },
      { name: "Fruit Salad", price: "169/-" },
    ],
  },
  {
    category: "Sizzler",
    items: [
      { name: "Chicken Sizzler", price: "389/-" },
      { name: "Beef Sizzler", price: "459/-" },
      { name: "Prawn Sizzler", price: "469/-" },
    ],
  },
  {
    category: "Fried Rice (1:2)",
    items: [
      { name: "Egg Fried Rice", price: "299/-" },
      { name: "Chicken Fried Rice", price: "329/-" },
      { name: "Special Fried Rice", price: "349/-" },
    ],
  },
  {
    category: "Platters",
    items: [
      { name: "Chicken Platter", price: "259/-", description: "Fried Chicken 2pieces, Chicken Chili, Fried Rice" },
      { name: "Prawn Platter", price: "279/-", description: "Fried Prawn 4pieces, Chicken Chili, Fried Rice" },
      { name: "Couple Platter", price: "699/-", description: "Fried Chicken 2pieces, Frid Prawn 2Pieces, Spring Roll 2Pieces, Chicken Chili, Ice Cream 2scoops, Soft Drinks 2Pieces, Fried Rice" },
    ],
  },
];
