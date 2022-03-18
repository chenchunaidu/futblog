import {
  BackgroundImage,
  Center,
  Text,
  Box,
  MantineNumberSize,
  DefaultMantineColor,
  MantineSize,
} from "@mantine/core";
import React from "react";

interface CustomBackgroundImageProps {
  size?: MantineNumberSize;
  textColor?: DefaultMantineColor;
  imageUrl?: string;
  content?: string;
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  fontWeight?: React.CSSProperties["fontWeight"];
  fontSize?: MantineSize;
}

export const CustomBackgroundImage: React.FC<CustomBackgroundImageProps> = ({
  imageUrl = "",
  content = "",
  textColor = "black",
  width = "100%",
  height = "100%",
  fontWeight,
  fontSize,
}) => {
  return (
    <Box sx={{ width }} mx="auto">
      <BackgroundImage src={imageUrl} radius="sm">
        <Center p="md" sx={{ height }}>
          <Text color={textColor} weight={fontWeight} size={fontSize}>
            {content}
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
  );
};

export const CustomBackgroundImageBlock = {
  component: CustomBackgroundImage,
  defaultProps: {
    content: `Building large scale applications using react`,
    imageUrl:
      "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777655/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
    textColor: "white",
    fontWeight: "bold",
    width: "100%",
    fontSize: "md",
    height: "500px",
  },
  inputs: [
    { type: "textarea", name: "content", label: "Text" },
    { type: "text", name: "imageUrl", label: "Background image URL" },
    { type: "color", name: "textColor", label: "Text color" },
    { type: "text", name: "width", label: "Width" },
    { type: "fontWeightSelect", label: "Font weight", name: "fontWeight" },
    { type: "fontSizeSelect", label: "Font size", name: "fontSize" },
    { type: "text", name: "height", label: "height" },
  ],
};
