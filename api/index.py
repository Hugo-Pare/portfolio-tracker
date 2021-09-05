from yahoo_fin.stock_info import get_data, get_live_price
import yfinance as yf
import yahoo_fin.stock_info as si

from datetime import date, datetime, timedelta, time
import json

from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

# Today's date
# Data type : date -> string
date = date.today()
today = date.strftime('%d/%m/%Y')

# 60 days ago (2M)
twoMonthsAgo = (date - timedelta(days=60)).strftime('%d/%m/%Y')

# 6 months ago (6M)
sixMonthsAgo = (date - timedelta(days=180)).strftime('%d/%m/%Y')

# 1 year ago (1Y)
oneYearAgo = (date - timedelta(weeks=60)).strftime('%d/%m/%Y')

# 5 years ago (5Y)
fiveYearsAgo = (date - timedelta(weeks=260)).strftime('%d/%m/%Y')

# 10 years ago (10Y)
tenYearsAgo = (date - timedelta(weeks=520)).strftime('%d/%m/%Y')

@app.route('/stockData')
def get_stock_price_by_date():
    try:

        ticket = request.args['ticket'] # Ticket parameter
        interval = request.args['interval'] # Interval parameter
        # print(interval)

        if interval == '2mo':
            timeInterval = twoMonthsAgo
            intervalSearch = '1d'

        elif interval == '6mo':
            timeInterval = sixMonthsAgo
            intervalSearch = '1d'

        elif interval == '1y':
            timeInterval = oneYearAgo
            intervalSearch = '1wk'

        elif interval == '5y':
            timeInterval = fiveYearsAgo
            intervalSearch = '1mo' 

        elif interval == '10y':
            timeInterval = tenYearsAgo
            intervalSearch = '1mo'

        else:
            raise SyntaxError('Wrong interval')

        # interval: {“1d”, “1wk”, “1mo”}    
        all_data = get_data(ticket, start_date=timeInterval, end_date=today, index_as_date = False, interval=intervalSearch)
        company_name = yf.Ticker(ticket).info['longName']
        quote_table = si.get_quote_table(ticket, dict_result=False)
        # print(quote_table)
        
        dates = []
        stockPrice = []
        attribute = []
        value = []

        if interval == '6mo':
            for date in all_data["date"][1::2]:
                dates.append(date.strftime('%d/%m/%Y'))
            
            for close in all_data["adjclose"][1::2]:
                stockPrice.append(str(close))

        elif interval == '10y':
            for date in all_data["date"][1::2]:
                dates.append(date.strftime('%d/%m/%Y'))
            
            for close in all_data["adjclose"][1::2]:
                stockPrice.append(str(close))
        
        else:
            for date in all_data["date"]:
                dates.append(date.strftime('%d/%m/%Y'))

            for close in all_data["adjclose"]:
                stockPrice.append(str(close))

        data = {
            "date": dates,
            "stockPrice": stockPrice,
            "companyName": company_name,
            "weekRange": str(quote_table['value'][1]),
            "prevClose": str(quote_table['value'][14]),
            "open": str(quote_table['value'][12]),
            "bid": str(quote_table['value'][5]),
            "ask": str(quote_table['value'][2]),
            "dayRange": str(quote_table['value'][6]),
            "yTargetEst": str(quote_table['value'][0]),
            "averageVolume": str(quote_table['value'][3]),
            "volume": str(quote_table['value'][16]),
            "marketCap": str(quote_table['value'][11]),
            "eps": str(quote_table['value'][7]),
            "forwardDividend": str(quote_table['value'][10]),
            "peRatio": str(quote_table['value'][13]),
            "beta": str(quote_table['value'][4]),
            "earningsDate": str(quote_table['value'][8]),
            "exDividendDate": str(quote_table['value'][9])
        }

        return json.dumps(data)

    except: 
        raise SyntaxError('Ticket not recognized')


@app.route('/index')
def get_index_data():
    try:
        now = datetime.now().time()
        marketOpen = time(9,30,0,0)
        marketClose = time(16,0,0,0)

        stanPoor = yf.Ticker("^GSPC").info['open']
        live_stanPoor = si.get_live_price("^GSPC")

        dow = yf.Ticker("^DJI").info['open']
        live_dow = si.get_live_price("^DJI")

        nasdaq = yf.Ticker("^IXIC").info['open']
        live_nasdaq = si.get_live_price("^IXIC")


        marketStatus = "closed"
        if(now >= marketOpen and now <= marketClose and dayOfWeek <= 4):
            marketStatus = "open"
        

        data = {
            "live_stanPoor": str(round(live_stanPoor,2)),
            "stanPoor": str(round(stanPoor,2)),
            "live_dow": str(round(live_dow,2)),
            "dow": str(round(dow,2)),
            "live_nasdaq": str(round(live_nasdaq,2)),
            "nasdaq": str(round(nasdaq,2)),
            "marketStatus": marketStatus
        }

        return json.dumps(data)

    except:
        raise SyntaxError('Error')  


if __name__ == '__main__':
    app.run(debug=True)
