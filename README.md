# SV RENTAL CAR LLC — Official Website

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

## 🔌 How to Integrate Your GoHighLevel (GHL) Form & Chat Widget

### 1. Inserting your GoHighLevel Form iFrame:
Open `index.html` and locate the dedicated container:
- **Hero Form Container:** `<div id="ghl-hero-form-slot">`
- **Contact Section Container:** `<div id="ghl-contact-form-slot">`

Simply replace the `<form class="ghl-fallback-form">...</form>` inside either container with your GoHighLevel `<iframe>` embed code.

### 2. Inserting your GoHighLevel Chat Widget:
Open `index.html` and go to the placeholder directly before `</body>`:
```html
<div id="ghl-chat-widget-placeholder">
  <!-- Paste your GHL Chat Widget script tag here -->
</div>
```
Paste your LeadConnector / GoHighLevel chat widget script tag there.

---

## 🚀 How to Preview the Site Locally
Open a terminal in this directory and run:
```bash
# Using Python
python3 -m http.server 8080

# Or using Node.js
npx serve .
```
Then visit `http://localhost:8080` in your web browser.
