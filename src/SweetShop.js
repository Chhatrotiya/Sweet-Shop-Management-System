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


}

module.exports = SweetShop;
