interface ISidebarItem {
  id: string;
  icon: React.ComponentType<any>;
  label: string;
  isSelected?: boolean;
}

interface INavItems {
  mainSidebarItems: ISidebarItem[];
  bottomSidebarItems: ISidebarItem[];
}