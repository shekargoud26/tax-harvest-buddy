
import { LTCGData, LTCGScheme } from "@/types/ltcg";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { LoaderCircle } from "lucide-react";

interface ResultsTableProps {
  data: LTCGData | null;
  isLoading?: boolean;
}

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2
  }).format(value);
};

const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 3
  }).format(value);
};

const ResultsTable = ({ data, isLoading = false }: ResultsTableProps) => {
  // Total LTCG calculation
  const getTotalLTCG = (): number => {
    if (!data) return 0;
    return Object.keys(data).reduce((sum, id) => {
      return sum + data[id].ltcg;
    }, 0);
  };

  const totalLTCG = getTotalLTCG();
  
  // Generate skeleton rows for loading state
  const renderSkeletonRows = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <tr key={`skeleton-${index}`} className="hover:bg-gray-50">
        <td className="py-3 px-4"><Skeleton className="h-5 w-16" /></td>
        <td className="py-3 px-4"><Skeleton className="h-5 w-64" /></td>
        <td className="py-3 px-4"><Skeleton className="h-5 w-20" /></td>
        <td className="py-3 px-4"><Skeleton className="h-5 w-16" /></td>
        <td className="py-3 px-4"><Skeleton className="h-5 w-24" /></td>
        <td className="py-3 px-4"><Skeleton className="h-5 w-24" /></td>
        <td className="py-3 px-4"><Skeleton className="h-5 w-24" /></td>
      </tr>
    ));
  };

  return (
    <section className="min-h-screen px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Your Tax Harvest Results
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <LoaderCircle className="h-5 w-5 animate-spin text-primary" />
              <span>Analyzing your portfolio...</span>
            </div>
          ) : (
            "Below is the analysis of your portfolio with potential tax saving opportunities."
          )}
        </p>
        
        {/* Summary stats */}
        <div className="mb-10 max-w-md mx-auto bg-mild-green-50 p-6 rounded-lg border border-mild-green-200 shadow-sm">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2 text-gray-700">Total LTCG Value</h3>
            {isLoading ? (
              <Skeleton className="h-10 w-32 mx-auto" />
            ) : (
              <>
                <p className={cn(
                  "text-3xl font-bold", 
                  totalLTCG >= 0 ? "text-ltcg-green" : "text-red-500"
                )}>
                  {formatCurrency(totalLTCG)}
                </p>
                {totalLTCG > 0 && (
                  <p className="mt-2 text-sm text-gray-500">
                    You can save up to {formatCurrency(Math.min(totalLTCG, 100000) * 0.1)} in taxes
                  </p>
                )}
              </>
            )}
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">ID</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Scheme Name</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">LTCG Eligible Units</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Latest NAV</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Market Value (₹)</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Purchase Cost (₹)</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 ltcg-column">LTCG (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {isLoading ? (
                renderSkeletonRows()
              ) : (
                data && Object.keys(data).map((id) => {
                  const scheme = data[id];
                  return (
                    <tr key={id} className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-800">{id}</td>
                      <td className="py-3 px-4 text-sm text-gray-800">{scheme.scheme_name}</td>
                      <td className="py-3 px-4 text-sm text-gray-800">{formatNumber(scheme.remaining_ltcg_eligible)}</td>
                      <td className="py-3 px-4 text-sm text-gray-800">{formatNumber(scheme.latest_nav)}</td>
                      <td className="py-3 px-4 text-sm text-gray-800">{formatCurrency(scheme.inr_value)}</td>
                      <td className="py-3 px-4 text-sm text-gray-800">{formatCurrency(scheme.eligible_cost)}</td>
                      <td className={cn(
                        "py-3 px-4 text-sm font-medium ltcg-column",
                        scheme.ltcg >= 0 ? "ltcg-positive" : "ltcg-negative"
                      )}>
                        {formatCurrency(scheme.ltcg)}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            * Long Term Capital Gains up to ₹1,00,000 are exempt from tax
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsTable;
