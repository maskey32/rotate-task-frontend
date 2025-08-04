interface IRiskAsset {
    id: string;
    name: string;
    ipAddress: string;
    contextualRisk: 'Critical' | 'High' | 'Medium' | 'Low';
}


interface IDataTableProps {
    data: IRiskAsset[];
}

type RiskType = "Critical" | "High" | "Medium" | "Low";

interface IRiskBadgeProps {
  risk: RiskType;
}

interface IRiskLevel {
    level: string;
    count: number;
    color: string;
    bgColor: string;
    textColor: string;
}

interface IRiskChartProps {
    riskLevels: IRiskLevel[];
}

interface IPaginationProps {
    currentPage: number;
    totalPages: number;
    totalItems: number;
}