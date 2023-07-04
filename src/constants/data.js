import images from './images';

const breakfast = [
  {
    title: 'Breakfast Burrito',
    price: '$8.99',
    desc: 'Eggs, cheese & refried beans, your choice of meat and/or veggies',
  },
  {
    title: 'Egg & Cheese Sandwhich',
    price: '$6.99',
    desc: 'Your choice of bread: white, wheat, sourdough, croissant, or gluten-free',
  },
  {
    title: 'Mother Eartch: Bowl/Wrap/Omelette',
    price: '$8.99',
    desc: 'Eggs, green peppers, onions, mushcrooms, celery & cheese',
  },
  {
    title: 'Aesops: Bowl/Wrap/Omelette',
    price: '$8.99',
    desc: 'Eggs, hummus, feta cheese, cucumbers, sprouts, bell peppers, artichoke hearts & onions.',
  },
  {
    title: 'Paleo: Bowl/Wrap/Omelette',
    price: '$8.99',
    desc: 'Eggs, ham, sausage, green pepper & onion',
  },
  {
    title: 'Biscuits & Gravy',
    price: '$3.99',
    desc: 'One or Two Biscuit option',
  },
  {
    title: 'Egg & Cheese Biscuit',
    price: '$3.99',
    desc: 'Add bacon or sausage',
  },
  {
    title: 'Pancakes',
    price: '$5.99',
    desc: 'Two pancakes. Add chocolate chips, or blueberries',
  },
  {
    title: 'Quiche of the day',
    price: '$6.99',
    desc: 'Homemade quiche',
  }
];

const lunch = [
  {
    title: 'Curry Chicken Sandwhich',
    price: '$8.99',
    desc: 'Curry mayo chicken salad on a croissant',
  },
  {
    title: "Turkey Confetta Sandwhich",
    price: '$8.99',
    desc: 'Turkey, cranberry & feta cheese',
  },
  {
    title: 'BBQ Pulled Pork Sliders',
    price: '$8.99',
    desc: '2 BBQ pulled pork & sauce on rolls',
  },
  {
    title: 'Mango Chutney Salami Sanwhich',
    price: '$8.99',
    desc: 'Ham, salami, mango chutney & goat cheese',
  },
  {
    title: 'Veggie Melt',
    price: '$8.99',
    desc: 'Hummus, sautted veggies & white cheddar',
  },
  {
    title: 'Medeteranian wrap',
    price: '$8.99',
    desc: 'Hummus, quinoa, mixed greens, cucumber, feta cheese, olives, onion & golden raisans.',
  },
  {
    title: 'Classic BLT',
    price: '$8.99',
    desc: 'Bacon, lettuce & tomato',
  },
  {
    title: 'Burger',
    price: '$8.99',
    desc: 'Lettuce, Tomato, Onion & Cheese on a Pretzel Bun with Chips. Add bacon.',
  },
  {
    title: 'Salads',
    price: '$5.99',
    desc: 'Mediterranean and Chef salad options.',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { breakfast, lunch, awards };