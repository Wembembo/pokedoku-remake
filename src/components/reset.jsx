import React from "react";

function ResetButton() {
    document.getElementById(`button`).classList.add("invisible");
    return (
        <button className="reset-button">
            Reset Game
        </button>
    );
};

export default ResetButton;