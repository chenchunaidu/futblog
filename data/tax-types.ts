interface TaxSlabItem {
  lowerLimit: number;
  upperLimit: number;
  percentage: number;
}

interface TaxSlabs {
  [x: string]: TaxSlabItem[];
}

export interface Configuration {
  name: string;
  description: string;
  taxSlabs: TaxSlabs;
  allowedInvestmentOptions: string[];
  exemptions?: [];
}

export const taxAvenues = {
  "80C": {
    name: "80C -  Investments",
    value: "80C",
    description: "Investments",
    limit: 150000,
    avenues: [],
  },
  // "80CCC": {
  //   name: "80CCC",
  //   value: "80CCC",
  //   description: "Life Insurance Corporation annuity premiums up to ₹ 150,000",
  //   limit: 150000,
  //   avenues: [],
  // },
  // "80CCD": {
  //   name: "80CCD",
  //   value: "80CCD",
  //   description: "Employee pension contributions, up to 10 percent of salary",
  //   limit: 150000,
  //   avenues: [],
  // },
  // "80CCG": {
  //   name: "80CCG",
  //   value: "80CCG",
  //   description:
  //     "Rajiv Gandhi Equity Savings Scheme, 2013: 50 percent of investment or ₹25,000 (whichever is lower), up to ₹ 50,000",
  //   limit: 150000,
  //   avenues: [],
  // },
  "80D": {
    name: "80D Medical insurance premium",
    value: "80D",
    description:
      "Medical-insurance premium, up to ₹ 25,000 for self/family and up to ₹ 15,000 for parents (up to ₹ 50,000 for senior citizens); premium cannot be paid in cash.",
    limit: 150000,
    avenues: [],
  },
  // "80DD": {
  //   name: "80DD",
  //   value: "80DD",
  //   description:
  //     "Expenses for medical treatment (including nursing), training and rehabilitation of a permanently-disabled dependent, up to ₹ 75,000 (₹ 1,25,000 for a severe disability, as defined by law)",
  //   limit: 150000,
  //   avenues: [],
  // },
  // "80DDB": {
  //   name: "80DDB Medical expenses",
  //   value: "80DDB",
  //   description:
  //     "Medical expenses, up to ₹ 40,000 (₹ 100,000 for senior citizens)",
  //   limit: 150000,
  //   avenues: [],
  // },
  "80E": {
    name: "80E Student-loan interest",
    value: "80E",
    description: "Student-loan interest",
    limit: 150000,
    avenues: [],
  },
  // "80EE": {
  //   value: "80EE",
  //   name: "80EE - Home-loan interest",
  //   description:
  //     "Home-loan interest (up to 100,000 on a loan up to ₹ 2.5 million)",
  //   limit: 150000,
  //   avenues: [],
  // },
  "80G": {
    name: "80G - Charity",
    value: "80G",
    description: "Charitable contributions (50 or 100 percent)",
    limit: 150000,
    avenues: [],
  },
  // "80GG": {
  //   name: "80GG - House rent allowance",
  //   value: "80GG",
  //   description:
  //     " Rent minus 10 percent of income, up to ₹ 5,000 per month or 25 percent of income (whatever is less)",
  //   limit: 150000,
  //   avenues: [],
  // },
  "80TTA": {
    name: "80TTA - Interest on savings",
    value: "80TTA",
    description: " Interest on savings, up to ₹ 10,000",
    limit: 150000,
    avenues: [],
  },
  "80TTB": {
    name: "80TTB",
    value: "80TTB",
    description: "Time deposit interest for senior citizens, up to ₹ 50,000",
    limit: 150000,
    avenues: [],
  },
  "80U": {
    name: "80U",
    value: "80U",
    description:
      "Certified-disability deduction (₹ 75,000; ₹ 125,000 for a severe disability)",
    limit: 150000,
    avenues: [],
  },
  "87A": {
    name: "87A",
    value: "87A",
    description:
      "Rebate (up to ₹ 12,500) for individuals with income up to ₹ 5,00,000",
    limit: 150000,
    avenues: [],
  },
  "80RRB": {
    name: "80RRB Certified royalties on a patent",
    value: "80RRB",
    description:
      " Certified royalties on a patent registered on or after 1 April 2003, up to ₹ 300,000",
    limit: 150000,
    avenues: [],
  },
  "80QQB": {
    name: "80QQB Certified book royalties",
    value: "80QQB",
    description:
      "Certified book royalties (except textbooks), up to ₹ 300,000 ",
    limit: 150000,
    avenues: [],
  },
};

export const taxTypesOptions = [
  {
    label: "New Tax Regime",
    value: "newTaxRegime",
    description:
      "The new income tax regime is beneficial for people who make low investments. As the new regime offers seven lower income tax slabs, anyone paying taxes without claiming tax deductions can benefit from paying a lower rate of tax under the new tax regime. For instance, assessee having total income before deduction up-to Rs 12 lakh will have higher tax liability under the old system if they have investments less than Rs 1.91 lakh. Therefore, if you invest less in tax-saving schemes, go for the new regime.",
  },
  {
    label: "Old Tax Regime",
    value: "oldTaxRegime",
    description:
      "if you already have in place a financial plan for wealth creation by making investments in tax-saving instruments; mediclaim and life insurance; making payments of children’s tuition fees; payment of EMIs on education loan ;buying a house with a home loan; and so on, the old regime helps you with higher tax deductions and lower tax outgo",
  },
];

export const newTaxRegimeConfiguration: Configuration = {
  name: "New Tax Regime",
  description:
    "The new income tax regime is beneficial for people who make low investments. As the new regime offers seven lower income tax slabs, anyone paying taxes without claiming tax deductions can benefit from paying a lower rate of tax under the new tax regime. For instance, assessee having total income before deduction up-to Rs 12 lakh will have higher tax liability under the old system if they have investments less than Rs 1.91 lakh. Therefore, if you invest less in tax-saving schemes, go for the new regime.",
  taxSlabs: {
    normal: [
      {
        lowerLimit: 0,
        upperLimit: 250000,
        percentage: 0,
      },
      {
        lowerLimit: 250000,
        upperLimit: 500000,
        percentage: 5,
      },
      {
        lowerLimit: 500000,
        upperLimit: 750000,
        percentage: 10,
      },
      {
        lowerLimit: 750000,
        upperLimit: 1000000,
        percentage: 15,
      },
      {
        lowerLimit: 1000000,
        upperLimit: 1250000,
        percentage: 20,
      },
      {
        lowerLimit: 1250000,
        upperLimit: 1500000,
        percentage: 25,
      },
      {
        lowerLimit: 1500000,
        upperLimit: -1,
        percentage: 30,
      },
    ],
  },
  allowedInvestmentOptions: [],
};

export const oldTaxRegimeConfiguration: Configuration = {
  name: "Old Tax Regime",
  description:
    "if you already have in place a financial plan for wealth creation by making investments in tax-saving instruments; mediclaim and life insurance; making payments of children’s tuition fees; payment of EMIs on education loan ;buying a house with a home loan; and so on, the old regime helps you with higher tax deductions and lower tax outgo",
  taxSlabs: {
    normal: [
      {
        lowerLimit: 0,
        upperLimit: 250000,
        percentage: 0,
      },
      {
        lowerLimit: 250000,
        upperLimit: 500000,
        percentage: 5,
      },
      {
        lowerLimit: 500000,
        upperLimit: 750000,
        percentage: 20,
      },
      {
        lowerLimit: 750000,
        upperLimit: 1000000,
        percentage: 20,
      },
      {
        lowerLimit: 1000000,
        upperLimit: -1,
        percentage: 30,
      },
    ],
  },
  allowedInvestmentOptions: [
    "80C ",
    "House rent allowance(HRA)",
    "80D Medical insurance",
    "80DD Medical expenses",
    "80E Student loan interest",
    "80EE Home loan interest",
  ],
};

interface TaxConfiguration {
  [x: string]: Configuration;
}

export const taxConfiguration: TaxConfiguration = {
  newTaxRegime: newTaxRegimeConfiguration,
  oldTaxRegime: oldTaxRegimeConfiguration,
};
