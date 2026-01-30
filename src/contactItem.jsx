import { useState } from "react";

function ContactItem({ contact, deleteContact, setEditContact }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", marginTop: "10px", padding: "10px" }}>
      <strong>{contact.fname}</strong>

      {showDetails && (
        <div>
          <p>Last Name: {contact.lname}</p>
          <p>Mobile: {contact.mobile}</p>
        </div>
      )}

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide" : "View"}
      </button>

      <button
        onClick={() => setEditContact(contact)}
        style={{ marginLeft: "10px" }}
      >
        Update
      </button>

      <button
        onClick={() => deleteContact(contact.id)}
        style={{ marginLeft: "10px", color: "red" }}
      >
        Delete
      </button>
    </div>
  );
}

export default ContactItem;
