from yahoo_fin.stock_info import get_data
import yfinance as yf
import yahoo_fin.stock_info as si

from datetime import date, datetime, timedelta
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

# 1 year ago (1Y)
oneYearAgo = (date - timedelta(weeks=60)).strftime('%d/%m/%Y')

# 5 years ago (5Y)
fiveYearAgo = (date - timedelta(weeks=260)).strftime('%d/%m/%Y')

@app.route('/stockData')
def get_stock_price_by_date():
    try:
        ticket = request.args['ticket'] # Ticket parameter
        interval = request.args['interval'] # Interval parameter
        # print(interval)

        if interval == '1d':
            timeInterval = twoMonthsAgo

        elif interval == '1wk':
            timeInterval = oneYearAgo

        elif interval == '1mo':
            timeInterval = fiveYearAgo

        else:
            raise SyntaxError('Wrong interval')

        # interval: {“1d”, “1wk”, “1mo”}    
        all_data = get_data(ticket, start_date=timeInterval, end_date=today, index_as_date = False, interval=interval)
        company_name = yf.Ticker(ticket).info['longName']
        quote_table = si.get_quote_table(ticket, dict_result=False)
        print(quote_table)
        
        dates = []
        stockPrice = []
        attribute = []
        value = []

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

@app.route('/stock')
def get_data_by_ticket():
    try:
        ticket = request.args['ticket'] # Ticket parameter

        return "stock"

    except:
        raise SyntaxError('Ticket not recognized')  


if __name__ == '__main__':
    app.run(debug=True)
