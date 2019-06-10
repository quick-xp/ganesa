import { TickerItem } from './TickerItem'

export class TickerSummaryItem {
  private _id: number
  private _bid: number // 買い注文最高値
  private _ask: number // 売り注文最安値
  private _timestamp: number
  private _sliceSecond: number // 何秒間隔区切りのデータ
  private _tickerItems: TickerItem[]

  constructor(args: {
    id?: number
    bid?: number
    ask?: number
    tickerItems: TickerItem[]
    sliceSecond: number
    timestamp: number
  }) {
    this._id = args.id
    this._bid = args.bid
    this._ask = args.ask
    this._tickerItems = args.tickerItems
    if (this._bid == null || this._ask == null) {
      this.calcSummary(this._tickerItems)
    }
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

  get tickerItems(): TickerItem[] {
    return this._tickerItems
  }

  calcSummary(tickerItems: TickerItem[]): void {
    if (tickerItems && tickerItems.length > 0) {
      this._bid = Math.max(...tickerItems.map(m => m.bid))
      this._ask = Math.min(...tickerItems.map(m => m.ask))
    }
  }
}
