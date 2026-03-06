export const autoShopImages = [
  'auto-shops/auto-repair.jpg',
  'auto-shops/autoshops3104652133909756595.JPG',
  'auto-shops/autoshops5281877298612430683.JPG',
  'auto-shops/autoshops6407821688623785025.JPG',
  'auto-shops/autoshops6618384207628147509.JPG',
  'auto-shops/autoshops6890925011999401846.JPG',
  'auto-shops/autoshops8120471870632426023.JPG',
  'auto-shops/repair-vehicle.jpg',
  'auto-shops/track-repairs.PNG'
]

// ── Inventory ────────────────────────────────────────────────────────────────
// To update a listing: edit make, model, price, transmission, fuel, or images[].
// Add more image filenames to the images[] array to show them in the gallery.
// year and mileage are stored here but not displayed on the site.
export const carInventory = [
  {
    id: 1,
    year: 2016,
    make: 'Jeep',
    model: 'Grand Cherokee',
    price: 20995,
    mileage: 88000,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    images: [
      'cars-for-sale/jeep1026958247172777947.JPG',     // side exterior
      'cars-for-sale/jeep1865493801066475566.JPG',     // rear exterior
      'cars-for-sale/jeep21541848284986031.JPG',       // interior front seats
      'cars-for-sale/jeep7588293553951989338.JPG',     // center console
    ]
  },
  {
    id: 2,
    year: 2017,
    make: 'Chevrolet',
    model: 'Avalanche',
    price: 14995,
    mileage: 67000,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    images: [
      'cars-for-sale/chevrolet1208224677440572888.JPG',  // front exterior
      'cars-for-sale/chevrolet5521584964152571061.JPG',  // 3/4 rear exterior
      'cars-for-sale/chevrolet2322472195217940821.JPG',  // side (Avalanche badge)
      'cars-for-sale/chevrolet2929339050897620483.JPG',  // front grille close-up
      'cars-for-sale/chevrolet7631123642279906894.JPG',  // rear exterior
      'cars-for-sale/chevrolet3966583252772205399.JPG',  // interior front
    ]
  },
  {
    id: 3,
    year: 2018,
    make: 'Acura',
    model: 'TLX',
    price: 18995,
    mileage: 61000,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    images: [
      'cars-for-sale/acura2832183827579887729.JPG',      // rear exterior (TLX)
      'cars-for-sale/acura3280051179368019980.JPG',      // 3/4 rear exterior
      'cars-for-sale/acura8964207040930232195.JPG',      // rear interior seats
    ]
  },
  {
    id: 4,
    year: 2019,
    make: 'Acura',
    model: 'ILX',
    price: 17495,
    mileage: 52000,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    images: [
      'cars-for-sale/acura149825824518706552.JPG',       // steering wheel / interior
    ]
  },
  {
    id: 5,
    year: 2020,
    make: 'Hyundai',
    model: 'Santa Fe',
    price: 15995,
    mileage: 42000,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    images: [
      'cars-for-sale/hyundai2443313672047889659.JPG',    // front exterior
      'cars-for-sale/hyundai8661275969378370622.JPG',    // side exterior
      'cars-for-sale/hyundai590263878966075745.JPG',     // rear exterior
      'cars-for-sale/hyundai5009672880863571494.JPG',    // dashboard
    ]
  }
]

export const getImageUrl = (imageName) => `/images/${imageName}`
