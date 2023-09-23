import Link from "next/link";

export default function Page2() {
    return <div>
        Page 2
        <br/>
			<Link href="/1" className="text-blue-600">Go to page 1</Link>
        </div>;
  }