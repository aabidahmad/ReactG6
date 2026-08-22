import { useState } from "react";
import "./StudentCard.css";

function StudentCard(props) {
    const [attendance, setAttendance] = useState("Present");

    function markAbsent() {
        setAttendance("Absent");
    }

    function markPresent() {
        setAttendance("Present");
    }

    return (
        <div className="student-card">
            <h2>🎓 Student Management</h2>

            <div className="student-info">
                <p><strong>Name:</strong> {props.name}</p>
                <p><strong>Age:</strong> {props.age}</p>
                <p>
                    <strong>Attendance:</strong>
                    <span className={attendance === "Present" ? "present" : "absent"}>
                        {" "}{attendance}
                    </span>
                </p>
            </div>

            <button
                onClick={markAbsent}
                onDoubleClick={markPresent}
            >
                {attendance === "Present" ? "Mark Absent" : "Mark Present"}
            </button>

            <small>
                Double-click the button to mark Present
            </small>
        </div>
    );
}

export default StudentCard;