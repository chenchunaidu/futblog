import { Code } from "@mantine/core";

interface CustomInlineCodeProps {
  children?: React.ReactNode;
}

const CustomInlineCode: React.FC<CustomInlineCodeProps> = ({
  children,
  ...props
}) => {
  return <Code {...props}>{children}</Code>;
};

export default CustomInlineCode;

export const CustomInlineCodeBlock = {
  component: CustomInlineCode,
  defaultProps: {
    children: "React.createElement()",
    block: true,
    color: "red",
  },
};
