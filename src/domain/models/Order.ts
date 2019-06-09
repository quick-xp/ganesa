import { OrderItem } from "./OrderItem"

export class Order {
  private orderItems: OrderItem[]

  addOrderItem(args: {
    isSellOrder: boolean,
    price: number,
    size: number,
  }
  ) {
    let orderItem = new OrderItem(
      {id: null, isSellOrder: args.isSellOrder, price: args.price, size: args.size, fetchedAt: Date.now()}
    )
  }
}
