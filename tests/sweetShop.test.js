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


describe('Delete Sweet', () => {
  test('should delete a sweet by ID', () => {
    const shop = new SweetShop();
    const sweet = new Sweet(1002, 'Gajar Halwa', 'Vegetable-Based', 30, 15);
    shop.addSweet(sweet);
    shop.deleteSweet(1002);
    expect(shop.getSweetById(1002)).toBeUndefined();
  });

  test('should throw an error when trying to delete a non-existent sweet', () => {
    const shop = new SweetShop();
    expect(() => shop.deleteSweet(9999)).toThrow('Sweet not found');
  });
});


describe('View Sweets', () => {
  test('should return all sweets in the shop', () => {
    const shop = new SweetShop();
    const sweet1 = new Sweet(1001, 'Kaju Katli', 'Nut-Based', 50, 20);
    const sweet2 = new Sweet(1002, 'Gajar Halwa', 'Vegetable-Based', 30, 15);

    shop.addSweet(sweet1);
    shop.addSweet(sweet2);

    const allSweets = shop.getAllSweets();
    expect(allSweets.length).toBe(2);
    expect(allSweets[0].name).toBe('Kaju Katli');
    expect(allSweets[1].name).toBe('Gajar Halwa');
  });

  test('should return an empty list if no sweets are added', () => {
    const shop = new SweetShop();
    const allSweets = shop.getAllSweets();
    expect(allSweets).toEqual([]);
  });
});


describe('Search Sweets', () => {
  let shop;

  beforeEach(() => {
    shop = new SweetShop();
    shop.addSweet(new Sweet(1001, 'Kaju Katli', 'Nut-Based', 50, 20));
    shop.addSweet(new Sweet(1002, 'Gajar Halwa', 'Vegetable-Based', 30, 15));
    shop.addSweet(new Sweet(1003, 'Gulab Jamun', 'Milk-Based', 10, 50));
  });

  test('should find sweets by name (partial match)', () => {
    const results = shop.searchByName('Katli');
    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Kaju Katli');
  });

  test('should find sweets by category', () => {
    const results = shop.searchByCategory('Milk-Based');
    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Gulab Jamun');
  });

  test('should find sweets within a price range', () => {
    const results = shop.searchByPriceRange(10, 40);
    expect(results.length).toBe(2); // Gajar Halwa and Gulab Jamun
  });

  test('should return empty array if no match found', () => {
    const results = shop.searchByName('Ladoo');
    expect(results).toEqual([]);
  });
});

describe('Purchase Sweets', () => {
  let shop;

  beforeEach(() => {
    shop = new SweetShop();
    shop.addSweet(new Sweet(1001, 'Kaju Katli', 'Nut-Based', 50, 20));
  });

  test('should reduce quantity when sweet is purchased', () => {
    shop.purchaseSweet(1001, 5);
    const sweet = shop.getSweetById(1001);
    expect(sweet.quantity).toBe(15);
  });

  test('should throw an error if not enough stock is available', () => {
    expect(() => shop.purchaseSweet(1001, 25)).toThrow('Insufficient stock');
  });

  test('should throw an error if sweet does not exist', () => {
    expect(() => shop.purchaseSweet(9999, 1)).toThrow('Sweet not found');
  });
});


describe('Restock Sweets', () => {
  let shop;

  beforeEach(() => {
    shop = new SweetShop();
    shop.addSweet(new Sweet(1001, 'Kaju Katli', 'Nut-Based', 50, 20));
  });

  test('should increase quantity when restocking sweets', () => {
    shop.restockSweet(1001, 10);
    const sweet = shop.getSweetById(1001);
    expect(sweet.quantity).toBe(30);
  });

  test('should throw an error if sweet does not exist', () => {
    expect(() => shop.restockSweet(9999, 5)).toThrow('Sweet not found');
  });
});

