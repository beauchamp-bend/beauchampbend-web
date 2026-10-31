# Beauchamp Bend — Website

Static site for Beauchamp Bend farm (Williams, CA). Walnuts, eggs, pasture-raised chicken.

## Stack
- Plain HTML / CSS / JS — no build step, no framework
- Deployed via Git to Hostinger (PHP/HTML website type)
- Preview: GitHub Pages + local preview server on kernel-ai

## Structure
```
index.html          Home
store.html          Products + buy buttons
about.html          Farm story
contact.html        Pickup info + contact form
assets/css/style.css
assets/js/main.js
images/             Farm + product photos
_source/content.md  Recovered copy from the old Hostinger site (reference only)
```

## Local preview
```
cd /home/joe/beauchampbend
python3 -m http.server 8088 --bind 0.0.0.0
```
Then open `http://100.89.94.124:8088` over Tailscale.

## Editing
Push to `main` — GitHub Pages rebuilds automatically. Hostinger pulls on deploy.

## Content source
Original site was Hostinger AI Builder (Zyro) in manual mode + Hostinger Ecommerce.
No code export was possible, so all copy and images were scraped and are preserved
in `_source/content.md`.
