import { Button } from "@mantine/core";
import { BlockComponentProps } from "../../types/editor.types";
import { useRecoilState } from "recoil";
import { editorStateAtom } from "../../atoms/editor.atom";

export interface CustomButtonProps {
  label?: string;
}

const CustomButton: React.FC<BlockComponentProps> = ({ blockId }) => {
  const [block, setBlock] = useRecoilState(editorStateAtom);
  const { props } = block[blockId];
  const { label } = props as CustomButtonProps;
  return (
    <Button contentEditable="true" suppressContentEditableWarning={true}>
      {label}
    </Button>
  );
};

export default CustomButton;
