import React from 'react';
import "./InstructionsContainer.css";

export default function InstructionsContainer(props) {    

    function LanguageButton(props) {

        function handleClick(e) {
            let text = e.target.innerText;
            props.onClick(text)
        }

        return (
            <button className="language-button" onClick={handleClick}>{props.language}</button>
        );
    }

    function handleInstructionChangeLeft() {
        props.onInstructionChange(-1);
    }

    function handleInstructionChangeRight() {
        props.onInstructionChange(1);
    }

    return (
        <div className="instructions-container">
            <i className="fa-solid fa-arrow-left arrow-left" onClick={handleInstructionChangeLeft}></i>
            <div className="instructions-container-data">
                <div className="instructions-container-close" onClick={props.onClosure}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                {props.instructionNumber === 0 ? (
                    <>
                        <h1>{props.instructions[0][props.instructionNumber]}</h1>
                        <div className="language-buttons-container">
                            <LanguageButton language="Español" onClick={props.onLanguageChange} />
                            <LanguageButton language="English" onClick={props.onLanguageChange} />
                        </div>
                    </>
                ) : (
                    <>
                        <h1>{props.instructions[0][props.instructionNumber]}</h1>
                        <p>{props.instructions[1][props.instructionNumber]}</p>
                        {props.instructionNumber === 2 && (<a>{props.instructions[1][3]}</a>)}
                    </>
                )}
            </div>
            <i className="fa-solid fa-arrow-right arrow-right" onClick={handleInstructionChangeRight}></i>
        </div>
    )
}
