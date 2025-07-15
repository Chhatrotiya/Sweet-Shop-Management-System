const SweetShop = require('../src/SweetShop');
const Sweet = require('../src/models/Sweet');

describe('Add Sweet', () => {
  test('should add a sweet to the shop', () => {
    const shop = new SweetShop();
    const sweet = new Sweet(1001, 'Kaju Katli', 'Nut-Based', 50, 20);
    shop.addSweet(sweet);
    expect(shop.getSweetById(1001).name).toBe('Kaju Katli');
  });

  test('should throw an error when adding a sweet with duplicate ID', () => {
  const shop = new SweetShop();
  const sweet1 = new Sweet(1001, 'Kaju Katli', 'Nut-Based', 50, 20);
  const sweet2 = new Sweet(1001, 'Duplicate Katli', 'Nut-Based', 60, 10); // same ID

  shop.addSweet(sweet1);
  expect(() => shop.addSweet(sweet2)).toThrow('Sweet with this ID already exists');
});

});
