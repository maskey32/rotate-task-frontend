import { BsDatabase } from "react-icons/bs";

import { tableStyles } from "../../../styles/table";
import RiskBadge from "./RiskBadge";
import { css } from "../../../../styled-system/css";
import Pagination from "./Pagination";

export default function DataTable({ data }: IDataTableProps) {
    return (
        <div className={tableStyles.container}>
            <table className={tableStyles.table}>
                <thead className={tableStyles.header}>
                    <tr>
                        <th className={tableStyles.headerCell}>Asset</th>
                        <th className={tableStyles.headerCell}>Contextual Risk</th>
                    </tr>
                </thead>
                
                <tbody className={tableStyles.body}>
                    {data.map((asset) => (
                        <tr key={asset.id}>
                            <td className={tableStyles.assetCell}>
                                <div className={tableStyles.assetContent}>
                                    <div className={tableStyles.iconContainer}>
                                        <div className={tableStyles.iconWrapper}>
                                            <BsDatabase className={css({ width: '20px', height: '20px', color: 'blue.600' })} />
                                        </div>
                                    </div>
                                
                                    <div className={tableStyles.assetInfo}>
                                        <div className={tableStyles.assetName}>
                                        {asset.name}
                                        </div>
                                        <div className={tableStyles.assetIp}>
                                        {asset.ipAddress}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            
                            <td className={tableStyles.riskCell}>
                                <RiskBadge risk={asset.contextualRisk} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <Pagination currentPage={1} totalPages={1} totalItems={2} />
        </div>
    );
}