import { forwardRef, useId, useState, type ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { FlowbiteColorSelectorTheme } from "./theme";

export type ColorSelectorColor = "default";
export type ColorSelectorSizing = "sm" | "md";

export interface ColorSelectorProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  helperText?: string;
  color?: ColorSelectorColor;
  sizing?: ColorSelectorSizing;
  disabled?: boolean;
  theme?: DeepPartial<FlowbiteColorSelectorTheme>;
}

export const ColorSelector = forwardRef<HTMLInputElement, ColorSelectorProps>(
  (
    {
      label,
      helperText,
      color = "default",
      sizing = "md",
      disabled = false,
      theme: customTheme = {},
      className,
      ...props
    },
    ref,
  ) => {
    const randomId = useId();
    const theme = mergeDeep(getTheme().colorSelector, customTheme);
    const [colorValue, setColorValue] = useState<string>("#000000");

    return (
      <div>
        <div className={twMerge("relative", "z-0")}>
          <div className={twMerge(theme.input.default[sizing], className)} style={{ backgroundColor: colorValue }}>
            <input
              type="color"
              id={props.id ? props.id : "colorSelector" + randomId}
              aria-describedby="color_selector_help"
              className="w-full opacity-0"
              onChange={(e) => setColorValue(e.target.value)}
              data-testid="color-selector"
              disabled={disabled}
              {...props}
              ref={ref}
            />
          </div>
          <label
            htmlFor={props.id ? props.id : "colorSelector" + randomId}
            className={twMerge(theme.label.default[sizing], className)}
          >
            {label}
          </label>
          {helperText && <p className={twMerge(theme.helperText.default[sizing], "mt-1")}>{helperText}</p>}
        </div>
      </div>
    );
  },
);

ColorSelector.displayName = "ColorSelector";
