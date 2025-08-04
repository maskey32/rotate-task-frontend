import { chartStyles } from "../../../styles/chart";
import { getDotColor } from "../../../lib/utils/dashboard";

export default function RiskChart({ riskLevels }: IRiskChartProps) {
    const totalCritical = riskLevels.find(item => item.level === "Critical")?.count || 0;

    return (
        <div className={chartStyles.container}>
            <h3 className={chartStyles.title}>Contextual Risk</h3>
        
            <div className={chartStyles.content}>
                <div className={chartStyles.legendContainer}>
                    {riskLevels.map((risk, index) => (
                        <div key={index} className={chartStyles.legendItem}>
                            <div className={`${chartStyles.dot} ${getDotColor(risk.level)}`}></div>
                            
                            <span className={chartStyles.legendText}>
                                <span className={chartStyles.count}>{risk.count}</span> {risk.level}
                            </span>
                        </div>
                    ))}
                </div>
                
                <div className={chartStyles.chartContainer}>
                    <div className={chartStyles.chartWrapper}>
                        <svg className={chartStyles.svg} viewBox="0 0 48 48">
                            <circle 
                                cx="24" 
                                cy="24" 
                                r="20" 
                                fill="none" 
                                stroke="#f3f4f6" 
                                strokeWidth="3"
                            />
                            <circle 
                                cx="24" 
                                cy="24" 
                                r="20" 
                                fill="none" 
                                stroke="#dc2626" 
                                strokeWidth="3"
                                strokeDasharray="125.6"
                                strokeDashoffset="0"
                                strokeLinecap="round"
                            />
                        </svg>
                        
                        <div className={chartStyles.centerNumber}>
                            <span className={chartStyles.number}>
                                {totalCritical}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}