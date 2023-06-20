import Form from '../../Phonebook/Form';
import Filter from '../../Filter/FilterContact';
import ContactList from '../../ContactsList/ContactsList';

export default function Book() {
  return (
    <>
      <main>
        <Form />
        <Filter />
        <ContactList />
      </main>
      <footer></footer>
    </>
  );
}
