# Infyro Inc. — website

Marketing site for **Infyro Inc.** and its three companies: Infyro Technologies, Infyro Studios and Infyro Construction.
React 18 (Vite) · Tailwind CSS · Framer Motion · React Router · lucide-react.

## Run it

Requires **Node.js 18 or newer** (and npm).

```bash
git clone https://github.com/sroshans025/infyroinc.git
cd infyroinc
npm install       # or: npm ci  (exact versions from package-lock.json)
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # serve the build locally
```

No environment variables are required — the site builds and runs with the defaults. See `.env.example` for optional overrides.

## Routes

| Route | Page |
|---|---|
| `/` | The Infyro Group — logo hero, companies, about, vision & mission, core values, why Infyro, let's work together |
| `/technologies` | About · six pillars · academic training · corporate training · careers (information only, no application form) · contact |
| `/technologies/internships` | Internship intro, **Apply Now** (Google Form) and enquiry |
| `/studios` | About · services · booking (Google Form) · contact |
| `/construction` | About · services · booking (Google Form) · contact |
| `*` | 404 |

Old URLs `/technologies/academic-training`, `/corporate-training`, `/careers`, `/contact` redirect to the matching section
(`?type=` is kept, so `/technologies?type=corporate#contact` pre-selects the enquiry type).

## Where things live

```
src/
├─ data/         all copy and links — edit these, not the JSX
│  ├─ contact.js    phone, email, address, per-company social profiles, form endpoint
│  ├─ links.js      Google Forms: internship application, Studios + Construction booking
│  ├─ footer.js  navigation.js  seo.js  brands.js
│  └─ inc.js  tech.js  studios.js  construction.js   page content
├─ components/   brand (logo) · company (shared company-page sections) · layout (navbar, menus)
│                footer · forms · ui · motion · precision (card + reveal helpers)
├─ assets/images photos per page (royalty-free, Unsplash licence)
├─ pages/        Home, technologies/{Overview,Internships}, Studios, Construction, NotFound
└─ styles/index.css   design tokens and type scale
public/          favicon.svg + PNG icons, site.webmanifest, robots.txt, sitemap.xml
```

## Contact details & forms

- Phone **+91 84389 38918**, email **info@infyroinc.com**, location **Tiruchirappalli, Tamil Nadu, India** — all in `src/data/contact.js`.
- Social profiles are per company (`SOCIAL_BY_BRAND` in `contact.js`); a missing profile is simply hidden.
- **Google Forms** (all open in a new tab; links in `src/data/links.js`):
  - Infyro Studios booking — "Book a Session": https://forms.gle/z8xYyEXaBKS6MbnJA
  - Infyro Construction booking — "Book a Consultation": https://forms.gle/WQgrhodxdmMmFKZS7
  - Internship application — "Apply Now": https://forms.gle/P8rZSQJauwu9E1c49

  To change the booking links without a code change, set `VITE_STUDIOS_GFORM_URL` / `VITE_CONSTRUCTION_GFORM_URL` in Vercel.
- **Careers** is an information section only. Visitors browse the career domains or email the team; there is no application form.
- The three **enquiry forms** POST JSON to [FormSubmit](https://formsubmit.co) (`src/components/forms/submit.js`) and include a hidden spam honeypot.
  **One-time setup:** FormSubmit emails an *Activate Form* link to info@infyroinc.com on the first submission — click it once.
  To use another service (Web3Forms, Formspree, …) set `VITE_FORM_ENDPOINT` or replace `submitEnquiry()`.

## Deploy on Vercel

1. Push to GitHub, then import the repo in Vercel (framework preset **Vite**, install `npm install`, build `npm run build`, output `dist`).
2. Optional: set the variables in `.env.example` (form endpoint, booking Google Form links). Never commit a real `.env` file — `.gitignore` already excludes `.env*` (except `.env.example`), `node_modules` and `dist`.
3. `vercel.json` rewrites every route to `index.html`, so refreshing any page works. (`netlify.toml` / `public/_redirects` do the same on Netlify.)
4. After deploying: submit one test enquiry and activate FormSubmit (see above).

## Still to supply

Your own photography if you want to replace the stock photos
(`src/assets/images/`), legal pages (Privacy, Terms, …), internship programme details (shared on request), an X/Twitter profile, and group-level (Infyro Inc.) social accounts — the group currently shows the Technologies profiles.
Search the code for `TODO` for the full list.
