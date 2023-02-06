const seederData = [
  {
    name: "Apple",
    img: "https://images.unsplash.com/photo-1591735179859-a049994205de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 2.99,
  },
  {
    name: "Banana",
    img: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 3.99,
  },
  {
    name: "Pomegranate",
    img: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 6.99,
  },
  {
    name: "Orange",
    img: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 4.99,
  },
  {
    name: "Lemon",
    img: "https://images.unsplash.com/photo-1587486937303-32eaa2134b78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80",
    price: 5.99,
  },
  {
    name: "Grape",
    img: "https://images.unsplash.com/photo-1615485925763-86786288908a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 7.99,
  },
  {
    name: "Broccoli",
    img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 2.78,
  },
  {
    name: "Carrot",
    img: "https://images.unsplash.com/photo-1606355601253-61a57fe375e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 7.49,
  },
  {
    name: "Corn",
    img: "https://plus.unsplash.com/premium_photo-1664299124175-e2c793325bfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1701&q=80",
    price: 10.99,
  },
  {
    name: "Eggplant",
    img: "https://images.unsplash.com/photo-1633383075531-2d44cc15268d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1513&q=80",
    price: 8.99,
  },
  {
    name: "Pumpkin",
    img: "https://images.unsplash.com/photo-1569976710208-b52636b52c09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80",
    price: 15.99,
  },
  {
    name: "Potato",
    img: "https://images.unsplash.com/photo-1617130094141-532436117aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 3.99,
  },
  {
    name: "Coca Cola",
    img: "https://images.unsplash.com/photo-1612854499438-eac1db7046db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29rZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
    price: 1.99,
  },
  {
    name: "Pepsi Max",
    img: "https://images.unsplash.com/photo-1651000877858-c8a3d2e926ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 1.99,
  },
  {
    name: "Riot Energy Drink",
    img: "https://images.unsplash.com/photo-1646753479905-079a19433df1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 2.79,
  },
  {
    name: "Apple Cider",
    img: "https://images.unsplash.com/photo-1591735192933-547baa8435d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 4.99,
  },
  {
    name: "Sparkling Water",
    img: "https://images.unsplash.com/photo-1637301985974-d1417e702f13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 1.99,
  },
  {
    name: "Iced Coffee",
    img: "https://images.unsplash.com/photo-1667558411348-94a8af5f6748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 3.99,
  },
  {
    name: "Chocolate",
    img: "https://images.unsplash.com/photo-1587132164684-cfd0b8214d8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 3.99,
  },
  {
    name: "Strawberry cake",
    img: "https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1533&q=80",
    price: 11.99,
  },
  {
    name: "Lemon cupcake",
    img: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 3.99,
  },
  {
    name: "Gingerbread brownies",
    img: "https://images.unsplash.com/photo-1621634890262-e60174dad944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 1.99,
  },
  {
    name: "M&M cookies",
    img: "https://images.unsplash.com/photo-1590080875897-b7b65b2f73d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1161&q=80",
    price: 2.99,
  },
  {
    name: "Strawberry popsicle",
    img: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1187&q=80",
    price: 5.99,
  },
  {
    name: "Turmeric",
    img: "https://images.unsplash.com/photo-1615485500834-bc10199bc727?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 2.99,
  },
  {
    name: "Cinnamon",
    img: "https://images.unsplash.com/photo-1587131782738-de30ea91a542?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 1.99,
  },
  {
    name: "Black pepper",
    img: "https://images.unsplash.com/photo-1649951806971-ad0e00408773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80",
    price: 5.99,
  },
  {
    name: "Star anise",
    img: "https://images.unsplash.com/photo-1641677371014-5d0691ab5c0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1514&q=80",
    price: 3.99,
  },
  {
    name: "Red pepper",
    img: "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 1.99,
  },
  {
    name: "Garlic",
    img: "https://images.unsplash.com/photo-1587049332298-1c42e83937a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FybGljfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: 4.99,
  },
];

module.exports = seederData;
