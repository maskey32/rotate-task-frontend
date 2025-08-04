interface ISidebarMenuListProps {
    item: ISidebarItem;
    isCollapsed: boolean;
    selectedItem: string;
    setSelectedItem: (selectedItem: string) => void;
}

interface IToggleButtonProps {
    isCollapsed: boolean;
    setIsCollapsed: (isCollapsed: boolean) => void;
}

interface IUSerProfileProps {
    isCollapsed: boolean;
}