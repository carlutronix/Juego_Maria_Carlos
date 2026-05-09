export const getInitialCards = () => {
  const images = [
    '/images/0283823e-fb0e-44c5-b2ba-6894ef0d6e52.JPG',
    '/images/66187CA2-CBBA-48DA-BEB9-E1F27C17A522.JPG',
    '/images/F68D0648-8C44-4B30-941E-CEA992C9E574.JPG',
    '/images/IMG_2104.jpg',
    '/images/IMG_2835.jpg',
    '/images/IMG_2880.jpg',
    '/images/a3aecca7-01df-4d75-b75e-a35629e8a723.jpg',
    '/images/e0a5ca62-0928-4702-9163-4e2ccc047c98.JPG'
  ];
  
  // Create 8 pairs (16 cards total)
  const deck = [...images, ...images].map((image, index) => ({
    id: index,
    image,
    isFlipped: false,
    isMatched: false
  }));

  // Shuffle randomly
  return deck.sort(() => Math.random() - 0.5);
};
