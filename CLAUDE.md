# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Tut Huts RV Park** is a Next.js 15 website for an RV park in Parrish, Alabama. The site features amenities showcase, photo gallery, park information, and integrates with Campspot for bookings.

**Repository:** https://github.com/elberfunez/nextjs/tut-huts

## Development Commands

```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Create production build
npm start        # Run production build
npm run lint     # Run ESLint checks
```

## Tech Stack

- **Framework:** Next.js 15.3 with React 19, TypeScript 5, App Router
- **Styling:** Tailwind CSS 4 with PostCSS
- **Icons:** Lucide React
- **Form Backend:** FormSubmit.co with honeypot spam protection
- **Booking Integration:** Campspot external link

## Project Structure

```
src/app/
├── components/
│   ├── NavBar2.tsx         - Responsive nav with dropdown submenus (client component)
│   ├── Footer.tsx          - Footer with contact & social links
│   └── ContactForm.tsx     - Contact form with Web3Forms/FormSubmit validation
├── layout.tsx              - Root layout wrapping all pages
├── globals.css             - Tailwind imports & global styles
├── page.tsx                - Homepage
├── about/page.tsx
├── amenities/page.tsx
├── contact/page.tsx
├── gallery/page.tsx
├── explore/page.tsx
├── parkmap/page.tsx
├── policies/page.tsx
└── rates/page.tsx

public/images/             - 40+ asset images (logos, photos, gallery)
config.ts                  - Centralized config constants (URLs, contact info, API keys)
```

## Architecture Notes

### Component Patterns
- **Server components by default** - Client-only components marked with `"use client"` (NavBar2, ContactForm)
- **Layout wrapping** - Root layout contains NavBar2 + Footer that wraps all pages
- **Props interfaces** - Interfaces defined inline or in component files

### Type Safety
- TypeScript strict mode enabled
- Path alias `@/*` maps to `./src/*` - use this in all imports
- Proper React typing: `React.ChangeEvent<>`, `React.FormEvent<>`

### Styling
- **Responsive first:** Mobile-first Tailwind design using `sm:`, `md:`, `lg:` breakpoints
- **Primary color:** Teal/turquoise `#31b0b4` for CTAs and accents
- **Dark footer:** Navy `#1A2A44`
- No custom Tailwind config file - uses Tailwind CSS v4 defaults

### Forms
- Contact form uses **FormSubmit.co** backend (not a custom API)
- Client-side validation with error display
- **Honeypot field** for spam protection (hidden in CSS)
- Email validation with regex pattern
- Form component location: `src/app/components/ContactForm.tsx`

### External Services
- **Campspot API key:** Stored in config.ts (hardcoded)
- **Web3Forms access key:** In config.ts but contact form uses FormSubmit.co
- **Facebook link:** Social media integration

### Configuration File
**config.ts** contains:
- `RESERVATION_URL` - Campspot booking link
- `PARK_ADDRESS`, `PARK_PHONE_NUMBER`, `PARK_EMAIL` - Contact details
- `FACEBOOK_URL_LINK` - Social media
- `WEB3FORMS_ACCESSKEY` - Future form integration (currently unused)

## Important Development Notes

1. **Image assets** - All in `/public/images/`. Include alt text for accessibility. Use Next.js Image component for optimization.

2. **Navigation** - NavBar2 has dropdown submenu for "Info" section. Active route detection uses `usePathname()`. Mobile menu toggle at 640px breakpoint.

3. **Responsive design** - Test all pages at mobile (375px), tablet (768px), and desktop (1440px+) widths.

4. **Form submissions** - Contact form currently submits to FormSubmit.co with auto-responses. Web3Forms keys are configured but not integrated.

5. **SEO** - Each page has metadata. Update meta descriptions and open graph tags for new pages.

6. **Page routes** - Uses Next.js App Router. Create new pages as `[slug]/page.tsx` files in `src/app/`.

7. **Accessibility** - All images must have alt text. Use semantic HTML. Form inputs need proper labels and ARIA attributes.
