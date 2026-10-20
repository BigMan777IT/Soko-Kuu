// data.js
// Hii ni DATA YA MFANO (mock data) ili kuonyesha jinsi app itakavyofanya kazi.
// Developer: badilisha hii na maombi halisi ya API kwenda kwenye database/backend yako.

const CATEGORIES = [
  { id: "nguo", name: "Nguo", color: "#CCFBF1" },
  { id: "vito", name: "Vito", color: "#FEF3C7" },
  { id: "manukato", name: "Manukato", color: "#FCE7F3" },
  { id: "sportswear", name: "Sportswear", color: "#DBEAFE" },
  { id: "elektroniki", name: "Elektroniki", color: "#E0E7FF" },
  { id: "spea", name: "Spea", color: "#E5E3DD" },
  { id: "nyingine", name: "Nyingine", color: "#F1F0EB" }
];

const PRODUCTS = [
  {
    id: 1,
    name: "Kanga ya Mtindo",
    category: "nguo",
    price: 15000,
    priceLabel: "Tsh 15,000",
    type: "Retail",
    verified: true,
    seller: "Duka la Mitindo Kariakoo",
    location: "Dar es Salaam"
  },
  {
    id: 2,
    name: "Spea Break - Toyota Vitz",
    category: "spea",
    price: 25000,
    priceLabel: "Tsh 25,000",
    type: "Retail",
    verified: true,
    seller: "Duka la Spea Mbezi",
    location: "Dar es Salaam"
  },
  {
    id: 3,
    name: "Mafuta ya Injini - Mapipa",
    category: "spea",
    price: null,
    priceLabel: "Wasiliana kwa bei",
    type: "Wholesale",
    verified: true,
    seller: "Duka la Spea Mbezi",
    location: "Dar es Salaam"
  },
  {
    id: 4,
    name: "Spea za Taa - Toyota",
    category: "spea",
    price: null,
    priceLabel: "Wasiliana kwa bei",
    type: "Wholesale",
    verified: false,
    seller: "Spea Mwanza Center",
    location: "Mwanza"
  },
  {
    id: 5,
    name: "Jezi ya Mazoezi",
    category: "sportswear",
    price: 20000,
    priceLabel: "Tsh 20,000",
    type: "Retail",
    verified: true,
    seller: "Sports Corner Arusha",
    location: "Arusha"
  },
  {
    id: 6,
    name: "Mkufu wa Dhahabu (Plated)",
    category: "vito",
    price: 35000,
    priceLabel: "Tsh 35,000",
    type: "Retail",
    verified: false,
    seller: "Vito vya Mama",
    location: "Dodoma"
  }
];
