import { InputWrapper, Input } from "@mantine/core";

function WithLabel() {
  return (
    <InputWrapper
      id="input-demo"
      required
      label="Credit card information"
      description="Please enter your credit card information, we need some money"
      error="Your credit card expired"
      size="lg"
    >
      <Input id="input-demo" placeholder="Your email" />
    </InputWrapper>
  );
}
