import datetime
import time
import sqlite3


class TraderDAO:
    def __init__(self):
        self.db = '/Users/wuminkai/python/YahooFinance/data/stock.sqlite'

    def createTable(self):
        con = sqlite3.connect(self.db)
        cur = con.cursor()
        cur.execute("CREATE TABLE if not exists Trade ("\
                    "Symbol varchar(10),"\
                    "Trader varchar(20),"\
                    "Type char(1),"\
                    "Share int,"\
                    "TradeTime date,"\
                    "TradePrice float,"\
                    "TimeStamp date"
                    ")"
                    )
        con.commit()
        print "create table successfully"
        con.close()

    def insertValues(self, symbol, trader, type, share, trade_time, trade_price):
        cur_time = datetime.datetime.fromtimestamp(time.time()).strftime('%Y-%m-%d %H:%M:%S')
        con = sqlite3.connect(self.db)
        cur = con.cursor()
        cur.execute('''INSERT INTO Trade Values (?,?,?,?,?,?,?)''', (symbol, type, trader, share, trade_time, trade_price, cur_time))
        con.commit()
        con.close()

    def dropTable(self):
        con = sqlite3.connect(self.db)
        cur = con.cursor()
        cur.execute("DROP TABLE IF EXISTS TRADE")
        con.commit()
        con.close()

    def cleanTable(self):
        con = sqlite3.connect(self.db)
        cur = con.cursor()
        cur.execute("DELETE FROM Trade")
        con.commit()
        con.close()

# traderDAO = TraderDAO()
#
# traderDAO.dropTable()
# traderDAO.createTable()