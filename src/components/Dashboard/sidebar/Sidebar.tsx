"use client";

import { useState } from "react";

import { sidebarStyles } from "../../../styles/sidebar";
import { menuListItems } from "../../../lib/constants/sidebar";
import SidebarMenuList from "./SidebarMenuList";
import { Divider } from "../../../../styled-system/jsx";
import ToggleButton from "./ToggleButton";
import UserProfile from "./UserProfile";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("item4");

  return (
    <aside 
      className={`${sidebarStyles.container} ${
          isCollapsed ? sidebarStyles.collapsed : sidebarStyles.expanded
        }`}
      >
        <ToggleButton 
          isCollapsed={isCollapsed} 
          setIsCollapsed={setIsCollapsed} 
        />
            
        <nav className={sidebarStyles.navContainer}>
          {menuListItems.mainSidebarItems.map((item) => (
            <SidebarMenuList 
              key={item.id} 
              item={item} 
              isCollapsed={isCollapsed} 
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </nav>
            
        <div className={sidebarStyles.userSection}>
          <nav className={sidebarStyles.navContainer}>
            {menuListItems.bottomSidebarItems.map((item) => (
              <SidebarMenuList 
                key={item.id} 
                item={item} 
                isCollapsed={isCollapsed}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
              />
            ))}
          </nav>
          <Divider borderColor="#F9F9F9" />
          <UserProfile isCollapsed={isCollapsed} />
        </div>
    </aside>
  );
}