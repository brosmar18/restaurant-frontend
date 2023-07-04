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
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    desc: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    desc: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    desc: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    desc: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    desc: 'Gin | Sweet Vermouth | Campari | Orange garnish',
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

export default { breakfast, cocktails, awards };