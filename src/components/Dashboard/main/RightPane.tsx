import { dashboardStyles } from "../../../styles/dashboard";
import NetworkDiagram from "./NetworkDiagram";
import RiskDataTable from "./RiskDataTable";

export default function RightPane() {
    return (
        <section className={dashboardStyles.rightPanel}>
            <NetworkDiagram />
            <RiskDataTable />
        </section>
    );
}