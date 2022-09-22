const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.1,
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400],
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500],
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100],
  },
];

//add cool looking console.log frame function for style-points
const outputFrame = (output) => {
  console.log("/* Expected Results:------------------------------");
  console.log(output);
  console.log("*/------------------------------------------------");
};

// Helper function to get that summary of all sales
const salesSum = (salesArray) => {
  let output = salesArray.reduce((partialSum, i) => {
    return partialSum + i;
  }, 0);
  return output;
};

const calculateSalesTax = (salesData, taxRates) => {
  let result = {};
  for (const company of salesData) {
    // Some variables for readability and reusability
    let cName = company.name;
    let cSales = company.sales;
    let cProvince = company.province;
    // Make a fancy if else statement in case there are same company names
    !result[cName]
      ? (result[cName] = {
          totalSales: salesSum(cSales),
          totalTaxes: salesSum(cSales) * taxRates[cProvince],
        })
      : (result[cName].totalSales += salesSum(cSales));
    result[cName].totalTaxes += salesSum(cSales) * taxRates[cProvince];
  }
  return outputFrame(result);
};

const results = calculateSalesTax(companySalesData, salesTaxRates);
