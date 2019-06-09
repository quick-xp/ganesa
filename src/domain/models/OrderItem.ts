export class OrderItem {
  private _id: number
  private _isSellOrder: boolean
  private _price: number
  private _rate: number
  private _size: number
  private _fetchedAt: number

  constructor(args: {
    id: number
    isSellOrder: boolean
    rate: number
    size: number
    fetchedAt: number
  }) {
    this._id = args.id
    this._isSellOrder = args.isSellOrder
    this._rate = args.rate
    this._size = args.size
    this._price = this._rate || 0 * this._size || 0
    this._fetchedAt = args.fetchedAt
  }

  get isSellOrder(): boolean {
    return this._isSellOrder
  }

  get price(): number {
    return this._price
  }

  get rate(): number {
    return this._rate
  }
}
