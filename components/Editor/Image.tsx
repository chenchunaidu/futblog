import { Image } from "@mantine/core";
import { BlockComponentProps } from "../../types/editor.types";
import { editorStateAtom } from "../../atoms/editor.atom";
import { useRecoilState } from "recoil";

export interface CustomImageProps {
  src?: string;
  alt?: string;
}

const CustomImage: React.FC<BlockComponentProps> = ({ blockId }) => {
  const [block, setBlock] = useRecoilState(editorStateAtom);
  const { props } = block[blockId];
  const { src, alt } = props as CustomImageProps;
  return (
    <Image
      radius="md"
      width="100px"
      height="100px"
      src={src}
      alt={alt}
      withPlaceholder
    />
  );
};

export default CustomImage;
