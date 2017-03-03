const pricing_data = {
  basic: {
    name: "Basic",
    price: {
      btc: 0.001,
      usd: 0.99
    },
    features: [
      "250 Trades",
      "Import trading, spending, income and mining",
      "Calculate capital gains with FIFO, LIFO, or Average",
      "Download as .CSV"
    ]
  },
  premium: {
    name: "Premium",
    price: {
      btc: 0.005,
      usd: 4.99
    },
    features: [
      "1000 Trades",
      "Import trading, spending, income and mining",
      "Calculate capital gains with FIFO, LIFO, or Average",
      "Bitcoin, Ether, Monero, or any alt-coin",
      "View sales, balances and cost-basis",
      "Download as .CSV, 1040 (Schedule D), Form 8949 data",
      "Export to TurboTax®"
    ]
  },
  trader: {
    name: "Trader",
    price: {
      btc: 0.01,
      usd: 9.99
    },
    features: [
      "Unlimited trades",
      "Calculate capital gains with FIFO, LIFO, or Average",
      "Bitcoin, Ether, Monero, or any alt-coin",
      "View sales, balances and cost-basis",
      "1040 (Schedule D), Form 8949 data",
      "Export to TurboTax®"
    ]
  },
  whale: {
    name: "Whale",
    price: {
      btc: "1.00",
      usd: null
    },
    features: [
      "Dedicated CPA",
      "Contact Us for More Information"
    ]
  }
}

export default pricing_data