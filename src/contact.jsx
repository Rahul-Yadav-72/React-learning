import React, { useState } from "react";

function ContactList() {

  // contacts → array of contact objects
  // setContacts → function to update contacts array
  const [contacts, setContacts] = useState([]);

  // input → object for form fields
  const [input, setInput] = useState({
    name: "",
    phone: ""
  });

  // editId → stores id of contact being edited
  const [editId, setEditId] = useState(null);

  // Handle input change (name & phone)
  const handleChange = (e) => {
    setInput({
      ...input,               // keep old values
      [e.target.name]: e.target.value  // update changed field
    });
  };

  // Add or Update Contact
  const handleSubmit = () => {

    // If editing existing contact
    if (editId !== null) {
      setContacts(
        contacts.map((contact) =>
          contact.id === editId
            ? { ...contact, name: input.name, phone: input.phone }
            : contact
        )
      );
      setEditId(null); // reset edit mode
    } 
    // Add new contact
    else {
      setContacts([
        ...contacts,
        {
          id: Date.now(),   // unique id
          name: input.name,
          phone: input.phone
        }
      ]);
    }

    // Clear input fields
    setInput({ name: "", phone: "" });
  };

  // Edit Contact
  const editContact = (contact) => {
    setInput({
      name: contact.name,
      phone: contact.phone
    });
    setEditId(contact.id);
  };

  // Delete Contact
  const deleteContact = (id) => {
    setContacts(
      contacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact List</h2>

      {/* Input Fields */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={input.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={input.phone}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>
        {editId ? "Update" : "Add"}
      </button>

      {/* Contact List */}
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.phone}

            <button onClick={() => editContact(contact)}>
              Edit
            </button>

            <button onClick={() => deleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
