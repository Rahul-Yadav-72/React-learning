import { useEffect, useState } from "react";

function ContactForm({ addContact, editContact, updateContact }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    if (editContact) {
      setFname(editContact.fname);
      setLname(editContact.lname);
      setMobile(editContact.mobile);
    }
  }, [editContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fname) return alert("First name is required");

    if (editContact) {
      updateContact({
        ...editContact,
        fname,
        lname,
        mobile,
      });
    } else {
      addContact({
        id: Date.now(),
        fname,
        lname,
        mobile,
      });
    }

    setFname("");
    setLname("");
    setMobile("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="First Name"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
      />

      <input
        placeholder="Last Name"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
      />

      <input
        placeholder="Mobile No"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <button type="submit">
        {editContact ? "Update Contact" : "Add Contact"}
      </button>
    </form>
  );
}

export default ContactForm;

