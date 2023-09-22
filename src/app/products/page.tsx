import { productsData } from "../productsData";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default function Products() {
	return (
		<section className="sm-py-10 mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductsList products={productsData} />
		</section>
	);
}
