export const numberFormat = (value) => {
  const digit = value.replace(/\D/g, '');
  return Number(digit);
};

export const priceFormat = (value) => {
  const price = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value / 100);
  return price;
};
