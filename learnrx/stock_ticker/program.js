'use strict';

module.exports = function (pricesNASDAQ, printRecord) {
    var microsoftPrices,
        now = new Date(),
        tenDaysAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 10);

    microsoftPrices =
        pricesNASDAQ.
            filter(function (priceRecord) {
                return priceRecord.name === 'MSFT' && priceRecord.timeStamp > tenDaysAgo
            });

    microsoftPrices.
        forEach(function (priceRecord) {
            printRecord(priceRecord);
        });
}

function printRecord(priceRecord) {
    console.log(priceRecord)
}