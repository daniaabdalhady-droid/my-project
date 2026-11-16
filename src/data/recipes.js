<<<<<<< HEAD

const recipes = [
  {
    id: 1,
    slug: 'donuts',
    name: 'Classic Donuts',
    tagline: 'Soft & Sweet',
    image: '/images/do.jpeg',
    category: 'Baked',
    season: 'Winter',
    prepTime: 35,
    description: 'Soft homemade donuts finished with a light, sweet glaze.',
    ingredients: ['2 cups flour', '2 tablespoons sugar', '1 teaspoon yeast', '3/4 cup warm milk', '1 egg', '2 tablespoons butter'],
    steps: ['Mix the flour, sugar, and yeast.', 'Add milk, egg, and butter.', 'Knead until the dough becomes soft.', 'Let the dough rise.', 'Shape the donuts and bake until golden.']
  },
  {
    id: 2,
    slug: 'cupcakes',
    name: 'Vanilla Cupcakes',
    tagline: 'Sweet Little Treats',
    image: '/images/v.jpeg',
    category: 'Baked',
    season: 'All Seasons',
    prepTime: 30,
    description: 'Fluffy vanilla cupcakes with creamy frosting.',
    ingredients: ['1 cup flour', '1/2 cup sugar', '1 egg', '1/2 cup milk', '1 teaspoon vanilla', '1 teaspoon baking powder'],
    steps: ['Mix the dry ingredients.', 'Add egg, milk, and vanilla.', 'Pour into cupcake liners.', 'Bake until cooked through.', 'Let cool before decorating.']
  },
  {
    id: 3,
    slug: 'cake',
    name: 'Strawberry Cake',
    tagline: 'Fresh & Creamy',
    image: '/images/stt.jpeg',
    category: 'Cold',
    season: 'Summer',
    prepTime: 50,
    description: 'A soft cake layered with fresh strawberry flavor and cream.',
    ingredients: ['2 cups flour', '3/4 cup sugar', '2 eggs', '1/2 cup milk', '1 teaspoon baking powder', 'Fresh strawberries'],
    steps: ['Mix the flour and baking powder.', 'Whisk eggs and sugar.', 'Add milk and combine.', 'Bake until cooked through.', 'Cool and decorate with strawberries.']
  },
  {
    id: 4,
    slug: 'cookies',
    name: 'Chocolate Cookies',
    tagline: 'Crunchy & Delicious',
    image:'/images/cok.jpeg',
    category: 'Baked',
    season: 'Winter',
    prepTime: 25,
    description: 'Delicious golden cookies filled with chocolate chips.',
    ingredients: ['1 cup flour', '1/2 cup butter', '1/2 cup sugar', '1 egg', 'Chocolate chips', '1/2 teaspoon baking soda'],
    steps: ['Mix butter and sugar.', 'Add the egg.', 'Add flour and baking soda.', 'Fold in chocolate chips.', 'Bake until the edges are golden.']
  },
  {
    id: 5,
    slug: 'pancakes',
    name: 'Mini Pancakes',
    tagline: 'Perfect Breakfast',
    image: '/images/pan.jpeg',
    category: 'Warm',
    season: 'Winter',
    prepTime: 20,
    description: 'Small fluffy pancakes for a cozy sweet breakfast.',
    ingredients: ['1 cup flour', '1 egg', '3/4 cup milk', '1 tablespoon sugar', '1 teaspoon baking powder'],
    steps: ['Mix all ingredients until smooth.', 'Heat a lightly greased pan.', 'Pour small portions of batter.', 'Cook both sides until golden.', 'Serve with your favorite topping.']
  },
  {
    id: 6,
    slug: 'brownies',
    name: 'Chocolate Brownies',
    tagline: 'Rich & Fudgy',
    image: '/images/bra.jpeg',
    category: 'Warm',
    season: 'Winter',
    prepTime: 40,
    description: 'Rich chocolate brownies with a soft, fudgy center.',
    ingredients: ['1/2 cup butter', '1 cup sugar', '2 eggs', '1/3 cup cocoa powder', '1/2 cup flour'],
    steps: ['Melt the butter.', 'Mix with sugar and eggs.', 'Add cocoa and flour.', 'Pour into a baking pan.', 'Bake until set and let cool.']
  },
  {
    id: 7,
    slug: 'waffles',
    name: 'Golden Waffles',
    tagline: 'Crispy & Fluffy',
    image: '/images/waf.jpeg',
    category: 'Warm',
    season: 'All Seasons',
    prepTime: 22,
    description: 'Crispy waffles with a soft center, perfect with fruit.',
    ingredients: ['1 cup flour', '1 egg', '3/4 cup milk', '2 tablespoons melted butter', '1 teaspoon baking powder'],
    steps: ['Mix the dry ingredients.', 'Add egg, milk, and butter.', 'Whisk until smooth.', 'Cook in a waffle maker.', 'Serve warm.']
  },
  {
    id: 8,
    slug: 'macarons',
    name: 'Sweet Macarons',
    tagline: 'Colorful Bites',
    image: '/images/mac.jpeg',
    category: 'Cold',
    season: 'Summer',
    prepTime: 65,
    description: 'Delicate colorful French-inspired treats with a sweet filling.',
    ingredients: ['1 cup almond flour', '1 cup powdered sugar', '2 egg whites', '1/4 cup sugar'],
    steps: ['Sift almond flour and powdered sugar.', 'Whisk egg whites and sugar.', 'Fold the dry ingredients into the mixture.', 'Pipe small circles onto a tray.', 'Bake carefully and let cool.']
  },
  {
    id: 9,
    slug: 'pie',
    name: 'Apple Pie',
    tagline: 'Warm & Cozy',
    image: '/images/appl.jpeg',
    category: 'Baked',
    season: 'Winter',
    prepTime: 55,
    description: 'A cozy dessert filled with cinnamon-spiced apples.',
    ingredients: ['2 cups flour', '1/2 cup butter', '3 apples', '1/3 cup sugar', '1 teaspoon cinnamon'],
    steps: ['Prepare the pie dough.', 'Slice the apples.', 'Mix apples with sugar and cinnamon.', 'Fill the pie crust.', 'Bake until golden.']
  },
  {
    id: 10,
    slug: 'tart',
    name: 'Fruit Tart',
    tagline: 'Fresh Fruit Dessert',
    image: '/images/tra.jpeg',
    category: 'Cold',
    season: 'Summer',
    prepTime: 45,
    description: 'A fresh tart topped with colorful seasonal fruits.',
    ingredients: ['1 tart crust', '1 cup custard', 'Strawberries', 'Kiwi', 'Blueberries'],
    steps: ['Prepare and bake the tart crust.', 'Let the crust cool.', 'Fill with custard.', 'Arrange fresh fruits on top.', 'Chill before serving.']
  }
];

export default recipes;
=======
export const recipes = [
  {
    id: 1,
    name: "Cinnamon Rolls",
    category: "Pastries",
    image: "/images/WhatsApp Image 2026-11-10 at 10.51.59 PM.jpeg",
    description: "Soft cinnamon rolls with creamy vanilla icing.",
    time: "45 min",
    servings: "8 rolls",
    ingredients: [
      "3 cups flour",
      "1 cup warm milk",
      "2 tsp yeast",
      "1/2 cup sugar",
      "3 tbsp butter",
      "2 tbsp cinnamon",
      "Vanilla icing for topping"
    ],
    steps: [
      "Mix the yeast with warm milk and a spoon of sugar, and leave for 10 minutes.",
      "Add the flour, butter and the rest of the sugar, then knead for 10 minutes.",
      "Let the dough rise for 1 hour.",
      "Roll the dough, spread butter and cinnamon, then roll it up and cut into rolls.",
      "Bake at 180°C for 25 minutes and top with vanilla icing."
    ]
  },
  {
    id: 2,
    name: "Chocolate Chip Cookies",
    category: "Cookies",
    image: "/images/WhatsApp Image 2026-11-10 at 10.51.59 PM (1).jpeg",
    description: "Freshly baked cookies filled with chocolate chips.",
    time: "25 min",
    servings: "12 cookies",
    ingredients: [
      "2 cups flour",
      "1/2 cup butter, softened",
      "1/2 cup brown sugar",
      "1/4 cup white sugar",
      "1 egg",
      "1 tsp vanilla",
      "1 cup chocolate chips"
    ],
    steps: [
      "Beat the butter with both sugars until creamy.",
      "Add the egg and vanilla and mix well.",
      "Fold in the flour, then the chocolate chips.",
      "Place spoonfuls of dough on a tray.",
      "Bake at 180°C for 10 to 12 minutes until golden."
    ]
  },
  {
    id: 3,
    name: "Brownies",
    category: "Chocolate",
    image: "/images/WhatsApp Image 2026-11-10 at 10.51.59 PM (2).jpeg",
    description: "Rich and fudgy chocolate brownies.",
    time: "40 min",
    servings: "12 squares",
    ingredients: [
      "1/2 cup butter",
      "200 g dark chocolate",
      "3/4 cup sugar",
      "2 eggs",
      "1/2 cup flour",
      "2 tbsp cocoa powder"
    ],
    steps: [
      "Melt the butter with the chocolate and let it cool a little.",
      "Whisk in the sugar and the eggs.",
      "Fold in the flour and cocoa until just combined.",
      "Pour into a lined pan.",
      "Bake at 175°C for 25 minutes and let it cool before cutting."
    ]
  },
  {
    id: 4,
    name: "Cheesecake",
    category: "Cakes",
    image: "/images/WhatsApp Image 2026-11-10 at 10.52.00 PM.jpeg",
    description: "Creamy cheesecake with a buttery biscuit base.",
    time: "1 hour + chilling",
    servings: "10 slices",
    ingredients: [
      "200 g biscuits, crushed",
      "100 g melted butter",
      "500 g cream cheese",
      "3/4 cup sugar",
      "3 eggs",
      "1 tsp vanilla"
    ],
    steps: [
      "Mix the crushed biscuits with the melted butter and press into a pan.",
      "Beat the cream cheese with the sugar until smooth.",
      "Add the eggs and vanilla and mix gently.",
      "Pour over the base.",
      "Bake at 160°C for 45 minutes, then chill for 4 hours."
    ]
  },
  {
    id: 5,
    name: "Donuts",
    category: "Pastries",
    image: "/images/WhatsApp Image 2026-11-10 at 10.52.01 PM.jpeg",
    description: "Soft homemade donuts with delicious toppings.",
    time: "1 hour 30 min",
    servings: "10 donuts",
    ingredients: [
      "3 cups flour",
      "3/4 cup warm milk",
      "1/3 cup sugar",
      "2 tsp yeast",
      "2 tbsp butter",
      "1 egg",
      "Oil for frying",
      "Melted chocolate for topping"
    ],
    steps: [
      "Mix the milk, sugar and yeast, and leave for 10 minutes.",
      "Add the egg, butter and flour, then knead until soft.",
      "Cover the dough and let it rise for 1 hour.",
      "Roll the dough, cut rings, and let them rest for 15 minutes.",
      "Fry in hot oil until golden on both sides.",
      "Dip in melted chocolate and add your toppings."
    ]
  },
];
>>>>>>> 5615c084278431165ae0f638a441c7096a582028
