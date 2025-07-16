class SweetShop {
  constructor() {
    this.sweets = new Map();
  }

  addSweet(sweet) {
    if (this.sweets.has(sweet.id)) {
      throw new Error('Sweet with this ID already exists');
    }
    this.sweets.set(sweet.id, sweet);
  }

  getSweetById(id) {
    return this.sweets.get(id);
  }

  deleteSweet(id) {
  if (!this.sweets.has(id)) {
    throw new Error('Sweet not found');
  }
  this.sweets.delete(id);
}

getAllSweets() {
  return Array.from(this.sweets.values());
}

searchByName(name) {
  return Array.from(this.sweets.values()).filter(sweet =>
    sweet.name.toLowerCase().includes(name.toLowerCase())
  );
}

searchByCategory(category) {
  return Array.from(this.sweets.values()).filter(sweet =>
    sweet.category.toLowerCase() === category.toLowerCase()
  );
}

searchByPriceRange(min, max) {
  return Array.from(this.sweets.values()).filter(sweet =>
    sweet.price >= min && sweet.price <= max
  );
}

purchaseSweet(id, quantity) {
  const sweet = this.sweets.get(id);
  if (!sweet) {
    throw new Error('Sweet not found');
  }
  if (sweet.quantity < quantity) {
    throw new Error('Insufficient stock');
  }
  sweet.quantity -= quantity;
}
restockSweet(id, quantity) {
  const sweet = this.sweets.get(id);
  if (!sweet) {
    throw new Error('Sweet not found');
  }
  sweet.quantity += quantity;
}


}

module.exports = SweetShop;
