"""
Crawler ratings for stocks
"""

# from BeautifulSoup import BeautifulSoup
# import requests
import json
import urllib2
# import sqlite3
# import pandas as pd
# import numpy as np
import sqlite3
import time
import datetime
# from ast import literal_eval

sqlite_file = '/Users/wuminkai/Project/YahooFinance/data/stock.sqlite'
con = sqlite3.connect(sqlite_file)
cur = con.cursor()

result = cur.execute('select distinct symbol from stock').fetchall()
stocks = [row[0] for row in result]
# for s in stocks[-1:]:
#     print s

# print stocks

rating_all = []
for s in stocks:
    url= 'https://query2.finance.yahoo.com/v10/finance/quoteSummary/'+s+'?formatted=true&crumb=rOPhyh7OZQq&lang=en-US&region=US&modules=summaryProfile%2CfinancialData%2CrecommendationTrend%2CupgradeDowngradeHistory%2Cearnings%2CdefaultKeyStatistics%2CcalendarEvents&corsDomain=finance.yahoo.com'    
    try:
        data = json.load(urllib2.urlopen(url))
        rate = data['quoteSummary']['result'][0]['financialData']['recommendationMean']['raw']
        analysts = data['quoteSummary']['result'][0]['financialData']['numberOfAnalystOpinions']['raw']
        rating_all.append([s,rate, analysts])
        print [s,rate, analysts]
    except:
        print "%s: Recommendation Rating isn't available." %s


print len(rating_all)


# ## Store Rating to [Rating]

# TABLE Rating: Store stock rating
# cur.execute('DROP TABLE IF EXISTS rating')
# cur.execute('CREATE TABLE rating(   Symbol varchar(10) ,   DateUpdated date ,   Rate float,   Analysts int,   Primary key(Symbol, DateUpdated)); ')
# con.commit()


cur_time = datetime.datetime.fromtimestamp(time.time()).strftime('%Y-%m-%d %H:%M:%S')
sql_insert = 'INSERT INTO rating (Symbol, Rate, Analysts, DateUpdated) values(?,?,?,?);'
for i in rating_all:
    cur.execute(sql_insert, (i[0], i[1], i[2], cur_time))
con.commit()



# print cur.execute('SELECT Symbol, Rate, Analysts, DateUpdated FROM rating limit 5;').fetchall()



'''
Latest data to meterialized view rating_latest
'''

sql_mv = 'CREATE '

con.close()




