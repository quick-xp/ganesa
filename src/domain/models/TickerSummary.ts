import { TickerItem } from './TickerItem'
import { TickerSummaryItem } from './TickerSummaryItem'

export class TickerSummary {
  private _bestBid: number // 買い注文最高値
  private _bestAsk: number // 売り注文最安値
  private _timestamp: number
  private _startTime: number
  private _endTime: number
  private _sliceSecond: number // 何秒間隔区切りのデータ
  private _tickerSummaryItems: TickerSummaryItem[]
  private _tickerItems: TickerItem[]

  constructor() {
    this._tickerSummaryItems = []
    this._tickerItems = []
  }

  set startTime(t: string) {
    this._startTime = Date.parse(t)
  }

  get startTime(): string {
    return new Date(this._startTime).toString()
  }

  set endTime(t: string) {
    this._endTime = Date.parse(t)
  }

  get endTime(): string {
    return new Date(this._endTime).toString()
  }

  set sliceSecond(s: number) {
    this._sliceSecond = s
  }

  get sliceSecond(): number {
    return this._sliceSecond
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
    this._tickerItems.push(
      new TickerItem({
        id: args.id,
        bid: args.bid,
        ask: args.ask,
        timestamp: args.timestamp
      })
    )
  }

  // X秒区切りのサマリーデータを作成
  calcSummary(args: {
    startTime: string
    endTime: string
    sliceSecond: number
  }): boolean {
    this.startTime = args.startTime
    this.endTime = args.endTime
    this.sliceSecond = args.sliceSecond

    for (let i = this._startTime; i < this._endTime; i += this.sliceSecond) {
      const tickers = this._tickerItems.filter(item => {
        return item.timestamp >= i && item.timestamp < i + this.sliceSecond
      })
      if (tickers.length > 0) {
        let summaryItem = new TickerSummaryItem({
          tickerItems: tickers,
          timestamp: i,
          sliceSecond: this.sliceSecond
        })
        this._tickerSummaryItems.push(summaryItem)
      }
    }
    this._tickerSummaryItems =
      this._tickerSummaryItems.sort(t => t.timestamp) || []
    return true
  }
}
