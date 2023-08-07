import React from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {

    const navigate = useNavigate();

    function clickHandler() {
        navigate("/labs");
    }

    function backHandler() {
        navigate(-1);
    }

    return (
        <div>
            <div>
                Support Page..
            </div>
            <button onClick={clickHandler}>Move To The Lab Page</button>
            <br/>
            <button onClick={backHandler}>Back</button>
        </div>
    )
}

export default Support;