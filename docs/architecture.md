# Futblog architecture

Futblog is a notion like editor for builiding the websites easily [like typedream].

We will be having the basic data structure we will render the ui [website] by recursively going through this data structure

### Data strcuture

```
  block:{
    component:"Row",
    children:[block<Heading1>,block<Heading2>,block<Heading3>],
    props: {"children":"smomethig"}, // check if can removed
    styles:{"color":"red"}
  }

  let rootBlock = [block<Text>,block<Paragraph>,...]

```

we will recursively go through rootBlock until we find children array empty.

### Components

1. Row
2. Columns
3. Text
4. Paragraph
5. Heading 1 - Heading 6
6. Image
7. Video
8. Button
9. Table
10. List
11. Form
