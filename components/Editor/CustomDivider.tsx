import { Divider } from "@mantine/core";

interface CustomDividerProps {
  variant?: "solid" | "dashed" | "dotted";
  label?: string;
  labelPosition?: "left" | "center" | "right";
}

const CustomDivider: React.FC<CustomDividerProps> = ({
  variant,
  label,
  labelPosition,
}) => {
  return (
    <>
      <Divider
        my="sm"
        variant={variant}
        label={label}
        labelPosition={labelPosition}
      />
    </>
  );
};

export const CustomDividerBlock = {
  component: CustomDivider,
  defaultProps: {
    variant: "solid",
    label: "",
    labelPosition: "",
  },
  inputs: [
    { type: "text", label: "Variant", name: "variant" },
    { type: "text", label: "Label", name: "label" },
    { type: "text", label: "Label Position", name: "labelPosition" },
  ],
};
