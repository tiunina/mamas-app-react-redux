import Contact from "../Contact/Contact";

const ContactList = ({ contactList, onDelete }) => {
  return (
    <ul>
      {contactList.map((contactItem) => {
        return (
          <li key={contactItem.id}>
            <Contact contactItem={contactItem} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
