import { productsData } from "./productsData";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default function Home() {
	return <ProductsList products={productsData} />;
}
