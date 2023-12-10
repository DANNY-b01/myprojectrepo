import React from "react"


export const gadgetsProducts=[
  {
    id: 1,
    brand: 'Apple',
    category: 'Ios13',
    releaseYear: 2021,
    processor: 'Apple A15 Bionic',
    price:500,
    ram: '6GB',
    description:[

  "Experience the cutting-edge technology with the latest iPhone.",
  "Unleash the power of innovation with our sleek and stylish iPhone.",
  "Elevate your mobile experience with the incredible features of the iPhone.",
  "Discover a new level of performance and sophistication with the iPhone series.",
  "Stay connected in style with the iconic design and advanced capabilities of the iPhone.",
  "Embark on a journey of possibilities with the remarkable iPhone in your hands.",
  "Revolutionize your daily routine with the seamless integration of technology in the iPhone.",
  "Immerse yourself in a world of seamless connectivity and unmatched performance with the iPhone.",
  "Experience the future of mobile communication with the unparalleled features of the iPhone.",
  "Stay ahead of the curve with the powerful and innovative iPhone at your fingertips.",

    ]
  },
  {
    id: 2,
    brand: 'Apple',
    category: 'Ios14',
    releaseYear: 2021,
    processor: 'Apple A15 Bionic',
    batterylife:'300mah',
    price:600,
    ram: '6GB',
    description:[
  "Experience the cutting-edge technology with the latest iPhone.",
  "Unleash the power of innovation with our sleek and stylish iPhone.",
  "Elevate your mobile experience with the incredible features of the iPhone.",
  "Discover a new level of performance and sophistication with the iPhone series.",
  "Stay connected in style with the iconic design and advanced capabilities of the iPhone.",
  "Embark on a journey of possibilities with the remarkable iPhone in your hands.",
  "Revolutionize your daily routine with the seamless integration of technology in the iPhone.",
  "Immerse yourself in a world of seamless connectivity and unmatched performance with the iPhone.",
  "Experience the future of mobile communication with the unparalleled features of the iPhone.",
  "Stay ahead of the curve with the powerful and innovative iPhone at your fingertips.",

    ]
  },
  {
    id: 3,
    brand: 'Apple',
    category: 'Ios',
    releaseYear: 2023,
    processor: 'Apple A15 Bionic',
    batterylife:'200mah',
    ram: '6GB',
    price:400,
    description:[
  "Experience the cutting-edge technology with the latest iPhone.",
  "Unleash the power of innovation with our sleek and stylish iPhone.",
  "Elevate your mobile experience with the incredible features of the iPhone.",
  "Discover a new level of performance and sophistication with the iPhone series.",
  "Stay connected in style with the iconic design and advanced capabilities of the iPhone.",
  "Embark on a journey of possibilities with the remarkable iPhone in your hands.",
  "Revolutionize your daily routine with the seamless integration of technology in the iPhone.",
  "Immerse yourself in a world of seamless connectivity and unmatched performance with the iPhone.",
  "Experience the future of mobile communication with the unparalleled features of the iPhone.",
  "Stay ahead of the curve with the powerful and innovative iPhone at your fingertips.",

    ]
  },
  {
    id: 4,
    brand: 'Apple',
    category: 'Ios',
    releaseYear: 2023,
    processor: 'Apple A15 Bionic',
    batterylife:'200mah',
    price:300,
    ram: '6GB',
    price:'$899',
    description:[
  "Experience the cutting-edge technology with the latest iPhone.",
  "Unleash the power of innovation with our sleek and stylish iPhone.",
  "Elevate your mobile experience with the incredible features of the iPhone.",
  "Discover a new level of performance and sophistication with the iPhone series.",
  "Stay connected in style with the iconic design and advanced capabilities of the iPhone.",
  "Embark on a journey of possibilities with the remarkable iPhone in your hands.",
  "Revolutionize your daily routine with the seamless integration of technology in the iPhone.",
  "Immerse yourself in a world of seamless connectivity and unmatched performance with the iPhone.",
  "Experience the future of mobile communication with the unparalleled features of the iPhone.",
  "Stay ahead of the curve with the powerful and innovative iPhone at your fingertips.",

  ]
  },
  {
    id: 5,
    brand: 'Samsung',
    model: 'Galaxy S21',
    releaseYear: 2021,
    category: 'Android',
    processor: 'Exynos 2100',
    ram: '8GB',
    storage: '256GB',
    displaySize: 6.2,
    displayResolution: '1080 x 2400',
    cameraResolution: '12MP',
    batteryCapacity: 4000,
    connectivity: ['5G', 'Wi-Fi', 'Bluetooth'],
    price: 899,
    description:[
    "Experience the power of Android with our latest smartphone. Packed with cutting-edge features and a user-friendly interface.",
  "Unleash your creativity with the versatility of Android. Capture stunning photos, customize your home screen, and explore a world of apps.",
  "Stay connected and productive with the seamless integration of Android. Multitask effortlessly and enjoy a smooth user experience.",
  "Discover the freedom of choice with Android. Personalize your device, choose from a wide range of apps, and make your smartphone truly yours.",
  "Embark on a journey of innovation with our Android-powered device. From advanced camera features to enhanced security, we've got you covered.",


  ]
  },
  {
    id: 6,
    brand: 'Samsung',
    model: 'Galaxy S21',
    releaseYear: 2021,
    category: 'Android',
    processor: 'Exynos 2100',
    ram: '8GB',
    storage: '256GB',
    displaySize: 6.2,
    displayResolution: '1080 x 2400',
    cameraResolution: '12MP',
    batteryCapacity: 4000,
    connectivity: ['5G', 'Wi-Fi', 'Bluetooth'],
    price: 899,
    description:[
      "Experience the power of Android with our latest smartphone. Packed with cutting-edge features and a user-friendly interface.",
  "Unleash your creativity with the versatility of Android. Capture stunning photos, customize your home screen, and explore a world of apps.",
  "Stay connected and productive with the seamless integration of Android. Multitask effortlessly and enjoy a smooth user experience.",
  "Discover the freedom of choice with Android. Personalize your device, choose from a wide range of apps, and make your smartphone truly yours.",
  "Embark on a journey of innovation with our Android-powered device. From advanced camera features to enhanced security, we've got you covered.",

    ]
  },

]


export default function page() {
  const gadgetsGrp = gadgetsProducts.map(gadgets =>(
    <section key={[gadgets.id]} className="flex flex-col place-items-center bg-white">

    </section>




  ))



  return (
    <div>page</div>
  )
}



