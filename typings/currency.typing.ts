export interface Currency {
  id: string;
  titleFa: string;
  titleEn: string | null;
  isoCode: string;
  length: number;
  margins: Margins;
  commissionRates: CommissionRate[];
  minCommissionAmount: number | null;
  maxCommissionAmount: number | null;
}

export interface Margins {
  selling: number;
  buying: number;
}

export interface CommissionRate {
  from: number;
  till: number;
  amount: string;
  type: CommissionType;
}
export type CommissionType = "FIXED" | "PERCENTAGE";
