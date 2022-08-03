import images from '../../constant';
export const CustomizeData = {
  activeTab: 1,
  activeSubTab: 1,
  tabs: [
    {
      id: 1,
      name: 'Daugh/Sause/Cheese'
    },
    {
      id: 2,
      name: 'Toppings'
    },
    {
      id: 3,
      name: 'Extra Flaviour Toppings'
    },
    {
      id: 4,
      name: 'Special Introduction'
    }
  ],
  
  subTabs: [
    {
      id: 1,
      name: 'Dough'
    },
    {
      id: 2,
      name: ''
    },
    {
      id: 3,
      name: 'Base Sauce'
    },
    {
      id: 4,
      name: ''
    },
    {
      id: 5,
      name: 'Base Cheese'
    }
  ],
  subToppingTabs: [
    {
      id: 1,
      name: 'Veggie'
    },
    {
      id: 2,
      name: ''
    },
    {
      id: 3,
      name: 'Meat'
    },
    {
      id: 4,
      name: ''
    },
    {
      id: 5,
      name: 'Cheese'
    }
  ],
  DoughType: [
    {
      id: 1,
      name: 'Regular Dough',
      src: images.regulardough,
      cals: 140
    },
    {
      id: 2,
      name: 'Regular Thin Crust',
      src: images.regularthin,
      cals: 100
    },
    {
      id: 3,
      name: 'Regular Thick Crust',
      src: images.regularthick,
      cals: 180
    },
    {
      id: 4,
      name: 'Whole Grain Crust',
      src: images.wholegrain,
      cals: 130
    },
    {
      id: 5,
      name: 'Whole Grain Thin Crust',
      src: images.wholegrainthin,
      cals: 90
    },
    {
      id: 6,
      name: 'Whole Grain Thick Crust',
      src: images.wholegrainthin,
      cals: 160
    },
  ],
  BaseSauce: [
    {
      id: 1,
      name: 'No Sauce',
      src: images.nosauce,
      cals: 0
    },
    {
      id: 2,
      name: 'Buffalo Base Sauce (Extra Charge)',
      src: images.buffaloImg,
      cals: 30
    },
    {
      id: 3,
      name: 'Butter Chicken Sauce',
      src: images.butterchicken,
      cals: 60
    },
    {
      id: 4,
      name: 'Creamy Garlic Sauce (Extra Charge)',
      src: images.garlicImg,
      cals: 60
    },
    {
      id: 5,
      name: 'Donair Sauce',
      src: images.donairImg,
      cals: 0
    },
    {
      id: 6,
      name: 'Home Style Italian Tomato Sauce',
      src: images.homestyle,
      cals: 10
    },
    {
      id: 7,
      name: 'Hot Honey Sauce (Extra Sauce)',
      src: images.hothoney,
      cals: 20
    },
    {
      id: 8,
      name: 'Pesto Sauce (Extra Charge)',
      src: images.pestosauce,
      cals: 35
    },
    {
      id: 9,
      name: 'Sweet Chili Thai Sauce (Extra Charge)',
      src: images.sweetchili,
      cals: 25
    },
    {
      id: 10,
      name: 'Sweet Chili Thai Sauce (Extra Charge)',
      src: images.texasbbq,
      cals: 15
    },
  ],
  BaseCheese: [
    {
      id: 1,
      name: 'No Cheese',
      src: images.homestyle,
      cals: -70
    },
    {
      id: 2,
      name: 'Diary-Free Cheese',
      src: images.hothoney,
      cals: 60
    },
    {
      id: 3,
      name: 'Six Cheese Base',
      src: images.pestosauce,
      cals: 70
    },
    {
      id: 4,
      name: 'Mozzarella Cheese',
      src: images.sweetchili,
      cals: 70
    },
  ],
  Veggie: [
    {
      id: 1,
      name: "Arugula",
      src: images.argulaImg,
      ingsrc: images.argulaTopping,
      cals: 5
    },
    {
      id: 2,
      name: "Broccoli",
      src: images.broccoliImg,
      ingsrc: images.broccoliTopping,
      cals: 5
    },
    {
      id: 3,
      name: "Brushchetta",
      src: images.brushchetta,
      ingsrc: images.argulaTopping,
      cals: 5
    },
    {
      id: 4,
      name: "Fire Roasted Red Peppers",
      src: images.fireroasted,
      ingsrc: images.fireroastedTopping,
      cals: 5
    },
    {
      id: 5,
      name: "Fresh Mushrooms",
      src: images.buffaloImg,
      cals: 5
    },
    {
      id: 6,
      name: "Green Olives",
      src: images.greenolives,
      cals: 10
    },
    {
      id: 7,
      name: "Green Peppers",
      src: images.greenpeppers,
      cals: 5
    },
    {
      id: 8.,
      name: "Hot Banana Peppers",
      src: images.hotbanana,
      cals: 5
    },
    {
      id: 9,
      name: "Jalapeno Peppers",
      src: images.jalapenopeppers,
      cals: 5
    },
    {
      id: 10,
      name: "Kalamata Olives",
      src: images.kalamataolives,
      cals: 0
    },
    {
      id: 11,
      name: "Pineapple",
      src: images.pineappleImg,
      cals: 5
    },
    {
      id: 12,
      name: "Plant-Based Chorizo Crumble",
      src: images.plantbasedchorizo,
      cals: 15
    },
    {
      id: 13,
      name: "Plant-Based Pepperoni",
      src: images.plantbasedpepperoni,
      cals: 20
    },
    {
      id: 14,
      name: "Red Onions",
      src: images.redonions,
      cals: 5
    },
    {
      id: 15,
      name: "Roasted Garlic",
      src: images.roastedgarlic,
      cals: 5
    },
    {
      id: 16,
      name: "Roma Tomatoes",
      src: images.romatomatoes,
      cals: 5
    },
    {
      id: 17,
      name: "Spinach",
      src: images.spinachImg,
      cals: 5
    },
    {
      id: 18,
      name: "Sun-Dried Tomatoes",
      src: images.sundriedImg,
      cals: 0
    },
  ],
  Meat: [
    {
      id: 1,
      name: "Anchovies",
      src: images.anchoviesImg,
      cals: 5
    },
    {
      id: 2,
      name: "Bacon Crumble",
      src: images.baconcrumble,
      cals: 20
    },
    {
      id: 3,
      name: "Bacon Strips",
      src: images.baconstrips,
      cals: 20
    },
    {
      id: 4,
      name: "Butter Chicken",
      src: images.butterchickentmeat,
      cals: 60
    },
    {
      id: 5,
      name: "Chicken Shawarma",
      src: images.chickenshawarma,
      cals: 15
    },
    {
      id: 6,
      name: "Donair",
      src: images.donairmeat,
      cals: 0
    },
    {
      id: 7,
      name: "Grilled Chicken",
      src: images.grilledchicken,
      cals: 15
    },
    {
      id: 8,
      name: "Ground Beef",
      src: images.groundbeef,
      cals: 25
    },
    {
      id: 9,
      name: "Italian Ham",
      src: images.italianham,
      cals: 5
    },
    {
      id: 10,
      name: "New York Style Pepperoni",
      src: images.stylepepperoni,
      cals: 30
    },
    {
      id: 11,
      name: "Pepperoni",
      src: images.pepperoniImg,
      cals: 25
    },
    {
      id: 12,
      name: "Proscuitto",
      src: images.proscuittoImg,
      cals: 15
    },
    {
      id: 13,
      name: "Salami",
      src: images.salamiImg,
      cals: 10
    },
    {
      id: 14,
      name: "Spicy Italian Sausage",
      src: images.spicysausage,
      cals: 5
    }
  ],
  Cheese: [
    {
      id: 1,
      name: "Extra Cheese",
      src: images.excheese,
      cals: 10
    },
    {
      id: 2,
      name: "Extra Dairy-Free Cheeze",
      src: images.exdairycheese,
      cals: 15
    },
    {
      id: 3,
      name: "Feta Cheese",
      src: images.fetacheese,
      cals: 15
    },
    {
      id: 4,
      name: "Six Cheese Blend Topping",
      src: images.sixcheese,
      cals: 120
    },
    {
      id: 5,
      name: "Goat Cheese",
      src: images.goatcheese,
      cals: 10
    },
    {
      id: 6,
      name: "Parmesan Cheese",
      src: images.permesancheese,
      cals: 15
    }
  ],
  ExtraTopping: [
    {
      id: 1,
      name: "Creamy Garlic Sauce Drizzle",
      src: images.creamygarlic,
      cals: 60,
    },
    {
      id: 2,
      name: "Chili Peppers",
      src: images.chilipeppers,
      cals: 0,
    },
    {
      id: 3,
      name: "Donair Drizzle",
      src: images.donairdrizzle,
      cals: 10,
    },
    {
      id: 4,
      name: "Hot Honey Drizzle (Extra Charge)",
      src: images.hothoneydrizzle,
      cals: 10,
    },
    {
      id: 5,
      name: "Hot Sauce Drizzle",
      src: images.hotsauce,
      cals: 10,
    },
    {
      id: 6,
      name: "Italiano Blend Seasoning",
      src: images.italianoImg,
      cals: 0,
    },
    {
      id: 7,
      name: "Olive Oil",
      src: images.oliveoil,
      cals: 10,
    },
    {
      id: 8,
      name: "Bbq Drizzle",
      src: images.bbqdrizzle,
      cals: 10
    },
  ],
  Special: [
    {
      id: 1,
      name: "Regular",
      src: images.regularImg,
      cals: 0,
    },
    {
      id: 2,
      name: "Lightly Done",
      src: images.lightImg,
      cals: 0,
    },
    {
      id: 3,
      name: "Well Done",
      src: images.wellImg,
      cals: 0,
    }
  ]
}