export const LASTLINK_CONFIG = {
  checkout: {
    manual: "https://lastlink.com/p/CE3FF59AF/checkout-payment",
  },
  upsells: {
    cofre: {
      id: "llupsell-C19D49E94-",
      price: 197,
      denyRedirect: "/ajuda-urgente",
      acceptRedirect: "/upsell-2",
    },
    sos: {
      id: "llupsell-C2A0081BB-",
      price: 47,
      denyRedirect: "/upsell-2",
      acceptRedirect: "/upsell-2",
    },
    circulo: {
      id: "llupsell-C4CBE2E6A-",
      price: 297,
      denyRedirect: "/downsell-2",
      acceptRedirect: "/painel",
    },
    cozinha: {
      id: "llupsell-C6B563AA2-",
      price: 27,
      denyRedirect: "/painel",
      acceptRedirect: "/painel",
    },
  },
  scripts: {
    upsell: "https://cdn.lastlink.com/upsell.min.js",
  },
  finalDestination: "https://lastlink.com/app/member/dashboardV2",
};
