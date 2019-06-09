import { Order } from '../../../src/domain/models/Order'

describe('Order', (): void => {
  describe('#selectLowSellOrders', (): void => {
    test('最安注文', (): void => {
      let order: Order = setTestData()
      let results = order.selectLowSellOrders(3, 100_000)
      expect(results.length).toEqual(3)
      expect(results[0].rate).toEqual(400_000)
      expect(results[0].price).toEqual(400)
      expect(results[1].rate).toEqual(400_020)
      expect(results[2].rate).toEqual(400_050)
    })

    test('最安注文-JPY上限制限', (): void => {
      let order: Order = setTestData()
      let results = order.selectLowSellOrders(3, 420)
      expect(results.length).toEqual(2)
      expect(results[0].rate).toEqual(400_000)
      expect(results[1].rate).toEqual(400_020)
    })
  })
})

function setTestData(): Order {
  let order = new Order()
  order.addOrderItem({ isSellOrder: true, rate: 400_000, size: 0.001 })
  order.addOrderItem({ isSellOrder: true, rate: 400_100, size: 0.005 })
  order.addOrderItem({ isSellOrder: true, rate: 400_200, size: 0.003 })
  order.addOrderItem({ isSellOrder: true, rate: 400_200, size: 0.005 })
  order.addOrderItem({ isSellOrder: true, rate: 400_050, size: 0.002 })
  order.addOrderItem({ isSellOrder: true, rate: 400_020, size: 0.001 })
  return order
}
