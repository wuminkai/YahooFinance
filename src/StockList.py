import pandas as pd
import numpy as np
import sqlite3
df = pd.read_csv("/Users/wuminkai/python/YahooFinance/data/nazdaq.csv")
df.replace(['n/a'],np.NaN)

# print df.head(5)
sqlite_file = '/Users/wuminkai/python/YahooFinance/data/stock.sqlite'

con = sqlite3.connect(sqlite_file)
cur = con.cursor()


# TABLE stock: Store stock metadata
cur.execute('DROP TABLE IF EXISTS stock')
cur.execute('CREATE TABLE stock(\
   Symbol varchar(10) PRIMARY KEY,\
   Name varchar(100),\
   IPOyear int,\
   Sector varchar(50),\
   Industry varchar(100),\
   SummaryQuote varchar(100)\
); ')



sql_insert = 'INSERT INTO stock (Symbol, Name, IPOyear, Sector, Industry, SummaryQuote) values' \
             '(?, ?, ?, ?, ?, ?);'

cur.executemany(sql_insert, df[['Symbol','Name','IPOyear','Sector','Industry','Summary Quote']].values.tolist())


cur.execute('SELECT * FROM stock limit 2;')
print cur.fetchall()