import { hourlySuv, chauffeurClient, airportJet } from '../assets/photography';

export const fleetData = [
  {
    id: "escalade-suburban",
    type: "suv",
    name: "Cadillac Escalade ESV / Chevrolet Suburban Premier",
    category: "Full-Size Luxury SUV",
    badge: "Most Popular in Scottsdale",
    passengers: "Up to 6 Passengers",
    luggage: "6+ Full Suitcases & Golf Bags",
    description: "The premier choice for Arizona airport arrivals, tournament golf outings, and executive groups. Superior road insulation, cavernous cargo room, and ice-cold tri-zone air conditioning.",
    image: hourlySuv,
    specs: {
      capacity: 6,
      suitcases: 6,
      golfBags: 6,
      driveType: "AWD / 4WD",
      wifi: true
    },
    amenities: [
      "Tri-zone climate control (cabin cooled before entry)",
      "Chilled artisan bottled water & mints",
      "Multi-device USB-C & Lightning fast chargers",
      "Factory privacy tinted glass & sound dampening",
      "Full golf bag cargo capacity",
      "Child safety seats available upon advance request"
    ]
  },
  {
    id: "executive-sedan",
    type: "sedan",
    name: "Mercedes-Benz S-Class / First-Class Executive Sedan",
    category: "VIP Executive Sedan",
    badge: "Discreet Corporate & VIP",
    passengers: "Up to 3 Passengers",
    luggage: "3 Medium Suitcases + Carry-ons",
    description: "Immaculate, whisper-quiet luxury sedan designed for business executives, private dinners, and airport transfers requiring maximum discretion and comfort.",
    image: chauffeurClient,
    specs: {
      capacity: 3,
      suitcases: 3,
      golfBags: 2,
      driveType: "Smooth Air Suspension",
      wifi: true
    },
    amenities: [
      "Ultra-plush leather seating with executive legroom",
      "Acoustic noise-cancelling cabin for confidential calls",
      "Rear climate & reading lights controls",
      "Chilled bottled water & refreshment bar",
      "Fast smartphone charging cables",
      "Professional attired chauffeur with meet & greet"
    ]
  },
  {
    id: "executive-sprinter",
    type: "sprinter",
    name: "Mercedes-Benz Executive Jet Sprinter",
    category: "Luxury Group Chauffeur",
    badge: "Available by Advance Reservation",
    passengers: "Up to 14 Passengers",
    luggage: "14+ Suitcases & Full Golf Sets",
    description: "Built for golf groups attending TPC Scottsdale, corporate retreats, wedding parties, and private Valley excursions needing to travel together in absolute comfort.",
    image: airportJet,
    specs: {
      capacity: 14,
      suitcases: 14,
      golfBags: 14,
      driveType: "Commercial Luxury Spec",
      wifi: true
    },
    amenities: [
      "Stand-up 6'4\" interior headroom and wide aisle",
      "Individual high-back leather captain chairs",
      "Dedicated rear luggage compartment for full golf bags",
      "High-output dual AC systems for hot summer days",
      "Onboard 4K monitors & Bluetooth surround sound",
      "HDMI connection for corporate presentations"
    ]
  }
];
