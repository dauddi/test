import { TestComponent } from "../../components";
import { render } from "@testing-library/react";

describe("TestComponent", () => {
	it("should render correctly", () => {
		const { getByTestId } = render(<TestComponent />);
		expect(getByTestId("test-comp")).toHaveTextContent(
			"This is a test component"
		);
	});
});
