import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import "./Class.css";

const Class = () => {
    const [showMore, setShowMore] = useState(false);
    const openTable = () => {
        setShowMore(!showMore);
    }

    return (
        <div className="class-container">
            <table onClick={openTable}>
                <tbody>
                    <tr id="class-header">
                        <td>BIOL 101</td>
                        <td>UC Irvine</td>
                        <td>4 units</td>
                        <td id="delete-class"><FaRegTrashAlt /></td>
                    </tr>
                    {showMore ? (
                        <>
                            <tr>
                                <td>Grade: A-</td>
                            </tr>
                            <tr>
                                <td>Notes: </td>
                            </tr>
                        </>
                    ): null}
                </tbody>
            </table>
        </div>
    )
}

export default Class;