export class OrderBook {
  private id: number
  private isSellOrder: boolean
  private price: number
  private size: number
  private fetchedAt: Date

  constructor(args: {
    id: number,
    isSellOrder: boolean,
    price: number,
    size: number,
    fetchedAt: Date
  }) {
    this.id = args.id
    this.isSellOrder = args.isSellOrder
    this.price = args.price
    this.size = args.size
    this.fetchedAt = args.fetchedAt
  }
}
