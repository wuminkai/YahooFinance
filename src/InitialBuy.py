import trader
import ratingDAO

rating = ratingDAO.RatingDAO()

"""
simulator1: 1 share of first 10 stocks
"""

simulator1 = trader.Trader()
for stock in rating.select(10):
    print stock[0]
    simulator1.buy(stock[0], "simulator1", 1)


"""
simulator2: $100 each of top 10 stocks
"""
simulator2 = trader.Trader()
for stock in rating.select(10):
    print simulator2.getPrice(stock[0])
    simulator2.buy(stock[0],"simulator2",int(100/float(simulator2.getPrice(stock[0]))))

"""
simulator3: 1 share of first 25 stocks
"""
simulator3 = trader.Trader()
for stock in rating.select(25):
    simulator3.buy(stock[0],"simulator3", 1)

"""
simulator 4: $100 each of top 25 stocks
"""
simulator4 = trader.Trader()
for stock in rating.select(25):
    simulator4.buy(stock[0],"simulator4",int(100/float(simulator4.getPrice(stock[0]))))

"""
simulator 5: 1 share of top 5 stocks
"""
simulator5 = trader.Trader()
for stock in rating.select(5):
    simulator5.buy(stock[0], "simulator5", 1)

"""
simulator 6: $100 each of top 5 stocks
"""
simulator6 = trader.Trader()
for stock in rating.select(5):
    simulator6.buy(stock[0], "simulator6", int(100 / float(simulator4.getPrice(stock[0]))))



