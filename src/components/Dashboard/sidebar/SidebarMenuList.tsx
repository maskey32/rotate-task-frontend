import { useState } from "react";

import { sidebarStyles } from "../../../styles/sidebar";
import { css } from "../../../../styled-system/css";

export default function SidebarMenuList({ item, isCollapsed, selectedItem, setSelectedItem }: ISidebarMenuListProps) {
    const Icon = item.icon;
    const isSelected = selectedItem === item.id;

    const handleItemClick = (itemId: string) => {
        setSelectedItem(itemId);
    };

    return (
        <button
            onClick={() => handleItemClick(item.id)}
            className={`${sidebarStyles.sidebarItem} ${
                isSelected ? sidebarStyles.sidebarItemSelected : sidebarStyles.sidebarItemUnselected
            } ${isCollapsed ? css({ justifyContent: "center" }) : css({ gap: "8px" })}`}
        >
            <Icon 
                className={isSelected ? sidebarStyles.iconSelected : sidebarStyles.iconUnselected}
            />
            {!isCollapsed && (
                <span className={sidebarStyles.itemLabel}>
                    {item.label}
                </span>
            )}
        </button>
    );
}