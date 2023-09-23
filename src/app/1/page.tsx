import Link from "next/link";
 
export default function Page1() {
	return (
		<div>
			Page 1
            <br/>
			<Link href="/2" prefetch={false} className="text-blue-600">Go to page 2</Link>
		</div>
	);
}