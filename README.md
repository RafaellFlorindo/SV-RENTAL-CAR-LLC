# SV RENTAL CAR LLC Official Website

Modern luxury private chauffeur & car rental website for **SV RENTAL CAR LLC** based in Scottsdale, Arizona.

---

## 📋 Business Profile Configured
- **Legal Business Name:** SV RENTAL CAR LLC
- **EIN / Tax ID:** 25013531
- **Founder & Executive Driver:** João Victor Gois Dias & Wife (Family Owned)
- **Direct Phone / SMS:** (602) 921-5953
- **Official Address:** 3620 N Miller Rd, Scottsdale, AZ, 85251-4537, Maricopa County, USA
- **Operating Hours:** 24/7 (Flexible by prior reservation)
- **Top Service Areas (AZ):** Scottsdale, Phoenix, Glendale, Tempe, Gilbert & Maricopa County
- **Special Promotion:** 10% OFF for referrals and return bookings
- **Key Services:**
  1. Hourly Charter & Private Chauffeur (Minimum 4h, avg. $500)
  2. Golf Outing & Tournament Transportation (TPC Scottsdale, Troon North, Grayhawk)
  3. Airport Transfers & Translado (PHX Sky Harbor, Scottsdale Airport SDL)
  4. Dedicated Female Chauffeur Option (Motorista mulher)
  5. Executive Rides & Corridas Particulares
  6. Special Events, Weddings & VIP Nightlife

---

## 🔌 GoHighLevel integration

The production form and chat widget are configured in:

- `src/components/GhlFormEmbed.jsx`
- `src/components/GhlChatWidget.jsx`

## 🚀 Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm ci
npm run build
npm run preview -- --host 0.0.0.0
```

Do not serve the repository root with `npx serve .` or `python -m http.server`. The root `index.html` is the Vite development entry and references `/src/main.jsx`. Production hosting must serve the generated `dist` directory.

## EasyPanel deployment

The repository includes a multi-stage `Dockerfile`. EasyPanel detects it automatically when the Build Path points to the repository root.

- Builder: `Dockerfile`
- Dockerfile path: `Dockerfile`
- Target port: `8080`
- Health check path: `/healthz`

The final container serves only the compiled `dist` files through Nginx and includes SPA routing fallback.
