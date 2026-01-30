import React, { useState } from "react";

export default function HookExample() {
  const [user, setUser] = useState({
    name: "",
    age: 0,
    male: false,
    email: "",
  });

  return (
    <>
      <h1>User Information</h1>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
      <h2>Email: {user.email}</h2>
      <h2>Gender: {user.male ? "Male" : "Female"}</h2>

      <br /><br />

      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) =>
          setUser({ ...user, name: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Enter your age"
        onChange={(e) =>
          setUser({ ...user, age: e.target.value })
        }
      />

      <input
        type="email"
        placeholder="Enter your email"
        onChange={(e) =>
          setUser({ ...user, email: e.target.value })
        }
      />

      <label>
        <input
          type="checkbox"
          checked={user.male}
          onChange={(e) =>
            setUser({ ...user, male: e.target.checked })
          }
        />
        Male
      </label>
    </>
  );
}
