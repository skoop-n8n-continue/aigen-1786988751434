const pizza = [
  ['CHEESE', '$10.45', '$13.70', '$16.95', '$19.90'],
  ['1 TOPPING PIZZA', '$10.45', '$13.70', '$16.95', '$19.90'],
  ['ALL MEAT', '$14.20', '$18.85', '$23.05', '$27.05'],
  ['DELUXE', '$14.20', '$18.85', '$23.05', '$27.05'],
  ['VEGGIE', '$14.20', '$18.80', '$23.05', '$27.05'],
  ['BBQ CHICKEN', '$11.90', '$15.70', '$19.40', '$22.70'],
  ['SWEET HEAT', '$13.99', '$17.99', '$21.99', '$25.99']
];
const sandwiches = [
  ['B.L.T.', '$9.40'], ['HAM & CHEESE', '$9.40'], ['MEATBALL & CHEESE', '$9.40'],
  ['SALAMI & CHEESE', '$9.40'], ['TURKEY CLUB', '$9.40'], ['ROAST BEEF & CHEESE', '$9.40'],
  ['CRISPY CHICKEN CLUB', '$9.40']
];
const sides = [
  ['IMO FRIES', '$4.45'], ['GARLIC CHEESE BREAD', '$4.70'], ['BREAD BITES', '$4.45'],
  ['TOASTED RAVIOLI', '$8.05', '(8)'], ['MOZZARELLA STICKS', '$8.00', '(8)'],
  ['PROVEL BITES', '$8.00'], ['CINNIMOS', '$4.70']
];
const salads = [['HOUSE', '$4.45', '$6.55'], ['CAESAR', '$4.95', '$7.30'], ['CHEF', '$6.25', '$9.40'], ['DELUXE', '$5.20', '$8.35']];
const drinks = [['FOUNTAIN', '$2.35', '$2.55'], ['BOTTLED', '$2.60', '$3.95']];
const title = document.querySelector('#page-title');
const copy = document.querySelector('#page-copy');
const content = document.querySelector('#menu-content');
const number = document.querySelector('#page-number');

function item(name, price, note = '', sizes = '') {
  return `<div class="menu-item"><div class="item-name">${name}${note ? `<span class="badge">${note}</span>` : ''}${sizes ? `<span class="item-desc">${sizes}</span>` : ''}</div><div class="item-price">${price}</div></div>`;
}
function category(name, items) { return `<section class="category"><h2 class="category-title">${name}</h2>${items.join('')}</section>`; }
function pizzaItems() { return pizza.map(([name, sm, med, lg, xl]) => `<div class="menu-item pizza-item"><div class="item-name">${name}</div><div class="item-price"><span>${sm}</span><span class="desktop-price"> &nbsp; ${med} &nbsp; ${lg} &nbsp; ${xl}</span></div></div>`); }
function showPage(page) {
  if (page === 2) {
    number.textContent = '02'; title.textContent = 'MORE TO LOVE'; copy.textContent = 'Fresh salads, shareable sides, toasted sandwiches, and something sweet.';
    content.innerHTML = `<div class="menu-column">${category('SANDWICHES', sandwiches.map(x => item(x[0], x[1])))}${category('SALADS', salads.map(x => item(x[0], `${x[1]} / ${x[2]}`, '', 'small / large')))}<div class="callout"><strong>FEED THE CREW</strong><p>Great Tastes of St. Louis • $27.99<br>Square Meal Deal • $27.99</p></div></div><div class="menu-column">${category('SHAREABLES', sides.map(x => item(x[0], x[1], x[2] || '')))}${category('DRINKS', drinks.map(x => item(x[0], `${x[1]} / ${x[2]}`, '', 'small / large')))}${category('SWEET FINISH', [item('CHEESECAKE', '$4.95'), item('BROWNIE', 'ask us'), item('GOOEY BUTTER CAKE', 'ask us')])}</div>`;
  } else {
    number.textContent = '01'; title.textContent = 'PIZZA & FAVORITES'; copy.textContent = 'Provel® cheese. Crisp, cracker-thin crust. Big flavor in every square.';
    content.innerHTML = `<div class="menu-column">${category('PIZZA', pizzaItems())}<div class="size-row">10” &nbsp; 12” &nbsp; 14” &nbsp; 16”</div>${category('ADD-ONS', [item('ADDITIONAL TOPPINGS', '$1.55 / $2.00 / $2.40 / $2.80')])}</div><div class="menu-column"><div class="callout"><strong>BUILD YOUR OWN</strong><p>Start with cheese, then make it yours. Add toppings from $1.55.</p></div>${category('WINGS', [item('CHICKEN WINGS', '$12.35', '(8)'), item('BONELESS WINGS', '$10.20', '(8)')])}${category('PASTA', [item('BAKED LASAGNA', '$9.95'), item('BAKED SPAGHETTI', '$9.40'), item('BAKED MOSTACCIOLI', '$9.40')])}${category('SIDES', sides.slice(0, 3).map(x => item(x[0], x[1])))}</div>`;
  }
  document.querySelectorAll('.page-dots b').forEach((dot, i) => dot.style.opacity = i === page - 1 ? '1' : '.35');
}
const params = new URLSearchParams(location.search);
let page = params.get('page') === '2' ? 2 : 1;
showPage(page);
setInterval(() => { page = page === 1 ? 2 : 1; showPage(page); }, 12000);
