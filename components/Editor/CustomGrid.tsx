import React from "react";
import { Grid } from "@mantine/core";
import { Block } from "../../types/editor.types";
import { ComponentMapping } from ".";
import { CustomTextBlock } from "./CustomText";
import type { CustomBlockProps } from "./index";

export interface GridItem {
  span?: number;
  block: Block;
}

export interface CustomGridProps {
  gridItems?: GridItem[];
}

const CustomGrid: React.FC<CustomGridProps> = ({ gridItems = [] }) => {
  if (!gridItems.length) {
    return <div>Add grid items</div>;
  }
  const defaultSpan = 12 / gridItems.length;

  return (
    <Grid>
      {gridItems?.map(({ span = defaultSpan, block }, index) => {
        const { componentName, props = {} } = block || {};
        const { component: Component } = ComponentMapping[componentName] || {};

        if (Component) {
          return (
            <Grid.Col span={span} key={index}>
              <Component {...props} />
            </Grid.Col>
          );
        }
        return null;
      })}
    </Grid>
  );
};

export default CustomGrid;

export const CustomGridBlock: CustomBlockProps = {
  component: CustomGrid,
  defaultProps: {
    gridItems: [
      {
        block: {
          componentName: "Text",
          props: CustomTextBlock.defaultProps,
        },
      },
      {
        block: {
          componentName: "Text",
          props: CustomTextBlock.defaultProps,
        },
      },
    ],
  },
  inputs: [{ type: "grid", name: "gridItems" }],
};
