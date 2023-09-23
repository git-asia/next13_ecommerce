import { ServerComponent } from "@/ui/testing/ServerComponent";
import { Tester } from "@/ui/testing/Tester";

export default function TryIt() {
	return (
		<div className="bg-red-700">
			<h1>Try It!</h1>
			<Tester>
				<ServerComponent />
			</Tester>
		</div>
	);
}
