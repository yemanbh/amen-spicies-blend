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
1. Put the image in `assets/products/` (for example `shiro.jpg`).
2. In `script.js`, add `image: 'assets/products/shiro.jpg'` to that product.
Products without a photo show a drawn jar.

## Publish later
Upload the whole folder to any static host (Netlify, GitHub Pages, Cloudflare Pages).
