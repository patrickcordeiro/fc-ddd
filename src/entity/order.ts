import OrderItem from "./order_item";

export default class Order {
  _id: string;
  customerId: string;
  _items: OrderItem[];

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this.customerId = customerId;
    this._items = items;
  }
}
