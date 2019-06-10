import { TickerSummary } from '../../../src/domain/models/TickerSummary'

describe('TickerSummary', (): void => {
  describe('#calcSummary', (): void => {
    test('20秒区切り', (): void => {
      let summary = setTestData()
      let results = summary.calcSummary({
        startTime: '2019/06/11 00:00:00',
        endTime: '2019/06/11 00:02:00',
        sliceSecond: 20
      })
      expect(results.length).toEqual(6)
      expect(results[0].bid).toEqual(400_010)
      expect(results[0].ask).toEqual(400_200)
      expect(results[0].tickerItems.length).toEqual(2)
      expect(results[1].bid).toEqual(400_090)
      expect(results[1].ask).toEqual(400_300)
      expect(results[1].tickerItems.length).toEqual(3)
    })
  })
})

function setTestData(): TickerSummary {
  let sum = new TickerSummary()
  sum.addTickerItem({
    bid: 400_000,
    ask: 400_500,
    timestamp: Date.parse('2019/06/11 0:00:01')
  })
  sum.addTickerItem({
    bid: 400_010,
    ask: 400_200,
    timestamp: Date.parse('2019/06/11 0:00:08')
  })
  sum.addTickerItem({
    bid: 400_040,
    ask: 400_300,
    timestamp: Date.parse('2019/06/11 0:00:20')
  })
  sum.addTickerItem({
    bid: 400_060,
    ask: 400_400,
    timestamp: Date.parse('2019/06/11 0:00:30')
  })
  sum.addTickerItem({
    bid: 400_090,
    ask: 400_500,
    timestamp: Date.parse('2019/06/11 0:00:38')
  })
  sum.addTickerItem({
    bid: 400_100,
    ask: 400_600,
    timestamp: Date.parse('2019/06/11 0:00:48')
  })
  sum.addTickerItem({
    bid: 401_100,
    ask: 400_600,
    timestamp: Date.parse('2019/06/11 0:00:58')
  })

  sum.addTickerItem({
    bid: 400_000,
    ask: 400_500,
    timestamp: Date.parse('2019/06/11 0:01:01')
  })
  sum.addTickerItem({
    bid: 400_010,
    ask: 400_200,
    timestamp: Date.parse('2019/06/11 0:01:08')
  })
  sum.addTickerItem({
    bid: 400_040,
    ask: 400_300,
    timestamp: Date.parse('2019/06/11 0:01:20')
  })
  sum.addTickerItem({
    bid: 400_060,
    ask: 400_400,
    timestamp: Date.parse('2019/06/11 0:01:30')
  })
  sum.addTickerItem({
    bid: 400_090,
    ask: 400_500,
    timestamp: Date.parse('2019/06/11 0:01:38')
  })
  sum.addTickerItem({
    bid: 400_100,
    ask: 400_600,
    timestamp: Date.parse('2019/06/11 0:01:48')
  })
  sum.addTickerItem({
    bid: 401_100,
    ask: 400_600,
    timestamp: Date.parse('2019/06/11 0:01:58')
  })
  return sum
}
