import { dashboardStyles } from "../../../styles/dashboard";
import { leftPaneData } from "../../../lib/constants/dashboard/main";

export default function LeftPane() {
    return (
        <div className={dashboardStyles.leftPanel}>
            {leftPaneData.map(section => (
                <section key={section.id}>
                    <h2 className={dashboardStyles.sectionTitle}>{section.heading}</h2>
                    <p className={dashboardStyles.sectionText}>{section.paragraph}</p>
                </section>
            ))}
        </div>
    );
}