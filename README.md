# Amen Spice Blend: product catalogue website

A simple website listing products by category with prices. Clicking a product opens its ingredients.
No shopping cart: customers contact you on WhatsApp.

## Run it on your computer
**Easiest:** double-click `index.html`. It opens in your browser. Nothing to install.

**Optional local server** (if you have Python): open a terminal in this folder and run
`python -m http.server 8000`, then visit http://localhost:8000

## Edit products and prices
Open `script.js` in Notepad or VS Code. The product list is at the top. Change names, prices,
weights and ingredients, save, then refresh the browser.

## Add product photos
Name the photo after the product id and put it in `assets/products/`. It appears automatically.
Ids: berbere, mitmita, mekelesha, alicha, shiro, shiro-spicy, genfo, besso, atmit, teff, korerima, ginger.
Example: `besso.jpg`. jpg, jpeg, png and webp all work. Products without a photo show the Amen logo.

## Publish later
Upload the whole folder to any static host (Netlify, GitHub Pages, Cloudflare Pages).
