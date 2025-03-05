import ProductCard from "./ProductCard";
import { Product } from "./BasketContext";

interface ProductListProps {
  products: Product[];
}
const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-evenly   md:justify-between">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="text-center w-full text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
