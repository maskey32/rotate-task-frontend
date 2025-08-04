import { riskTableStyles } from "../../../styles/risktable";
import DataTable from "./DataTable";
import { riskData, riskLevels } from "../../../lib/constants/dashboard/main";
import RiskChart from "./RiskChart";

export default function RiskDataTable() {
    return (
        <div className={riskTableStyles.container}>
            <h1 className={riskTableStyles.title}>Lorem Ipsum Dolor Sit</h1>
            <div className={riskTableStyles.content}>
                <DataTable data={riskData} />
                <RiskChart riskLevels={riskLevels} />
            </div>
        </div>
    );
}