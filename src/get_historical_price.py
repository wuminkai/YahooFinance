import urllib2
from BeautifulSoup import BeautifulSoup as bs

def get_historical_price(name, number_of_days):
    data = []
    url = "https://finance.yahoo.com/quote/" + name + "/history/"
    rows = bs(urllib2.urlopen(url).read()).findAll('table')[1].tbody.findAll('tr')

    for each_row in rows:
        d = {}
        divs = each_row.findAll('td')
        date_div = divs[0].span.text
        # I'm only interested in 'Open' for other values, play with divs[1 through 5]
        # print divs[1].span.text
        if divs[1].span.text == 'Dividend':
            continue
            # Ignore this row in the table
        close_text = divs[4].span.text
        d['Date'] = date_div
        d['Close'] = float(close_text)
        data.append(d)
    return data[:number_of_days]

# print get_historical_price('aapl', 15)


