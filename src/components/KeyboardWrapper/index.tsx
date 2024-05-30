"use client";
import React, { FunctionComponent, useState, MutableRefObject } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

interface IProps {
    onChange: (input: string) => void;
    keyboardRef: MutableRefObject<any>;
}

const KeyboardWrapper: FunctionComponent<IProps> = ({ onChange, keyboardRef }) => {
    const [layoutName, setLayoutName] = useState("default");

    const onKeyPress = (button: string) => {
        if (button === "{shift}" || button === "{lock}") {
            setLayoutName(layoutName === "default" ? "shift" : "default");
        }
    };

    const customLayout = {
        default: [
            "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
            "q w e r t y u i o p [ ] \\",
            "{tab} a s d f g h j k l ; ' {enter}",
            "{shift} z x c v b n m , . / {shift}",
            "{ctrl} {alt} {space} {alt} {ctrl}"
        ],
        shift: [
            "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
            "Q W E R T Y U I O P { } |",
            "{tab} A S D F G H J K L : \" {enter}",
            "{shift} Z X C V B N M < > ? {shift}",
            "{ctrl} {alt} {space} {alt} {ctrl}"
        ]
    };

    return (
        <Keyboard
            keyboardRef={r => (keyboardRef.current = r)}
            layoutName={layoutName}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onRender={() => console.log("Rendered")}
            physicalKeyboardHighlight={true}
            physicalKeyboardHighlightPress={true}
            layout={customLayout}
            display={{
                "{bksp}": "Backspace",
                "{tab}": "Tab",
                "{enter}": "Enter",
                "{shift}": "Shift",
                "{ctrl}": "Ctrl",
                "{alt}": "Alt",
                "{space}": "Space"
            }}
        />
    );
};

export default KeyboardWrapper;
