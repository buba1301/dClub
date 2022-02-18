const faker = require('faker');

const restorant = () => {
  const id = faker.random.number();
  return {
    id,
    name: faker.company.companyName(),
    description: faker.lorem.sentence,
    typeOfFood: '',
    ordersNumber: faker.random.number(),
    like: faker.datatype.boolean(),
    takeAway: faker.datatype.boolean(),
    booking: faker.datatype.boolean(),
    deliveryTime: faker.datatype.number({
      min: 15,
      max: 60,
    }),
    rating: faker.datatype.float({
      min: 0,
      max: 5,
    }),
    addres: {
      zipcode: faker.address.zipCode(),
      city: faker.address.city(),
      street: faker.address.streetAddress(),
      latitude: faker.address.latitude(),
      longitude: faker.address.longitude(),
    },
    img: faker.image.food(),
  };
};

module.exports = () => {
  const data = { restorants: [] };
  for (let i = 0; i < 100; i += 1) {
    data.restorants.push(restorant());
  }
  return data;
};
