import time
import traderDAO
from yahoo_finance import Share


class Trader:
    """
    stock
    """
    def __init__(self):
        self.traderDAO = traderDAO.TraderDAO()
        # self.traderDAO.createTable()

    def getPrice(self, symbol):
        stock = Share(symbol)
        return stock.get_historical('2016-12-01', '2016-12-01')[0]['Close']

    def buy(self, symbol, trader, share):
        stock = Share(symbol)
        price = stock.get_price()
        trade_time = time.strftime("%Y-%m-%d %H:%M:%S")
        print stock.get_price()
        self.traderDAO.insertValues(symbol, "B", trader, share, trade_time, price)

    def buyHistorical(self, symbol, trader, share, date):
        stock = Share(symbol)
        price = stock.get_historical(date,date)[0]['Close']
        trade_time = date+' 00:00:00'
        self.traderDAO.insertValues(symbol, "B", trader, share, trade_time, price)

    def sell(self, symbol, trader, share):
        stock = Share(symbol)
        price = stock.get_price()
        trade_time = time.strftime("%Y-%m-%d %H:%M:%S")
        self.traderDAO.insertValues(symbol, "S", -share, trade_time, price)

    def clean(self):
        self.traderDAO.cleanTable()

wuminkai = Trader()
wuminkai.clean()
# wuminkai.showPrice('NSR')
# wuminkai.buy('NSR',1)
# wuminkai.buyHistorical('NSR',1,'2016-12-01')
# wuminkai.sell('NSR',1)
