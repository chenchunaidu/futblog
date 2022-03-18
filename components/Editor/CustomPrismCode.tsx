import { Prism } from "@mantine/prism";
import { Language } from "prism-react-renderer";

interface CustomPrismCode {
  children: React.ReactNode;
  language?: Language;
  copyLabel?: string;
  copiedLabel?: string;
  colorScheme?: "dark" | "light";
}

const CustomPrismCode: React.FC<CustomPrismCode> = ({
  children,
  language = "tsx",
  copiedLabel,
  copyLabel,
  colorScheme,
}) => {
  return (
    <div>
      <Prism
        language={language}
        copyLabel={copyLabel}
        copiedLabel={copiedLabel}
        colorScheme={colorScheme}
      >
        {children}
      </Prism>
    </div>
  );
};

export const CustomPrismCodeBlock = {
  component: CustomPrismCode,
  defaultProps: {
    children: "import { Button } from '@mantine/core';",
    language: "tsx",
    copiedLabel: "Code copied to clipboard",
    copyLabel: "Copy code to clipboard",
    colorScheme: "dark",
  },

  inputs: [
    { type: "textarea", label: "Code", name: "children" },
    { type: "text", label: "Language", name: "language" },
    { type: "text", label: "Copied label", name: "copiedLabel" },
    { type: "text", label: "Copy label", name: "copyLabel" },
    { type: "text", label: "Color scheme", name: "colorScheme" },
  ],
};
