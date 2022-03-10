import { Configuration } from "../data/tax-types";
import { IncomeDetailsForm } from "../components/tax/types";

interface TaxCalculationInput {
  incomeDetails: IncomeDetailsForm;
  configuration: Configuration;
}

export interface SlabWiseSegregation {
  name: string;
  taxApplied: number;
}

export interface CalculatedTax {
  income: number;
  tax: number;
  taxableIncome: number;
  slabWiseSegregation: SlabWiseSegregation[];
}

type CalculateTax = (input: TaxCalculationInput) => CalculatedTax;

// we needs total tax and slab wise tax
//

export const calculateTax: CalculateTax = ({
  incomeDetails,
  configuration,
}) => {
  const { income, investmentAmount = 0 } = incomeDetails;
  let tempIncome = income - investmentAmount;
  const { taxSlabs } = configuration;
  const slabWiseSegregation: SlabWiseSegregation[] = [];
  let tax = 0;

  taxSlabs["normal"]?.some(({ upperLimit, lowerLimit, percentage }) => {
    let taxApplied = 0;
    if (upperLimit === -1) {
      taxApplied = (tempIncome * percentage) / 100;
      tax += taxApplied;
      slabWiseSegregation.push({
        name: `> ${lowerLimit}`,
        taxApplied,
      });
      return true;
    }

    const limitDiff = upperLimit - lowerLimit;
    taxApplied = (Math.min(limitDiff, tempIncome) * percentage) / 100;
    tax += taxApplied;
    slabWiseSegregation.push({
      name: `${lowerLimit} - ${upperLimit}`,
      taxApplied,
    });
    tempIncome = tempIncome - limitDiff;
    if (tempIncome < 1) {
      return true;
    }
  });

  return {
    income,
    taxableIncome: income - investmentAmount,
    tax,
    slabWiseSegregation: slabWiseSegregation,
  };
};
