import { sidebarStyles } from "../../../styles/sidebar";
import { LogOutIcon, UserProfileIcon } from "@/components/svg/sidebar";

export default function UserProfile({ isCollapsed }: IUSerProfileProps) {
    return (
        <div className={sidebarStyles.userInfo}>
            <div className={sidebarStyles.userDetails}>
                <UserProfileIcon  width={isCollapsed ? "40px" : "" } />
                {!isCollapsed && (
                    <div className={sidebarStyles.userName}>
                        <span>Lorem</span>
                        <span>Lorem</span>
                    </div>
                )}
            </div>
            {!isCollapsed && (
                <LogOutIcon />
            )}
        </div>
    );
}