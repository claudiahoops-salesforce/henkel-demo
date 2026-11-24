# Henkel Adhesives – home page demo

Static recreation of https://next.henkel-adhesives.com/de/en.html for a Qualified demo.
The Qualified snippet (token `3PyskNYgHdgeY9bC`) is in the `<head>` of `index.html`.

## Run locally
    python3 -m http.server 8000   # then open http://localhost:8000

## Push to GitHub
    git init && git add . && git commit -m "Henkel demo home page"
    git branch -M main
    git remote add origin git@github.com:<your-user>/henkel-adhesives-demo.git
    git push -u origin main

## Host (needed for Qualified to load on a real domain)
Repo Settings > Pages > Deploy from branch `main` / root.
Qualified only fires on domains allowed in your Qualified account settings, so add the Pages domain there.

## Swap in real imagery
Product, industry, lab and support photos are CSS placeholders. Replace the `background` rules in `styles.css`
(`.split__media`, `.about__img`, `.hcard__img`, `.pcard__img`) with image URLs from Henkel's DAM.
