import React from "react";
import {
  Group,
  InputWrapper,
  useMantineTheme,
  ColorSwatch,
} from "@mantine/core";
import { upperFirst } from "@mantine/hooks";
import { AiOutlineCheck } from "react-icons/ai";

interface ColorControlProps {
  value: string;
  label: string;
  onChange: (value: string) => void;
}

export function ColorControl({
  value,
  label,
  onChange,
  ...others
}: ColorControlProps) {
  const theme = useMantineTheme();
  const colorNames = [
    "white",
    ...Object.keys(theme.colors).map((color) => theme.colors[color][5]),
  ];
  const colors = colorNames.map((color) => (
    <ColorSwatch
      color={color}
      component="button"
      key={color}
      onClick={() => onChange(color)}
      radius="sm"
    >
      {value === color && <AiOutlineCheck style={{ width: 18, height: 18 }} />}
    </ColorSwatch>
  ));

  return (
    <InputWrapper labelElement="div" label={upperFirst(label)} {...others}>
      <Group spacing={2} style={{ marginTop: 5 }}>
        {colors}
      </Group>
    </InputWrapper>
  );
}

ColorControl.initialValue = "blue";
