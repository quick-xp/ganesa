export class OrderItem {
  private id: number
  private isSellOrder: boolean
  private price: number
  private size: number
  private fetchedAt: number

  constructor(args: {
    id: number
    isSellOrder: boolean
    price: number
    size: number
    fetchedAt: number
  }) {
    this.id = args.id
    this.isSellOrder = args.isSellOrder
    this.price = args.price
    this.size = args.size
    this.fetchedAt = args.fetchedAt
  }
}
