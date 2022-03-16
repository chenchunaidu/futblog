import { Blockquote } from "@mantine/core";

interface CustomQuoteProps {
  cite?: "string";
  quote?: "string";
}

const CustomQuote: React.FC<CustomQuoteProps> = ({ cite, quote }) => {
  return <Blockquote cite={cite}>{quote}</Blockquote>;
};

export default CustomQuote;

export const CustomQuoteBlock = {
  component: CustomQuote,
  defaultProps: { cite: "", quote: "" },
};
