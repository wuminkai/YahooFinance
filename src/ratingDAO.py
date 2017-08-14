import sqlite3


class RatingDAO:
    def __init__(self):
        self.db = '/Users/wuminkai/python/YahooFinance/data/stock.sqlite'

    def select(self, n):
        con = sqlite3.connect(self.db)
        cur = con.cursor()
        result = cur.execute('SELECT symbol from rating where analysts>5 order by dateupdated desc, rate limit ?;',[n]).fetchall()

        con.close()
        return result



# stockList = RatingDAO()
# data = stockList.select(10)
# print data
