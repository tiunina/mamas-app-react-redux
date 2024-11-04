import { useEffect, useState } from "react";
import contactList from "./data/contactList.json";

import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import "./App.css";

function App() {
  const [items, setItems] = useState(() => {
    const parsedItems =
      JSON.parse(localStorage.getItem("items")) ?? contactList;
    return parsedItems;
  });

  useEffect(() => {
    const stringifiedItems = JSON.stringify(items);
    localStorage.setItem("items", stringifiedItems);
  }, [items]);

  const [filter, setFilter] = useState("");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const onDelete = (itemId) => {
    const updateItems = items.filter((item) => item.id !== itemId);
    setItems(updateItems);
  };

  const onAddProfile = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };
    setItems((prevState)=>[...prevState, finalUser])
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddProfile={onAddProfile } />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList contactList={filteredItems} onDelete={onDelete} />
    </div>
  );
}

export default App;
