const items = [
  "FOOD DETAILS",
  "NUTRITION DETAILS",
  "DISHES DETAILS",
  "MENU DETAILS",
  "USER DETAILS",
];

const properties = [
  [
    {name: 'Name', map: 'name'},
    {name: 'Price', map: 'price'},
    {name: 'Image', map: 'img'},
    {name: 'Link', map: 'url'},
  ],
  [
    {name: 'Name', map: 'name'},
    {name: 'Kcal', map: 'kcal'},
    {name: 'Protein', map: 'protein'},
    {name: 'Lipid', map: 'lipid'},
    {name: 'Glucid', map: 'glucid'}
  ],
  [
    {name: 'Name', map: 'name'},
    {name: 'Image', map: 'img'},
    {name: 'Link', map: 'url'},
    {name: 'Ingredient', map: 'ingredient'},
    {name: 'Price', map: 'price'}
  ],
  [
    {name: 'Name', map: 'name'},
    {name: 'Spcecial', map: 'isSpecial'},
    {name: 'Image', map: 'img'}
  ],
  [
    {name: 'Username', map: 'username'},
    {name: 'Password', map: 'password'},
    {name: 'Email', map: 'email'},
    {name: 'Name', map: 'name'}
  ]
];
export {items, properties};
