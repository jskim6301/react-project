import { useRecoilState,useRecoilValue } from "recoil";
import { textState } from "./CounterStore";
import { fontSizeLabelState, fontSizeState } from "./store";

export default function FontButton() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    const fontSizeLabel = useRecoilValue(fontSizeLabelState);
    const [text] = useRecoilState(textState);
    return (
        <>
      <button onClick={() => setFontSize((size) => size + 1)} style={{fontSize}}>
        Click to Enlarge
      </button>
        <div>Current font size: ${fontSizeLabel}
        
        {text}
        </div>
      </>

    );
}

