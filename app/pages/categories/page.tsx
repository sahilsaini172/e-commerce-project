import { products } from "@/app/ProductData";

export default function Categories() {
  const Categories = products;

  return (
    <div className="flex flex-col">
      {Categories.map((item, index) => {
        return (
          <div key={item.barcode_id} className="flex items-center">
            <img src={item.product_image} alt="" />
            <p>{item.product_name}</p>
          </div>
        );
      })}
    </div>
  );
}
