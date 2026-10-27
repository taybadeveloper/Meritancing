# Meritancing — Next.js Website

Meritancing marketing website rebuilt in Next.js (App Router), replicating the reference site at https://meritancing.net.

## Tech

- Next.js 16 (App Router, Turbopack)
- React 19
- Plain CSS design system (`app/globals.css`) with CSS custom properties — no UI framework
- `next/font/google`: Inter (headings) + Public Sans (body)

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/features` | Features |
| `/advantages` | Advantages |
| `/faq` | FAQ |
| `/contact` | Contact |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |

## Structure

- `app/` — routes (layout, pages, global styles)
- `components/` — Header, Footer, Hero, SectionHead, CtaBanner, Tabs, ContactForm
- `public/assets/` — hero and about images, favicons

## Commands

```bash
npm run dev     # development server
npm run build   # production build
npm start       # serve production build
```
