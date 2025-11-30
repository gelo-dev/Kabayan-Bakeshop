const menuData = {
  breads: [
    { id: 1, image: "./imagesForMenu/chocolateCake.jpg", text: "Soft, fluffy, and freshly baked daily.", name: "Fluffy Bread", price: 10, liked: false },
    { id: 2, image: "/imagesForMenu/cookiesForMenu.jpg", text: "Soft inside, lightly crisp outside.", name: "Classic Bun", price: 20, liked: false },
    { id: 3, image: "/imagesForMenu/pastryForMenu.jpg", text: "Locally baked, globally inspired.", name: "Parisian Croissant", price: 50, liked: false },
    { id: 4, image: "/imagesForMenu/PandecocoForMenu.jpg", text: "Soft bread filled with sweet, creamy coconut.", name: "Coconut Pandecoco", price: 30, liked: false },
    { id: 5, image: "./imagesForMenu/chocolateCake.jpg", text: "Our homemade cakes with smooth frosting.", name: "Mini Cake Slice", price: 50, liked: false },
    { id: 6, image: "/imagesForMenu/PandesalForMenu.jpg", text: "Classic soft rolls perfect with coffee.", name: "Classic Pandesal", price: 10, liked: false },
  ],

  cookies: [
    { id: 1, image: "./imagesForMenu/chocolateCake.jpg", text: "Soft, fluffy, and freshly baked daily.", name: "Choco Delight Cookie", price: 10, liked: false },
    { id: 2, image: "/imagesForMenu/cookiesForMenu.jpg", text: "Soft inside, lightly crisp outside.", name: "Sugar Cookie", price: 20, liked: false },
    { id: 3, image: "/imagesForMenu/pastryForMenu.jpg", text: "Locally baked, globally inspired.", name: "Almond Biscuit", price: 50, liked: false },
    { id: 4, image: "/imagesForMenu/PandecocoForMenu.jpg", text: "Soft bread filled with sweet, creamy coconut.", name: "Coconut Cookie", price: 30, liked: false },
    { id: 5, image: "./imagesForMenu/chocolateCake.jpg", text: "Our homemade cakes with smooth frosting.", name: "Chocolate Chip Cookie", price: 50, liked: false },
    { id: 6, image: "/imagesForMenu/cookiesForMenu.jpg", text: "Soft and crunchy treat.", name: "Oatmeal Cookie", price: 25, liked: false },
    { id: 7, image: "./imagesForMenu/pastryForMenu.jpg", text: "Nutty and sweet.", name: "Peanut Butter Cookie", price: 30, liked: false },
    { id: 8, image: "/imagesForMenu/PandecocoForMenu.jpg", text: "Soft coconut flavor.", name: "Coconut Macaroon", price: 35, liked: false },
    { id: 9, image: "./imagesForMenu/chocolateCake.jpg", text: "Rich and chocolatey.", name: "Double Choco Cookie", price: 40, liked: false },
  ],

  cakes: [
    { id: 1, image: "./imagesForMenu/chocolateCake.jpg", text: "Soft, fluffy, and freshly baked daily.", name: "Chocolate Cake", price: 10, liked: false },
    { id: 2, image: "/imagesForMenu/cookiesForMenu.jpg", text: "Soft inside, lightly crisp outside.", name: "Vanilla Cake", price: 20, liked: false },
    { id: 3, image: "/imagesForMenu/pastryForMenu.jpg", text: "Locally baked, globally inspired.", name: "Ube Cake", price: 50, liked: false },
    { id: 4, image: "/imagesForMenu/PandecocoForMenu.jpg", text: "Soft bread filled with sweet, creamy coconut.", name: "Coconut Cake", price: 30, liked: false },
    { id: 5, image: "./imagesForMenu/chocolateCake.jpg", text: "Our homemade cakes with smooth frosting.", name: "Red Velvet Cake", price: 50, liked: false },
    { id: 6, image: "/imagesForMenu/pastryForMenu.jpg", text: "Creamy layered delight.", name: "Caramel Cake", price: 45, liked: false },
    { id: 7, image: "/imagesForMenu/cookiesForMenu.jpg", text: "Sweet and nutty.", name: "Hazelnut Cake", price: 55, liked: false },
  ],

  pastries: [
    { id: 1, image: "./imagesForMenu/chocolateCake.jpg", text: "Soft, fluffy, and freshly baked daily.", name: "Choco Danish", price: 10, liked: false },
    { id: 2, image: "/imagesForMenu/cookiesForMenu.jpg", text: "Soft inside, lightly crisp outside.", name: "Butter Croissant", price: 20, liked: false },
    { id: 3, image: "/imagesForMenu/pastryForMenu.jpg", text: "Locally baked, globally inspired.", name: "Almond Croissant", price: 50, liked: false },
    { id: 4, image: "/imagesForMenu/PandecocoForMenu.jpg", text: "Soft bread filled with sweet, creamy coconut.", name: "Coconut Danish", price: 30, liked: false },
    { id: 5, image: "./imagesForMenu/chocolateCake.jpg", text: "Our homemade cakes with smooth frosting.", name: "Mini Cake Pastry", price: 50, liked: false },
    { id: 6, image: "/imagesForMenu/pastryForMenu.jpg", text: "Flaky and sweet.", name: "Apple Turnover", price: 35, liked: false },
    { id: 7, image: "/imagesForMenu/cookiesForMenu.jpg", text: "Filled with cream cheese.", name: "Cheese Danish", price: 40, liked: false },
    { id: 8, image: "./imagesForMenu/PandecocoForMenu.jpg", text: "Chocolate filled delight.", name: "Choco Croissant", price: 45, liked: false },
  ],

  sandwiches: [
    { id: 1, image: "./imagesForMenu/chocolateCake.jpg", text: "Classic breakfast sandwich with eggs and cheese.", name: "Egg & Cheese Sandwich", price: 35, liked: false },
    { id: 2, image: "/imagesForMenu/cookiesForMenu.jpg", text: "Freshly made ham and cheese on soft bread.", name: "Ham & Cheese Sandwich", price: 45, liked: false },
    { id: 3, image: "/imagesForMenu/pastryForMenu.jpg", text: "Grilled chicken with lettuce and mayo.", name: "Grilled Chicken Sandwich", price: 60, liked: false },
    { id: 4, image: "/imagesForMenu/PandecocoForMenu.jpg", text: "Tuna salad with fresh veggies.", name: "Tuna Sandwich", price: 55, liked: false },
    { id: 5, image: "./imagesForMenu/chocolateCake.jpg", text: "Classic BLT with crispy bacon.", name: "Bacon Lettuce Tomato", price: 65, liked: false },
    { id: 6, image: "/imagesForMenu/pastryForMenu.jpg", text: "Turkey sandwich with cheese.", name: "Turkey Club", price: 70, liked: false },
  ],

  beverages: [
    { id: 1, image: "./imagesForMenu/chocolateCake.jpg", text: "Freshly brewed coffee.", name: "Americano", price: 50, liked: false },
    { id: 2, image: "/imagesForMenu/cookiesForMenu.jpg", text: "Creamy milkshake with chocolate.", name: "Chocolate Milkshake", price: 70, liked: false },
    { id: 3, image: "/imagesForMenu/pastryForMenu.jpg", text: "Refreshing iced tea.", name: "Lemon Iced Tea", price: 40, liked: false },
    { id: 4, image: "/imagesForMenu/PandecocoForMenu.jpg", text: "Classic hot chocolate.", name: "Hot Chocolate", price: 55, liked: false },
    { id: 5, image: "./imagesForMenu/chocolateCake.jpg", text: "Fresh orange juice.", name: "Orange Juice", price: 45, liked: false },
    { id: 6, image: "/imagesForMenu/pastryForMenu.jpg", text: "Iced coffee with milk.", name: "Iced Latte", price: 60, liked: false },
    { id: 7, image: "/imagesForMenu/cookiesForMenu.jpg", text: "Refreshing smoothie.", name: "Strawberry Smoothie", price: 65, liked: false },
  ],
};

export default menuData;

