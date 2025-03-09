import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();

  const removedContact = contacts.pop();

  console.log(removedContact);
  await writeContacts(contacts);

  return removedContact;
};

removeLastContact();
