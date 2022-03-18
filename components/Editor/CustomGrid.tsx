import React from "react";
import { Grid } from "@mantine/core";
import { Block } from "../../types/editor.types";
import { BlockComponentMapping } from ".";
import { CustomTextBlock } from "./CustomText";
import type { ComponentBlockProps } from "./index";

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
        const { blockName, props = {} } = block || {};
        const { component: Component } = BlockComponentMapping[blockName] || {};

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

export const CustomGridBlock: ComponentBlockProps = {
  component: CustomGrid,
  defaultProps: {
    gridItems: [
      {
        block: {
          blockName: "Text",
          props: CustomTextBlock.defaultProps,
        },
      },
      {
        block: {
          blockName: "Text",
          props: CustomTextBlock.defaultProps,
        },
      },
    ],
  },
  inputs: [{ type: "grid", name: "gridItems" }],
};
