import { BiChevronLeft } from "react-icons/bi";

import { sidebarStyles } from "../../../styles/sidebar";
import { css } from "../../../../styled-system/css";

export default function ToggleButton({ isCollapsed, setIsCollapsed }: IToggleButtonProps) {
    return (
        <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={sidebarStyles.toggleButton}
        >
            <BiChevronLeft 
                className={
                    css({
                        width: '24px',
                        height: '24px',
                        color: 'white',
                        transition: 'transform 0.3s ease',
                        transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)'
                      })
                }
            />
        </button>
    );
}