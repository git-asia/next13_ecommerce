import { ProductsList } from "@/ui/organisms/ProductsList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		category: "Accessories",
		name: "Sling",
		price: 2500,
		coverImage: {
			alt: "",
			src: "/product_1.png",
		},
	},
	{
		id: "2",
		category: "Cloths",
		name: "T-shirt",
		price: 25000,
		coverImage: {
			alt: "",
			src: "/product_2.png",
		},
	},
	{
		id: "3",
		category: "Accessories",
		name: "Harness",
		price: 12500,
		coverImage: {
			alt: "",
			src: "/product_3.png",
		},
	},
	{
		id: "4",
		category: "Accessories",
		name: "Rope",
		price: 45000,
		coverImage: {
			alt: "",
			src: "/product_4.png",
		},
	},
];

export default function Home() {
	return (
		<section className="sm-py-10 mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductsList products={products} />
		</section>
	);
}
