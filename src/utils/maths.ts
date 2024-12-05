export function formatPrice(priceToFormat: number | string): string {
  let price = priceToFormat;

  if (!price) return "0,00 €";

  price = replaceFrenchCommaWithDot(price);

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price as number);

  return formattedPrice;
}

export function replaceFrenchCommaWithDot(price: string | number): number {
  if (typeof price === "string") {
    price = parseFloat(price.replace(",", "."));
  }
  return price;
}
