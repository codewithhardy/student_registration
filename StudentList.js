import React, { useState, useEffect } from "react";
import axios from "axios";

function StudentList() {
  const [student, setStudent] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const req = await axios.get("http://localhost:5000/app/signup");
  //     const { data } = req.json();
  //     console.log(data);
  //     setStudent(data);
  //   }

  //   fetchData();
  // }, []);

  useEffect(() => {
    fetch("http://localhost:5000/app/signup")
      .then((res) => res.json())
      .then((data) => setStudent(data));
  });

  console.log(student);

  return (
    <div>
      {student.map((person) => {
        return <h2>{person}</h2>;
      })}
    </div>
  );
}

export default StudentList;
