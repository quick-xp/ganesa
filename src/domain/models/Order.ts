import { OrderItem } from './OrderItem'

export class Order {
  private buyOrderItems: OrderItem[]
  private sellOrderItems: OrderItem[]

  addOrderItem(args: {
    id: number
    isSellOrder: boolean
    rate: number
    size: number
    fetchedAt: number
  }) {
    let orderItem = new OrderItem({
      id: args.id,
      isSellOrder: args.isSellOrder,
      rate: args.rate,
      size: args.size,
      fetchedAt: args.fetchedAt
    })

    if (orderItem.isSellOrder) {
      this.sellOrderItems.push(orderItem)
    } else {
      this.buyOrderItems.push(orderItem)
    }
  }

  // 最安の売り注文
  // limit: 最安X件を取得
  // priceLimit: JPYの上限. これ以上の金額は無視する
  selectLowSellOrders(limit: number, priceLimit: number): OrderItem[] {
    let sellOrders = this.sellOrderItems.filter(
      item => item.price <= priceLimit
    )
    sellOrders.sort((l, r) => {
      if (l.rate < r.rate) return -1
      if (l.rate > r.rate) return 1
      return 0
    })

    let results = []
    for (let i: number = 0; i < sellOrders.length; i++) {
      if (i >= limit) {
        break
      }
      results.push(sellOrders[i])
    }

    return results
  }
  // 最高の買い注文
}
