import { TickerItem } from './TickerItem'
import { TickerSummaryItem } from './TickerSummaryItem'

export class TickerSummary {
  private _id: number
  private _bestBid: number // 買い注文最高値
  private _bestAsk: number // 売り注文最安値
  private _timestamp: number
  private _startTime: number
  private _endTime: number
  private _sliceSecond: number // 何秒間隔区切りのデータ
  private _tickerSummaryItem: TickerSummaryItem[]
  private _tickerItem: TickerItem[]

  constructor(args: {
    id?: number
    startTime: number
    endTime: number
    sliceSecond: number
  }) {
    this._id = args.id
    this._startTime = args.startTime
    this._endTime = args.endTime
    this._sliceSecond = args.sliceSecond
    this._tickerSummaryItem = []
    this._tickerItem = []
  }

  get bestBid(): number {
    return this._bestBid
  }

  get bestAsk(): number {
    return this._bestAsk
  }

  addTickerItem(args: {
    id?: number
    bid: number
    ask: number
    timestamp: number
  }): void {
    this._tickerItem.push(
      new TickerItem({
        id: args.id,
        bid: args.bid,
        ask: args.ask,
        timestamp: args.timestamp
      })
    )
  }

  // X秒区切りのサマリーデータを作成
  calcSummary(): boolean {
    return true
  }
}
