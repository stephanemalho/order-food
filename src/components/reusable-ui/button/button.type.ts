
export type ButtonVersion = "normal" | "success"

export const enum ButtonLabelEnum {
  ACCESS = "Accéder à mon espace",
  ADD_PRODUCT = "Ajouter un nouveau produit au menu",
  GENERATE = "Générer de nouveaux produits",
  ADD = "Ajouter"
}

export type ButtonStyledProps = {
  version: ButtonVersion
  disabled?: boolean
}