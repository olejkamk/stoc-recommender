import data from '../data/data.json';

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getStockData = async () => {
  // To Do: Use a real API, when it's available
  //   try {
  //     const apiUrl = 'https://apiUrl';
  //     const response = await fetch(apiUrl);
  //     return await response.json();
  //   } catch (error) {
  //     console.error(error);
  //   }
  const stockSymbols = data.stockSymbols;
  return initStockPrice(stockSymbols);
};

export default getStockData;

// Generate Stock data with value based on stock array and currentDay dateDay
/**
 * @param { Array } symbols
 * @param { Number } minValue
 * @param { Number } maxValue
 */
export const initStockPrice = (
  symbols,
  minValue = -30,
  maxValue = 30
) => {
  const currentDayDate =  new Date().getDate();
  let newStockArray = [];

  symbols.map( function(item, index) {
    let stocksDataObj = {};
    stocksDataObj.id = index;
    stocksDataObj.symbol = item;
    stocksDataObj.stockPrices = [];

    // 10 days
    for (let i = 0; i < 10; i++) {
      let dateDataObj = {};

      dateDataObj.date = currentDayDate - i;
      dateDataObj.price = randomInteger(minValue, maxValue);
      stocksDataObj.stockPrices.push(dateDataObj);
    }

    stocksDataObj.socialMediaCount = initSocialMediaCount();

    newStockArray.push(stocksDataObj);
  })

  return newStockArray;
};


 const initSocialMediaCount = (minShared = 1, maxShared = 200) => {
  let socialMediaCountArray = [];
  let totalBuyRating = 0;
  let totalHoldRating = 0;
  let totalSellRating = 0;

  const socialMediaArray = data.socialMedia;

  for (let i = 0; i < socialMediaArray.length; i++) {
    let socialMediaObject = {};
    let buyRating = randomInteger(minShared, maxShared);
    let holdRating = randomInteger(minShared, maxShared);
    let sellRating = randomInteger(minShared, maxShared);

    socialMediaObject.name = socialMediaArray[i];
    socialMediaObject.buy = buyRating;
    socialMediaObject.hold = holdRating;
    socialMediaObject.sell = sellRating;
    socialMediaObject.bestTrend = chooseRating(buyRating, holdRating, sellRating).bestTrend

    socialMediaCountArray.push(socialMediaObject);

    totalBuyRating += buyRating;
    totalHoldRating += holdRating;
    totalSellRating += sellRating;
  }

  socialMediaCountArray.push({ totalBuyRating });
  socialMediaCountArray.push({ totalHoldRating });
  socialMediaCountArray.push({ totalSellRating });
  socialMediaCountArray.push(
      chooseRating(totalBuyRating, totalHoldRating, totalSellRating)
  );

  return socialMediaCountArray;
};


const chooseRating = (buy, hold, sell) => {
  let object = {};
  if (buy > hold && buy > sell) {
    object.value = buy;
    object.bestTrend = 'buy';
  } else if (hold > buy && hold > sell) {
    object.value = hold;
    object.bestTrend = 'hold';
  } else if (sell > buy && sell > hold) {
    object.value = sell;
    object.bestTrend = 'sell';
  }

  return object;
};
