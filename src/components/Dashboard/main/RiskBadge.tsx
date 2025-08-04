import { getRiskStyles } from "../../../lib/utils/dashboard";

export default function RiskBadge({ risk }: IRiskBadgeProps) {
    return (
        <span className={getRiskStyles(risk)}>
            {risk}
        </span>
    );
}