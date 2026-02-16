// Assigment : Student Management System creat a comprehensive student using React and `userState`.
// This assigment will test your understanding of state management with different data type ,from handling and component organization.
// Requirement : Part 1: student List Component 
//1. Display Student : -show a list of students with their name ,IDs, aand average grades -Each student with their name,Student id , Average Gread , Greafd , Gread Letter (A,B,C,D,F)# 
//2. Add Student : - Form to add new student (Name , Student ID) - New student start with no grades#   
//3. Delete Student : - Remove student from the list#
// Part 2 : Grade Management 
//1. Add gread : - from each student ,add individual subject gread(Math,Science, English ) - Grade should be number (0-100) - Calculate average grade automatically 
//2. Grade statics: - Display overall class average  - show highest and lowest grades - count student in each grade letter category
// Part 3: Filtering and Sorting 
//1. Filter Student: -Filter by name (Search functionality)
//2. Sort Student: -sort by name(A-Z, Z-A)


import React, { useState } from "react";

const UserStateFullExercise = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("az");

  // Add Student
  const addStudent = (e) => {
    e.preventDefault();
    if (!name || !studentId) return;

    const newStudent = {
      id: studentId,
      name: name,
      grades: {
        math: "",
        science: "",
        english: "",
      },
    };

    setStudents([...students, newStudent]);
    setName("");
    setStudentId("");
  };

  // Delete Student
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  // Update Grade
  const updateGrade = (id, subject, value) => {
    if (value < 0 || value > 100) return;

    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              grades: { ...student.grades, [subject]: value },
            }
          : student
      )
    );
  };

  // Calculate Average
  const calculateAverage = (grades) => {
    const values = Object.values(grades)
      .map((g) => Number(g))
      .filter((g) => !isNaN(g));

    if (values.length === 0) return 0;

    return (
      values.reduce((a, b) => a + b, 0) / values.length
    ).toFixed(2);
  };

  // Grade Letter
  const getLetter = (avg) => {
    if (avg >= 90) return "A";
    if (avg >= 80) return "B";
    if (avg >= 70) return "C";
    if (avg >= 60) return "D";
    return "F";
  };

  // Filter + Sort
  const filteredStudents = students
    .filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "az"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  // Class Statistics
  const averages = students.map((student) =>
    Number(calculateAverage(student.grades))
  );

  const classAverage =
    averages.length > 0
      ? (
          averages.reduce((a, b) => a + b, 0) / averages.length
        ).toFixed(2)
      : 0;

  const highest = averages.length ? Math.max(...averages).toFixed(2) : 0;
  const lowest = averages.length ? Math.min(...averages).toFixed(2) : 0;

  const gradeCount = { A: 0, B: 0, C: 0, D: 0, F: 0 };
  averages.forEach((avg) => {
    gradeCount[getLetter(avg)]++;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Student Management System</h1>

      {/* Add Student */}
      <form onSubmit={addStudent}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>

      <br />

      {/* Filter + Sort */}
      <input
        type="text"
        placeholder="Search by Name..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="az">Sort A-Z</option>
        <option value="za">Sort Z-A</option>
      </select>

      <hr />

      {/* Student List */}
      {filteredStudents.map((student) => {
        const avg = calculateAverage(student.grades);
        const letter = getLetter(avg);

        return (
          <div
            key={student.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{student.name}</h3>
            <p>ID: {student.id}</p>
            <p>Average: {avg}</p>
            <p>Grade Letter: {letter}</p>

            <input
              type="number"
              placeholder="Math"
              min="0"
              max="100"
              onChange={(e) =>
                updateGrade(student.id, "math", e.target.value)
              }
            />
            <input
              type="number"
              placeholder="Science"
              min="0"
              max="100"
              onChange={(e) =>
                updateGrade(student.id, "science", e.target.value)
              }
            />
            <input
              type="number"
              placeholder="English"
              min="0"
              max="100"
              onChange={(e) =>
                updateGrade(student.id, "english", e.target.value)
              }
            />

            <br />
            <button onClick={() => deleteStudent(student.id)}>
              Delete
            </button>
          </div>
        );
      })}

      <hr />

      {/* Class Statistics */}
      <h2>Class Statistics</h2>
      <p>Class Average: {classAverage}</p>
      <p>Highest Average: {highest}</p>
      <p>Lowest Average: {lowest}</p>

      <h4>Grade Distribution:</h4>
      <ul>
        {Object.entries(gradeCount).map(([grade, count]) => (
          <li key={grade}>
            {grade}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserStateFullExercise;


