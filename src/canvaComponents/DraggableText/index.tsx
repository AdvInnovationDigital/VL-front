import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import Draggable from "react-draggable";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const EditableText = ({
  text,
  pos,
  style,
  disabledDrag,
}: {
  text?: any;
  pos?: any;
  style?: any;
  disabledDrag?: any;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [editable, setEditable] = useState(false);

  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: text ? text : "Insira seu Texto" }],
    },
  ]);

  useEffect(() => {
    // if (!["", undefined, null].includes(pos)) {
    //   setPosition(pos);
    // }
  }, []);

  const editor = useMemo(() => withReact(createEditor()), []);

  const handleDrag = (e: any, ui: any) => {
    const { x, y } = position;
    setPosition({ x: (x + ui.deltaX) / 2, y: (y + ui.deltaY) / 2 });
  };

  const renderLeaf = useCallback((props: any) => {
    return (
      <span {...props.attributes} style={{}}>
        {props.children}
      </span>
    );
  }, []);

  return (
    <Draggable onDrag={handleDrag} disabled={disabledDrag} bounds={"parent"}>
      <div
        style={{
          position: "absolute",
          top: position.y,
          left: position.x,
        }}
        className="absolute bg-transparent"
        onClick={() => {
          setEditable(true);
        }}
      >
        <Slate
          editor={editor}
          initialValue={value}
          onChange={(e) => {
            setValue;
          }}
        >
          <Editable renderLeaf={renderLeaf} />
        </Slate>
      </div>
    </Draggable>
  );
};

export default EditableText;
