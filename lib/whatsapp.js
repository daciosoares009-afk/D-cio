const WHATSAPP_PHONE = '5511988535276';
const QUOTE_REQUEST_MESSAGE = 'Olá, gostaria de solicitar um orçamento para um projeto.';

export const getWhatsAppUrl = (message = QUOTE_REQUEST_MESSAGE) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
