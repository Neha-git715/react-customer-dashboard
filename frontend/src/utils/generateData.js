import { faker } from "@faker-js/faker";

const createRandomCustomer = (id) => {
  const avatarIndex = id % 7;
  const avatarExt = avatarIndex === 3 ? 'jpeg' : 'png'; // Only avatar3 is .jpeg
  return {
    id,
    avatar: `avatar${avatarIndex}.${avatarExt}`,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    score: faker.number.int({ min: 0, max: 100 }),
    lastMessageAt: faker.date.recent({ days: 30 }).toISOString(),
    addedBy: faker.person.fullName(),
  };
};

export const generateCustomers = (count) => {
  return Array.from({ length: count }, (_, i) => createRandomCustomer(i + 1));
};