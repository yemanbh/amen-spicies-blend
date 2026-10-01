/* ============================================================
   EDIT YOUR PRODUCTS HERE
   - price: number in pounds (change CURRENCY below for another currency)
   - image: optional path, e.g. 'assets/products/shiro.jpg'.
            If the file is missing, a drawn jar is shown instead.
   - ingredients: list shown when a customer clicks the product
   ============================================================ */
const CURRENCY = '£';
const WHATSAPP = '251921259074';

const categories = [
  { id: 'blends', name: 'Spice blends', blurb: 'Ready-made blends for stews, meats and vegetables.' },
  { id: 'shiro',  name: 'Shiro',        blurb: 'Smooth chickpea-based powder for everyday shiro wot.' },
  { id: 'flours', name: 'Flours and porridge', blurb: 'Genfo, besso and other staples from the grain store.' },
  { id: 'singles', name: 'Single spices', blurb: 'Whole and ground spices, sold on their own.' }
];

const products = [
  { id: 'berbere', cat: 'blends', name: 'Berbere Spice Blend', price: 8.95, weight: '250 g', tone: '#a83b28',
    image: 'assets/berbere-card.jpeg', fit: 'contain',
    desc: 'The red heart of Ethiopian cooking. Deep heat balanced with garlic, ginger and aromatic herbs.',
    ingredients: ['Ground pepper (berbere)', 'Onions', 'Garlic', 'Ginger', 'Rosemary', 'Cumin', 'Basil', 'Rue', 'Mixed dried spices', 'White cumin', 'Black pepper', 'Cloves', 'Nutmeg', 'Black cumin', 'Long pepper', 'Black cardamom'] },
  { id: 'mitmita', cat: 'blends', name: 'Mitmita', price: 7.95, weight: '200 g', tone: '#8d2c22',
    desc: 'A fiery orange-red blend, traditionally served with kitfo and raw or grilled meats.',
    ingredients: ['Dried bird\u2019s eye chilli', 'Korerima (Ethiopian cardamom)', 'Cloves', 'Salt'], confirm: true },
  { id: 'mekelesha', cat: 'blends', name: 'Mekelesha', price: 7.95, weight: '100 g', tone: '#7e5c3e',
    desc: 'A warm, aromatic finishing blend stirred into wot at the end of cooking.',
    ingredients: ['Cinnamon', 'Cloves', 'Korerima (Ethiopian cardamom)', 'Nutmeg', 'Black pepper'], confirm: true },
  { id: 'alicha', cat: 'blends', name: 'Alicha Blend', price: 7.95, weight: '150 g', tone: '#b18a3f',
    desc: 'A mild, golden blend for alicha wot. All the flavour, no chilli heat.',
    ingredients: ['Turmeric', 'Ginger', 'Garlic', 'Black cumin', 'Cardamom'], confirm: true },

  { id: 'shiro', cat: 'shiro', name: 'Shiro Powder', price: 6.95, weight: '500 g', tone: '#8a6948',
    desc: 'Finely milled chickpea powder seasoned for shiro wot. Whisk into water and simmer.',
    ingredients: ['Roasted chickpea flour', 'Broad bean flour', 'Berbere', 'Garlic', 'Ginger', 'Onion', 'Salt'], confirm: true },
  { id: 'shiro-spicy', cat: 'shiro', name: 'Spicy Shiro (Shiro Tegabino mix)', price: 7.50, weight: '500 g', tone: '#9a5a36',
    desc: 'The same smooth shiro with extra berbere for a hotter pot.',
    ingredients: ['Roasted chickpea flour', 'Berbere', 'Garlic', 'Ginger', 'Fenugreek', 'Salt'], confirm: true },

  { id: 'genfo', cat: 'flours', name: 'Genfo Flour', price: 5.95, weight: '1 kg', tone: '#c2a15e',
    desc: 'Flour for genfo, the thick Ethiopian porridge eaten with spiced butter and berbere.',
    ingredients: ['Barley flour'], confirm: true },
  { id: 'besso', cat: 'flours', name: 'Besso', price: 5.50, weight: '500 g', tone: '#a98a52',
    desc: 'Roasted barley flour. Mix with water, honey or spiced butter for a filling traditional drink or snack.',
    ingredients: ['Roasted barley flour'], confirm: true },
  { id: 'teff', cat: 'flours', name: 'Teff Flour', price: 6.50, weight: '1 kg', tone: '#8c684a',
    desc: 'Whole-grain teff flour, the base of injera.',
    ingredients: ['Teff flour'], confirm: true },

  { id: 'korerima', cat: 'singles', name: 'Korerima (Ethiopian cardamom)', price: 7.50, weight: '50 g', tone: '#735735',
    desc: 'Large aromatic pods with a smoky, camphor-like warmth.',
    ingredients: ['Korerima pods'], confirm: true },
  { id: 'ginger', cat: 'singles', name: 'Ground Ginger', price: 5.50, weight: '100 g', tone: '#b66d3d',
    desc: 'Warm, sharp ground ginger for sauces, tea and spice blends.',
    ingredients: ['Ground ginger'], confirm: true }
];

/* ---------------- no need to edit below ---------------- */
const $ = s => document.querySelector(s);
const money = n => CURRENCY + n.toFixed(2);

function jarSVG(p) {
  const word = p.name.split(' ')[0].toUpperCase();
  return `<div class="jar" style="--tone:${p.tone}"><i></i><b><em>AMEN</em><strong>${word}</strong></b></div>`;
}
function imageHTML(p, cls) {
  if (!p.image) return jarSVG(p);
  return `<img class="${cls} ${p.fit === 'contain' ? 'contain' : ''}" src="${p.image}" alt="${p.name}" loading="lazy"
          onerror="this.outerHTML=this.dataset.fallback" data-fallback='${jarSVG(p).replace(/'/g, '&#39;')}'>`;
}

function render() {
  $('#catNav').innerHTML = categories.map(c => `<a href="#cat-${c.id}">${c.name}</a>`).join('');
  $('#catalog').innerHTML = categories.map(c => {
    const items = products.filter(p => p.cat === c.id);
    return `<section class="category" id="cat-${c.id}">
      <div class="cat-head"><h2>${c.name}</h2><p>${c.blurb}</p></div>
      <div class="grid">${items.map(p => `
        <button class="card" data-id="${p.id}">
          <span class="card-img">${imageHTML(p, 'photo')}</span>
          <span class="card-info"><span class="card-name">${p.name}</span>
          <span class="card-meta"><span>${p.weight}</span><span class="price">${money(p.price)}</span></span></span>
        </button>`).join('')}</div></section>`;
  }).join('');
}

let lastFocus = null;
function openProduct(id) {
  const p = products.find(x => x.id === id);
  lastFocus = document.activeElement;
  $('#mImg').innerHTML = imageHTML(p, 'photo');
  $('#mCat').textContent = categories.find(c => c.id === p.cat).name;
  $('#mTitle').textContent = p.name;
  $('#mPrice').textContent = `${money(p.price)} · ${p.weight}`;
  $('#mDesc').textContent = p.desc;
  $('#mIngredients').innerHTML = p.ingredients.map(i => `<li>${i}</li>`).join('');
  $('#mNote').textContent = p.confirm ? 'Typical recipe. Final ingredients may vary by batch, please check with us if you have allergies.' : 'Please check with us if you have allergies.';
  $('#mOrder').href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hello, I would like to ask about: ' + p.name)}`;
  $('#modal').hidden = false;
  document.body.classList.add('lock');
  $('.modal-close').focus();
}
function closeModal() {
  $('#modal').hidden = true;
  document.body.classList.remove('lock');
  if (lastFocus) lastFocus.focus();
}

$('#catalog').addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (card) openProduct(card.dataset.id);
});
$('#modal').addEventListener('click', e => { if (e.target.closest('[data-close]')) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !$('#modal').hidden) closeModal(); });

render();
