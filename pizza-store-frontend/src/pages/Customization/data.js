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
      src: images.regulardough,
      cals: 0
    },
    {
      id: 2,
      name: 'Buffalo Base Sauce(Extra Charge)',
      src: images.regularthin,
      cals: 30
    },
    {
      id: 3,
      name: 'Butter Chicken Sauce',
      src: images.regularthick,
      cals: 60
    },
    {
      id: 4,
      name: 'Creamy Garlic Sauce(Extra Charge)',
      src: images.wholegrain,
      cals: 60
    },
    {
      id: 5,
      name: 'Donair Sauce',
      src: images.wholegrainthin,
      cals: 0
    },
    {
      id: 6,
      name: 'Home Style Italian Tomato Sauce',
      src: images.wholegrainthin,
      cals: 10
    },
    {
      id: 7,
      name: 'Hot Honey Sauce(Extra Sauce)',
      src: images.regularthick,
      cals: 20
    },
    {
      id: 8,
      name: 'Pesto Sauce(Extra Charge)',
      src: images.wholegrain,
      cals: 35
    },
    {
      id: 9,
      name: 'Sweet Chili Thai Sauce(Extra Charge)',
      src: images.wholegrainthin,
      cals: 25
    },
    {
      id: 10,
      name: 'Sweet Chili Thai Sauce(Extra Charge)',
      src: images.wholegrainthin,
      cals: 15
    },
  ]
}