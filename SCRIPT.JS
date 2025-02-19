console.log("Main.js working")
const populate = async (value, currency) => {
    let myStr = ""
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_ewk5D8WREMVpJpW4aggnCuMNbB9ra87nUjbi4QZH"+currency
    let response = await fetch(url)
    let rJson = await response.json()
    
    let rJson= JSON.parse('{
  "meta": {
    "last_updated_at": "2024-12-28T23:59:59Z"
  },
  "data": {
    "ADA": {
      "code": "ADA",
      "value": 1.1255104565
    },
    "AED": {
      "code": "AED",
      "value": 3.6714307026
    },
    "AFN": {
      "code": "AFN",
      "value": 70.184552496
    },
    "ALL": {
      "code": "ALL",
      "value": 93.8571038975
    },
    "AMD": {
      "code": "AMD",
      "value": 395.5602393122
    },
    "ANG": {
      "code": "ANG",
      "value": 1.7851802705
    },
    "AOA": {
      "code": "AOA",
      "value": 911.2753764866
    },
    "ARB": {
      "code": "ARB",
      "value": 1.2889664391
    },
    "ARS": {
      "code": "ARS",
      "value": 1027.8125981467
    },
    "AUD": {
      "code": "AUD",
      "value": 1.6077502689
    },
    "AVAX": {
      "code": "AVAX",
      "value": 0.0265143775
    },
    "AWG": {
      "code": "AWG",
      "value": 1.79
    },
    "AZN": {
      "code": "AZN",
      "value": 1.7
    },
    "BAM": {
      "code": "BAM",
      "value": 1.875190305
    },
    "BBD": {
      "code": "BBD",
      "value": 2
    },
    "BDT": {
      "code": "BDT",
      "value": 119.8980914263
    },
    "BGN": {
      "code": "BGN",
      "value": 1.8695203524
    },
    "BHD": {
      "code": "BHD",
      "value": 0.376
    },
    "BIF": {
      "code": "BIF",
      "value": 2904.3504616057
    },
    "BMD": {
      "code": "BMD",
      "value": 1
    },
    "BNB": {
      "code": "BNB",
      "value": 0.001384209
    },
    "BND": {
      "code": "BND",
      "value": 1.3571301748
    },
    "BOB": {
      "code": "BOB",
      "value": 6.9092010487
    },
    "BRL": {
      "code": "BRL",
      "value": 6.2008008407
    },
    "BSD": {
      "code": "BSD",
      "value": 1
    },
    "BTC": {
      "code": "BTC",
      "value": 0.0000104914
    },
    "BTN": {
      "code": "BTN",
      "value": 84.6960101471
    },
    "BWP": {
      "code": "BWP",
      "value": 13.8212317698
    },
    "BYN": {
      "code": "BYN",
      "value": 3.275003985
    },
    "BYR": {
      "code": "BYR",
      "value": 32750.057437265
    },
    "BZD": {
      "code": "BZD",
      "value": 2
    },
    "CAD": {
      "code": "CAD",
      "value": 1.4406302422
    },
    "CDF": {
      "code": "CDF",
      "value": 2837.7452802762
    },
    "CHF": {
      "code": "CHF",
      "value": 0.9012801766
    },
    "CLF": {
      "code": "CLF",
      "value": 0.0254400029
    },
    "CLP": {
      "code": "CLP",
      "value": 992.9715036468
    },
    "CNY": {
      "code": "CNY",
      "value": 7.2911209939
    },
    "COP": {
      "code": "COP",
      "value": 4407.2327617433
    },
    "CRC": {
      "code": "CRC",
      "value": 509.6540010482
    },
    "CUC": {
      "code": "CUC",
      "value": 1
    },
    "CUP": {
      "code": "CUP",
      "value": 24
    },
    "CVE": {
      "code": "CVE",
      "value": 105.6046442001
    },
    "CZK": {
      "code": "CZK",
      "value": 24.1444425942
    },
    "DAI": {
      "code": "DAI",
      "value": 0.9993212808
    },
    "DJF": {
      "code": "DJF",
      "value": 177.721
    },
    "DKK": {
      "code": "DKK",
      "value": 7.151930803
    },
    "DOP": {
      "code": "DOP",
      "value": 60.8005921023
    },
    "DOT": {
      "code": "DOT",
      "value": 0.1406098489
    },
    "DZD": {
      "code": "DZD",
      "value": 135.8604323654
    },
    "EGP": {
      "code": "EGP",
      "value": 50.8398666639
    },
    "ERN": {
      "code": "ERN",
      "value": 15
    },
    "ETB": {
      "code": "ETB",
      "value": 126.5681457335
    },
    "ETH": {
      "code": "ETH",
      "value": 0.0002940418
    },
    "EUR": {
      "code": "EUR",
      "value": 0.9585001075
    },
    "FJD": {
      "code": "FJD",
      "value": 2.3068403579
    },
    "FKP": {
      "code": "FKP",
      "value": 0.7955564486
    },
    "GBP": {
      "code": "GBP",
      "value": 0.7951001168
    },
    "GEL": {
      "code": "GEL",
      "value": 2.7899803898
    },
    "GGP": {
      "code": "GGP",
      "value": 0.7955565285
    },
    "GHS": {
      "code": "GHS",
      "value": 14.6440827233
    },
    "GIP": {
      "code": "GIP",
      "value": 0.7955563024
    },
    "GMD": {
      "code": "GMD",
      "value": 73.0792622311
    },
    "GNF": {
      "code": "GNF",
      "value": 8649.3716640081
    },
    "GTQ": {
      "code": "GTQ",
      "value": 7.6924715275
    },
    "GYD": {
      "code": "GYD",
      "value": 208.7214499304
    },
    "HKD": {
      "code": "HKD",
      "value": 7.7586412944
    },
    "HNL": {
      "code": "HNL",
      "value": 25.3682550455
    },
    "HRK": {
      "code": "HRK",
      "value": 6.7308809597
    },
    "HTG": {
      "code": "HTG",
      "value": 132.7357082632
    },
    "HUF": {
      "code": "HUF",
      "value": 393.2345806369
    },
    "IDR": {
      "code": "IDR",
      "value": 16201.909587277
    },
    "ILS": {
      "code": "ILS",
      "value": 3.6772505967
    },
    "IMP": {
      "code": "IMP",
      "value": 0.7955559576
    },
    "INR": {
      "code": "INR",
      "value": 85.3320790908
    },
    "IQD": {
      "code": "IQD",
      "value": 1307.320595268
    },
    "IRR": {
      "code": "IRR",
      "value": 41967.311184576
    },
    "ISK": {
      "code": "ISK",
      "value": 139.0599022343
    },
    "JEP": {
      "code": "JEP",
      "value": 0.7955565051
    },
    "JMD": {
      "code": "JMD",
      "value": 155.6909258806
    },
    "JOD": {
      "code": "JOD",
      "value": 0.71
    },
    "JPY": {
      "code": "JPY",
      "value": 157.8114436591
    },
    "KES": {
      "code": "KES",
      "value": 129.5688212306
    },
    "KGS": {
      "code": "KGS",
      "value": 86.570839023
    },
    "KHR": {
      "code": "KHR",
      "value": 4014.9084792986
    },
    "KMF": {
      "code": "KMF",
      "value": 471.5102088588
    },
    "KPW": {
      "code": "KPW",
      "value": 900.0661312923
    },
    "KRW": {
      "code": "KRW",
      "value": 1470.9274939696
    },
    "KWD": {
      "code": "KWD",
      "value": 0.3076900575
    },
    "KYD": {
      "code": "KYD",
      "value": 0.83333
    },
    "KZT": {
      "code": "KZT",
      "value": 522.118052294
    },
    "LAK": {
      "code": "LAK",
      "value": 21745.557254995
    },
    "LBP": {
      "code": "LBP",
      "value": 89492.818569983
    },
    "LKR": {
      "code": "LKR",
      "value": 291.5974685043
    },
    "LRD": {
      "code": "LRD",
      "value": 183.29665005
    },
    "LSL": {
      "code": "LSL",
      "value": 18.0253831711
    },
    "LTC": {
      "code": "LTC",
      "value": 0.0099235866
    },
    "LTL": {
      "code": "LTL",
      "value": 3.3115339204
    },
    "LVL": {
      "code": "LVL",
      "value": 0.6740459095
    },
    "LYD": {
      "code": "LYD",
      "value": 4.9104906112
    },
    "MAD": {
      "code": "MAD",
      "value": 10.0824513306
    },
    "MATIC": {
      "code": "MATIC",
      "value": 2.0536244602
    },
    "MDL": {
      "code": "MDL",
      "value": 18.3388125217
    },
    "MGA": {
      "code": "MGA",
      "value": 4702.8257282002
    },
    "MKD": {
      "code": "MKD",
      "value": 58.8235907429
    },
    "MMK": {
      "code": "MMK",
      "value": 2097.145226364
    },
    "MNT": {
      "code": "MNT",
      "value": 3423.9721156967
    },
    "MOP": {
      "code": "MOP",
      "value": 7.9593113758
    },
    "MRO": {
      "code": "MRO",
      "value": 356.999828
    },
    "MRU": {
      "code": "MRU",
      "value": 40.1603945767
    },
    "MUR": {
      "code": "MUR",
      "value": 46.9450847778
    },
    "MVR": {
      "code": "MVR",
      "value": 15.4497524987
    },
    "MWK": {
      "code": "MWK",
      "value": 1732.5697840562
    },
    "MXN": {
      "code": "MXN",
      "value": 20.3202626795
    },
    "MYR": {
      "code": "MYR",
      "value": 4.4670706236
    },
    "MZN": {
      "code": "MZN",
      "value": 63.4742586043
    },
    "NAD": {
      "code": "NAD",
      "value": 18.6508032325
    },
    "NGN": {
      "code": "NGN",
      "value": 1536.984047479
    },
    "NIO": {
      "code": "NIO",
      "value": 36.6255992016
    },
    "NOK": {
      "code": "NOK",
      "value": 11.3538118015
    },
    "NPR": {
      "code": "NPR",
      "value": 136.4957037815
    },
    "NZD": {
      "code": "NZD",
      "value": 1.7746603376
    },
    "OMR": {
      "code": "OMR",
      "value": 0.3837100754
    },
    "OP": {
      "code": "OP",
      "value": 0.5282459478
    },
    "PAB": {
      "code": "PAB",
      "value": 0.9987901539
    },
    "PEN": {
      "code": "PEN",
      "value": 3.7476603915
    },
    "PGK": {
      "code": "PGK",
      "value": 4.0308604466
    },
    "PHP": {
      "code": "PHP",
      "value": 57.89387907
    },
    "PKR": {
      "code": "PKR",
      "value": 278.1333082584
    },
    "PLN": {
      "code": "PLN",
      "value": 4.0939107054
    },
    "PYG": {
      "code": "PYG",
      "value": 7823.6486903728
    },
    "QAR": {
      "code": "QAR",
      "value": 3.6375605762
    },
    "RON": {
      "code": "RON",
      "value": 4.7729805049
    },
    "RSD": {
      "code": "RSD",
      "value": 111.4915318951
    },
    "RUB": {
      "code": "RUB",
      "value": 106.1755289145
    },
    "RWF": {
      "code": "RWF",
      "value": 1375.5557634877
    },
    "SAR": {
      "code": "SAR",
      "value": 3.7424005483
    },
    "SBD": {
      "code": "SBD",
      "value": 8.371752372
    },
    "SCR": {
      "code": "SCR",
      "value": 14.734242444
    },
    "SDG": {
      "code": "SDG",
      "value": 601.5
    },
    "SEK": {
      "code": "SEK",
      "value": 11.0006315643
    },
    "SGD": {
      "code": "SGD",
      "value": 1.357130159
    },
    "SHP": {
      "code": "SHP",
      "value": 0.7951001011
    },
    "SLL": {
      "code": "SLL",
      "value": 22681.226356106
    },
    "SOL": {
      "code": "SOL",
      "value": 0.0051227278
    },
    "SOS": {
      "code": "SOS",
      "value": 579.1757159942
    },
    "SRD": {
      "code": "SRD",
      "value": 35.1422869342
    },
    "STD": {
      "code": "STD",
      "value": 23499.544284687
    },
    "STN": {
      "code": "STN",
      "value": 23.4995351586
    },
    "SVC": {
      "code": "SVC",
      "value": 8.75
    },
    "SYP": {
      "code": "SYP",
      "value": 13001.87107798
    },
    "SZL": {
      "code": "SZL",
      "value": 18.6535827429
    },
    "THB": {
      "code": "THB",
      "value": 34.0526851762
    },
    "TJS": {
      "code": "TJS",
      "value": 10.8773916251
    },
    "TMT": {
      "code": "TMT",
      "value": 3.5
    },
    "TND": {
      "code": "TND",
      "value": 3.1716505383
    },
    "TOP": {
      "code": "TOP",
      "value": 2.4010304038
    },
    "TRY": {
      "code": "TRY",
      "value": 35.0700963918
    },
    "TTD": {
      "code": "TTD",
      "value": 6.8014310904
    },
    "TWD": {
      "code": "TWD",
      "value": 32.8378656511
    },
    "TZS": {
      "code": "TZS",
      "value": 2400.6412023958
    },
    "UAH": {
      "code": "UAH",
      "value": 41.9432145463
    },
    "UGX": {
      "code": "UGX",
      "value": 3662.2676887819
    },
    "USD": {
      "code": "USD",
      "value": 1
    },
    "USDC": {
      "code": "USDC",
      "value": 0.9993745349
    },
    "USDT": {
      "code": "USDT",
      "value": 1.001119375
    },
    "UYU": {
      "code": "UYU",
      "value": 43.8554278789
    },
    "UZS": {
      "code": "UZS",
      "value": 12848.512435582
    },
    "VEF": {
      "code": "VEF",
      "value": 5170072.5417775
    },
    "VES": {
      "code": "VES",
      "value": 51.700708245
    },
    "VND": {
      "code": "VND",
      "value": 25422.159763035
    },
    "VUV": {
      "code": "VUV",
      "value": 124.5189821378
    },
    "WST": {
      "code": "WST",
      "value": 2.8376952513
    },
    "XAF": {
      "code": "XAF",
      "value": 628.7595132003
    },
    "XAG": {
      "code": "XAG",
      "value": 0.0340559018
    },
    "XAU": {
      "code": "XAU",
      "value": 0.0003814907
    },
    "XCD": {
      "code": "XCD",
      "value": 2.7
    },
    "XDR": {
      "code": "XDR",
      "value": 0.7624501164
    },
    "XOF": {
      "code": "XOF",
      "value": 628.7595113546
    },
    "XPD": {
      "code": "XPD",
      "value": 0.0010416684
    },
    "XPF": {
      "code": "XPF",
      "value": 114.3014095221
    },
    "XPT": {
      "code": "XPT",
      "value": 0.001086124
    },
    "XRP": {
      "code": "XRP",
      "value": 0.4582077504
    },
    "YER": {
      "code": "YER",
      "value": 248.8046029468
    },
    "ZAR": {
      "code": "ZAR",
      "value": 18.6588320284
    },
    "ZMK": {
      "code": "ZMK",
      "value": 9001.2
    },
    "ZMW": {
      "code": "ZMW",
      "value": 27.7710351734
    },
    "ZWL": {
      "code": "ZWL",
      "value": 63652.216183591
    }
}
}')
    
    document.querySelector(".output").style.display = "block"

    for (let key of Object.keys(rJson["data"])) {
        myStr += ` <tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                    </tr> 
                `
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;

}
const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value
    populate(value, currency)
})