
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import datetime
today = datetime.date.today()

print("_________________________________")

# ここから下に解答を書く
import datetime as dt
import locale
this_year = today.year
this_month = today.month
this_day = today.day


# localeモジュールで時間のロケールを'ja_JP.UTF-8'に変更する
locale.setlocale(locale.LC_TIME, 'ja_JP.UTF-8')

date = dt.date(this_year, this_month, this_day)
print("今日は"+ date.strftime('%A')+"です")  



# 出力例 今日は水曜日です


#######################################################
print("_________________________________")


"""
お題2: 一番大きい数、小さい数字、平均値は？
お題: 配列の中の一番大きい数字、小さい数字、平均値をそれぞれ表示してください。
"""

numbers = [73, 24, 64, 10, 56, 89]


# ここから下に解答を書く


"""
出力例
89
10
52.666666666666664
"""

#######################################################
print("_________________________________")


"""
お題3: 連絡先をを表示して
お題: dictに入ったデータを使って連絡先を整形して出力してみましょう。
"""

person = {
    "first_name": "太郎",
    "last_name": "すなば",
    "address": {
        "post_code": '904-0004',
        "prefecture": "沖縄県",
        "city": "沖縄市",
        "street": "中央1丁目14-3"},
    "phone": "080-1234-5678",
}

# ここから下に解答を書く


"""
出力例
名前: すなば 太郎
郵便番号: 904-0004
住所: 沖縄県沖縄市中央1丁目14−3
電話番号番号: 080-1234-5678
"""

print("_________________________________")