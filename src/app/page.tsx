import { dashboardStyles } from "../styles/dashboard";
import { LeftPane, RightPane } from "../components/Dashboard/main";

export default function Dashboard() {
  return (
    <main className={dashboardStyles.container}>
      <div className={dashboardStyles.content}>
        <LeftPane />
        <RightPane />
      </div>
    </main>
  );
}