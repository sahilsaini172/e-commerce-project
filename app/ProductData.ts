export interface Product {
  barcode_id: string;
  product_name: string;
  ingredients: string;
  product_image: string;
  fat_amount: string;
  saturated_fats: string;
  carbohydrate: string;
  sugar: string;
  dietary_fiber: string;
  protein: string;
  salt: string;
  sodium: string;
  alcohol: string;
  is_healthy: string;
}

export const products: Product[] = [
  {
    barcode_id: "0000000000017",
    product_name: "Vitória crackers",
    ingredients: "",
    product_image: "https://static.openfoodfacts.org/images/products/000/000/000/0017/front_fr.4.400.jpg",
    fat_amount: "7",
    saturated_fats: "3.08",
    carbohydrate: "70.1",
    sugar: "15",
    dietary_fiber: "",
    protein: "7.8",
    salt: "1.4",
    sodium: "0.551181102362205",
    alcohol: "",
    is_healthy: "0"
  },
  {
    barcode_id: "0000000000031",
    product_name: "Cacao",
    ingredients: "",
    product_image: "https://static.openfoodfacts.org/images/products/000/000/000/0031/front_fr.3.400.jpg",
    fat_amount: "",
    saturated_fats: "",
    carbohydrate: "",
    sugar: "",
    dietary_fiber: "",
    protein: "",
    salt: "",
    sodium: "",
    alcohol: "",
    is_healthy: "1"
  },
  {
    barcode_id: "00000000001111111111",
    product_name: "Sfiudwx",
    ingredients: "",
    product_image: "",
    fat_amount: "",
    saturated_fats: "",
    carbohydrate: "",
    sugar: "",
    dietary_fiber: "",
    protein: "",
    salt: "",
    sodium: "",
    alcohol: "",
    is_healthy: "1"
  }
  // ...Add more entries as needed
];
