import { faker, fakerUK } from '@faker-js/faker';

export const createFakeContact = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  phone: fakerUK.phone.number(),
  email: faker.internet.email(),
  job: faker.person.jobTitle(),
});
