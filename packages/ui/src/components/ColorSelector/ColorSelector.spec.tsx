import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ColorSelector } from "./ColorSelector";

describe("Components / Color Selector", () => {
  describe("Color Selector properties", () => {
    it("should have a label", () => {
      const input = render(<ColorSelector label={"ColorSelector"} />).getByLabelText("ColorSelector");
      expect(input).toBeInTheDocument();
    });
    it("should update the input value correctly", () => {
      const input: HTMLInputElement | null = render(
        <ColorSelector label={"ColorSelector"} defaultValue={"#000000"} />,
      ).getByTestId("color-selector") as HTMLInputElement;
      expect(input.value).toBe("#000000");
    });

    it("should be disabled", () => {
      const input = render(<ColorSelector label={"ColorSelector"} disabled={true} />).getByTestId("color-selector");
      expect(input).toBeDisabled();
    });
  });
});
