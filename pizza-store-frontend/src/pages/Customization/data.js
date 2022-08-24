import images from '../../constant';
export const customizeData = {
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
      name: 'veggie'
    },
    {
      id: 2,
      name: ''
    },
    {
      id: 3,
      name: 'meat'
    },
    {
      id: 4,
      name: ''
    },
    {
      id: 5,
      name: 'cheese'
    }
  ],
  doughType: [
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
  baseSauce: [
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
  baseCheese: [
    {
      id: 1,
      name: 'No cheese',
      src: images.homestyle,
      cals: -70
    },
    {
      id: 2,
      name: 'Diary-Free cheese',
      src: images.hothoney,
      cals: 60
    },
    {
      id: 3,
      name: 'Six cheese Base',
      src: images.pestosauce,
      cals: 70
    },
    {
      id: 4,
      name: 'Mozzarella cheese',
      src: images.sweetchili,
      cals: 70
    },
  ],
  toppingSauce: {
    veggie: [
      {
        id: 1,
        name: "Arugula",
        src: images.argulaImg,
        toppingSrc: images.argulaTopping,
        cals: 5,
        price: 0.5
      },
      {
        id: 2,
        name: "Broccoli",
        src: images.broccoliImg,
        toppingSrc: images.broccoliTopping,
        cals: 5,
        price: 0.5
      },
      {
        id: 3,
        name: "Brushchetta",
        src: images.brushchetta,
        toppingSrc: images.argulaTopping,
        cals: 5,
        price: 0.5
      },
      {
        id: 4,
        name: "Fire Roasted Red Peppers",
        src: images.fireroasted,
        toppingSrc: images.fireroastedTopping,
        cals: 5,
        price: 0.5
      },
      {
        id: 5,
        name: "Fresh Mushrooms",
        src: images.freshmushrooms,
        toppingSrc: images.freshTopping,
        cals: 5,
        price: 0.5
      },
      {
        id: 6,
        name: "Green Olives",
        src: images.greenolives,
        toppingSrc: images.greenoliveTopping,
        cals: 10,
        price: 0.5
      },
      {
        id: 7,
        name: "Green Peppers",
        src: images.greenpeppers,
        toppingSrc: images.greenpeppersTopping,
        cals: 5,
        price: 0.5
      },
      {
        id: 8.,
        name: "Hot Banana Peppers",
        toppingSrc: images.hotbananaTopping,
        src: images.hotbanana,
        cals: 5,
        price: 0.5
      },
      {
        id: 9,
        name: "Jalapeno Peppers",
        src: images.jalapenopeppers,
        toppingSrc: images.jalapenoTopping,
        cals: 5,
        price: 0.5
      },
      {
        id: 10,
        name: "Kalamata Olives",
        src: images.kalamataolives,
        toppingSrc: images.kalamataTopping,
        cals: 0,
        price: 0.5
      },
      {
        id: 11,
        name: "Pineapple",
        src: images.pineappleImg,
        toppingSrc: images.pineappleTopping,
        cals: 5,
        price: 0.5
      },
      {
        id: 12,
        name: "Plant-Based Chorizo Crumble",
        src: images.plantbasedchorizo,
        toppingSrc: images.plantchorizoTopping,
        cals: 15,
        price: 0.5
      },
      {
        id: 13,
        name: "Plant-Based Pepperoni",
        src: images.plantbasedpepperoni,
        toppingSrc: images.plantpepperoniTopping,
        cals: 20,
        price: 0.5
      },
      {
        id: 14,
        name: "Red Onions",
        src: images.redonions,
        toppingSrc: images.redTopping,
        cals: 5,
        price: 0.5
      },
      {
        id: 15,
        name: "Roasted Garlic",
        src: images.roastedgarlic,
        toppingSrc: images.roastedTopping,
        cals: 5,
        price: 0.5
      },
      {
        id: 16,
        name: "Roma Tomatoes",
        src: images.romatomatoes,
        toppingSrc: images.romaTopping,
        cals: 5,
        price: 0.5
      },
      {
        id: 17,
        name: "Spinach",
        src: images.spinachImg,
        toppingSrc: images.spinachTopping,
        cals: 5,
        price: 0.5
      },
      {
        id: 18,
        name: "Sun-Dried Tomatoes",
        src: images.sundriedImg,
        toppingSrc: images.sundriedTopping,
        cals: 0,
        price: 0.5
      },
    ],
    meat: [
      {
        id: 19,
        name: "Anchovies",
        src: images.anchoviesImg,
        toppingSrc: images.anchoviesTopping,
        cals: 5,
        price: 0.5,
      },
      {
        id: 20,
        name: "Bacon Crumble",
        src: images.baconcrumble,
        toppingSrc: images.baconcrumbleTopping,
        cals: 20,
        price: 0.5,
      },
      {
        id: 21,
        name: "Bacon Strips",
        src: images.baconstrips,
        toppingSrc: images.baconstripsTopping,
        cals: 20,
        price: 0.5,
      },
      {
        id: 22,
        name: "Butter Chicken",
        src: images.butterchickentmeat,
        toppingSrc: images.butterTopping,
        cals: 60,
        price: 0.5,
      },
      {
        id: 23,
        name: "Chicken Shawarma",
        src: images.chickenshawarma,
        toppingSrc: images.chickenTopping,
        cals: 60,
        price: 0.5,
      },
      {
        id: 24,
        name: "Donair",
        src: images.donairmeat,
        toppingSrc: images.donairTopping,
        cals: 0,
        price: 0.5,
      },
      {
        id: 25,
        name: "Grilled Chicken",
        src: images.grilledchicken,
        toppingSrc: images.grilledTopping,
        cals: 15,
        price: 0.5,
      },
      {
        id: 26,
        name: "Ground Beef",
        src: images.groundbeef,
        toppingSrc: images.groundTopping,
        cals: 25,
        price: 0.5,
      },
      {
        id: 27,
        name: "Italian Ham",
        src: images.italianham,
        toppingSrc: images.hamTopping,
        cals: 5,
        price: 0.5,
      },
      {
        id: 28,
        name: "Proscuitto",
        src: images.proscuittoImg,
        toppingSrc: images.proscuittoTopping,
        cals: 15,
        price: 0.5,
      },
      {
        id: 29,
        name: "Salami",
        src: images.salamiImg,
        toppingSrc: images.salamiTopping,
        cals: 10,
        price: 0.5,
      },
      {
        id: 30,
        name: "Spicy Italian Sausage",
        src: images.spicysausage,
        toppingSrc: images.spicyTopping,
        cals: 5,
        price: 0.5,
      },
      {
        id: 31,
        name: "New York Style Pepperoni",
        src: images.pepperoniImg,
        toppingSrc: images.newyorkTopping,
        cals: 25,
        price: 0.5,
      },
    ],
    cheese: [
      {
        id: 32,
        name: "Extra cheese",
        src: images.excheese,
        toppingSrc: images.extracheeseTopping,
        cals: 10
      },
      {
        id: 33,
        name: "Extra Dairy-Free Cheeze",
        src: images.exdairycheese,
        toppingSrc: images.extracheeseTopping,
        cals: 15
      },
      {
        id: 34,
        name: "Feta cheese",
        src: images.fetacheese,
        toppingSrc: images.fetacheeseTopping,
        cals: 15
      },
      {
        id: 35,
        name: "Six cheese Blend Topping",
        src: images.sixcheese,
        toppingSrc: images.goatcheeseTopping,
        cals: 120
      },
      {
        id: 36,
        name: "Goat cheese",
        src: images.goatcheese,
        toppingSrc: images.newyorkTogoatcheeseToppingpping,
        cals: 10
      },
      {
        id: 37,
        name: "Parmesan cheese",
        src: images.permesancheese,
        toppingSrc: images.pamesanTopping,
        cals: 15
      }
    ],
  },
  extraTopping: [
    {
      id: 1,
      name: "Creamy Garlic Sauce Drizzle",
      src: images.creamygarlic,
      toppingSrc: images.creamygarlic,
      cals: 60,
    },
    {
      id: 2,
      name: "Chili Peppers",
      src: images.chilipeppers,
      toppingSrc: images.broccoliTopping,
      cals: 0,
    },
    {
      id: 3,
      name: "Donair Drizzle",
      src: images.donairdrizzle,
      toppingSrc: images.hothoneydrizzle,
      cals: 10,
    },
    {
      id: 4,
      name: "Hot Honey Drizzle (Extra Charge)",
      src: images.hothoneydrizzle,
      toppingSrc: images.hothoneydrizzle,
      cals: 10,
    },
    {
      id: 5,
      name: "Hot Sauce Drizzle",
      src: images.hotsauce,
      toppingSrc: images.hotsauce,
      cals: 10,
    },
    {
      id: 6,
      name: "Italiano Blend Seasoning",
      src: images.italianoImg,
      toppingSrc: images.argulaTopping,
      cals: 0,
    },
    {
      id: 7,
      name: "Olive Oil",
      src: images.oliveoil,
      toppingSrc: images.argulaTopping,
      cals: 10,
    },
    {
      id: 8,
      name: "Bbq Drizzle",
      src: images.bbqdrizzle,
      toppingSrc: images.bbqdrizzle,
      cals: 10
    },
  ],
  special: [
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