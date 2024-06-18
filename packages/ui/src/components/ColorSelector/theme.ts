import { createTheme } from "../../helpers/create-theme";

export const colorSelectorTheme = createTheme({
  input: {
    default: {
      sm: "block w-full rounded-lg border-2 border-gray-300 dark:border-gray-600",
      md: "block w-full rounded-xl border-2 border-gray-300 dark:border-gray-600",
    },
  },
  label: {
    default: {
      sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 rounded-lg bg-gray-300 px-2 py-0.5 text-gray-600 dark:bg-gray-600 dark:text-gray-300",
      md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 rounded-xl bg-gray-300 px-2 py-0.5 text-gray-600 dark:bg-gray-600 dark:text-gray-300 ",
    },
  },
  helperText: {
    default: {
      sm: "text-xs",
      md: "text-sm",
    },
  },
});

export type FlowbiteColorSelectorTheme = typeof colorSelectorTheme;
