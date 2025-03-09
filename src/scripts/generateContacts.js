import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const qtyContacts = process.argv[2] ? Number(process.argv[2]) : 5;
console.log(qtyContacts);

export const generateContacts = async (number) => {
  const contacts = await readContacts();

  for (let i = 0; i < number; i++) {
    const contact = createFakeContact();
    contacts.push(contact);
  }

  await writeContacts(contacts);
  return contacts;
};

generateContacts(qtyContacts);
