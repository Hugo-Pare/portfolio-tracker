from yahoo_fin.stock_info import get_data
from datetime import date
import json

from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# Today's date
# Data type : date -> string
date = date.today()
today = date.strftime('%d/%m/%Y')

@app.route('/portfolio')
def get_stock_price_by_date():
    try:
        ticket = request.args['ticket'] # Ticket parameter should be an array
        all_data = get_data(ticket, start_date="12/04/2009", end_date=today, index_as_date = False, interval="1mo")
        # interval: {“1d”, “1wk”, “1mo”}

        dates = []
        stockPrice = []

        for date in all_data["date"]:
            dates.append(date.strftime('%d/%m/%Y'))
        for close in all_data["adjclose"]:
            stockPrice.append(str(close))

        data = {
            "date": dates,
            "stockPrice": stockPrice
        }

        return json.dumps(data)

    except: 
        raise SyntaxError('Ticket not recognized')

if __name__ == '__main__':
    app.run(debug=True)
