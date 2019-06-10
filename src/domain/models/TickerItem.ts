export class TickerItem {
  private _id: number
  private _bid: number // 買い注文最高値
  private _ask: number // 売り注文最安値
  private _timestamp: number

  constructor(args: {
    id?: number
    bid: number
    ask: number
    timestamp: number
  }) {
    this._id = args.id
    this._bid = args.bid
    this._ask = args.ask
    this._timestamp = args.timestamp
  }

  get bid(): number {
    return this._bid
  }

  get ask(): number {
    return this._ask
  }

  get timestamp(): number {
    return this._timestamp
  }
}
