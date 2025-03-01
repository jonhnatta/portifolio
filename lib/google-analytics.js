export const GA_TRACKING_ID = 'G-QDZQCCHZ50'; // Substitua pelo seu ID de rastreamento

// Função para enviar eventos de página para o Google Analytics
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Função para enviar eventos personalizados para o Google Analytics
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};