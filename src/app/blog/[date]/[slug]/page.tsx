export default async function BlogPage({
	params: {date, slug},
}: {
	params: { date: string; slug: string };
}) {
	
	return (
		<div>
			<h1>Blog</h1>
			<p>Date: {date}</p>
			<p>Title: {slug}</p>
			
		</div>
	);
}
