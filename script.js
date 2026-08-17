const pizzas = [
  ['CHEESE', ['10.45', '13.70', '16.95', '19.90']],
  ['1 TOPPING PIZZA', ['10.45', '13.70', '16.95', '19.90']],
  ['ALL MEAT', ['14.20', '18.85', '23.05', '27.05']],
  ['BBQ CHICKEN', ['11.90', '15.70', '19.40', '22.70']],
  ['DELUXE', ['14.20', '18.85', '23.05', '27.05']],
  ['VEGGIE', ['14.20', '18.80', '23.05', '27.05']],
  ['SWEET HEAT', ['13.99', '17.99', '21.99', '25.99']]
];

const sandwiches = [
  ['B.L.T.', '9.40'], ['HAM & CHEESE', '9.40'], ['MEATBALL & CHEESE', '9.40'],
  ['ROAST BEEF & CHEESE', '9.40'], ['SALAMI & CHEESE', '9.40'], ['TURKEY CLUB', '9.40'],
  ["IMO'S EXTRA SPECIAL", '9.40']
];
const pastas = [['BAKED LASAGNA', '9.95'], ['BAKED SPAGHETTI', '9.40'], ['BAKED MOSTACCIOLI', '9.40']];
const favorites = [
  ['BONELESS WINGS (8)', '10.20'], ['CHICKEN WINGS (8)', '12.35'], ['CHICKEN TENDERS (4)', '8.59'],
  ['TOASTED RAVIOLI (8)', '8.05'], ['MOZZARELLA STICKS (8)', '8.00'], ['PROVEL BITES (16)', '8.00'],
  ['GARLIC CHEESE BREAD', '4.70'], ['BREAD BITES (6)', '4.45'], ["IMO FRIES", '4.45']
];
const salads = [['CAESAR SALAD', '4.95 / 7.30'], ['CHEF SALAD', '6.25 / 9.40'], ['HOUSE SALAD', '4.45 / 6.55'], ['DELUXE SALAD', '5.20 / 8.35']];
const desserts = [['CHEESECAKE', '4.15'], ['CINNIMOS', '4.70'], ['BAKERY BROWNIE', '—'], ['GOOEY BUTTER CAKE', '—']];
const quickSides = [['TOASTED RAVIOLI (24)', '22.80'], ['CHICKEN WINGS (24)', '33.95'], ['BONELESS WINGS (24)', '28.30'], ['FOUNTAIN DRINKS', '2.35+']];
const drinks = [['FOUNTAIN', '2.35 / 2.55'], ['BOTTLED', '2.60 / 3.95']];

const money = value => value === '—' ? value : `$${value}`;
const renderRows = (target, data, className = 'list-row') => {
  document.querySelector(target).innerHTML = data.map(([name, price]) => `<div class="${className}"><span>${name}</span><strong>${money(price)}</strong></div>`).join('');
};

document.querySelector('#pizzaGrid').innerHTML = pizzas.map(([name, prices]) => `<div class="pizza-item"><b>${name}</b>${prices.map(price => `<span>${money(price)}</span>`).join('')}</div>`).join('');
renderRows('#sandwiches', sandwiches);
renderRows('#pastas', pastas);
renderRows('#favorites', favorites);
renderRows('#salads', salads);
renderRows('#desserts', desserts, 'quick-row');
renderRows('#quickSides', quickSides, 'quick-row');
renderRows('#drinks', drinks, 'quick-row');

const pageOne = document.querySelector('#pageOne');
const pageTwo = document.querySelector('#pageTwo');
const label = document.querySelector('#pageLabel');
const message = document.querySelector('#headerMessage');
const params = new URLSearchParams(window.location.search);
let currentPage = params.get('page') === '2' ? 2 : 1;

function showPage(page) {
  currentPage = page;
  pageOne.hidden = page !== 1;
  pageTwo.hidden = page !== 2;
  label.textContent = page === 1 ? 'PIZZA & DEALS • 1 OF 2' : 'PASTA, SANDWICHES & SIDES • 2 OF 2';
  message.textContent = page === 1 ? 'ST. LOUIS STYLE PIZZA' : 'MORE OF WHAT YOU LOVE';
}

showPage(currentPage);

if (!params.has('page')) {
  window.setInterval(() => showPage(currentPage === 1 ? 2 : 1), 15000);
}
