export const createWhatsAppUrl = (message: string) => {
  const phoneNumber = '96176958065'; // Replace with actual WhatsApp business number
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${getProductContactMessage}`;
};

export const createEmailUrl = (subject: string, body: string) => {
  const email = 'abbas.chd50@gmail.com';
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
};

export const getProductContactMessage = (productName: string) => {
  return `Hi! I'm interested in getting pricing and specifications for ${productName}. Please provide details including:

- Pricing information
- Technical specifications
- Lead times
- Minimum order quantities
- Installation services

Thank you!`;
};

export const getQuoteContactMessage = (productName?: string, quantity?: string) => {
  const baseMessage = "Hi! I'd like to request a quote for sandwich panels.";
  
  if (productName && quantity) {
    return `${baseMessage}

Product: ${productName}
Estimated Quantity: ${quantity}

Please provide:
- Detailed pricing
- Technical specifications
- Lead times
- Installation options

Thank you!`;
  }
  
  return `${baseMessage}

Please contact me to discuss my requirements including:
- Product specifications
- Quantity needed
- Project timeline
- Pricing information

Thank you!`;
};