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
  maxWidth?: React.CSSProperties["maxWidth"];
  minHeight?: React.CSSProperties["minHeight"];
  fontWeight?: React.CSSProperties["fontWeight"];
  fontSize?: MantineSize;
}

export const CustomBackgroundImage: React.FC<CustomBackgroundImageProps> = ({
  imageUrl = "",
  content = "",
  textColor = "black",
  maxWidth = "300",
  minHeight = "none",
  fontWeight,
  fontSize,
}) => {
  return (
    <Box sx={{ maxWidth }} mx="auto">
      <BackgroundImage src={imageUrl} radius="sm">
        <Center p="md" sx={{ minHeight }}>
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
    maxWidth: 1300,
    fontSize: "md",
    minHeight: "500px",
  },
};
