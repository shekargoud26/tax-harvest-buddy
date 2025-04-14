
export interface LTCGScheme {
  scheme_name: string;
  total_purchased_ltcg_eligible: number;
  total_sold_all_time: number;
  remaining_ltcg_eligible: number;
  latest_nav: number;
  inr_value: number;
  eligible_cost: number;
  ltcg: number;
}

export interface LTCGData {
  [id: string]: LTCGScheme;
}
