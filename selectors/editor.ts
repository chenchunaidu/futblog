import { selector } from "recoil";
import { editorState } from "../atoms/editor";

// export const lengthState = selector({
//   key: "lengthState", // unique ID (with respect to other atoms/selectors)
//   get: ({ get }) => {
//     const name = get(editorState);
//     const lengthOfName = name.length;
//     return lengthOfName;
//   },
// });
