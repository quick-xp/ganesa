import { TickerItem } from './TickerItem'

export class TickerSummaryItem {
  private _id: number
  private _bid: number // 買い注文最高値
  private _ask: number // 売り注文最安値
  private timestamp: number
  private startTime: number
  private endTime: number
  private sliceSecond: number // 何秒間隔区切りのデータ
  private tickerItem: TickerItem[]

  constructor(args: {
    id?: number
    bid: number
    ask: number
    timestamp: number
  }) {
    this._id = args.id
    this._bid = args.bid
    this._ask = args.ask
    this.timestamp = args.timestamp
  }

  get bid(): number {
    return this._bid
  }

  get ask(): number {
    return this._ask
  }
}
