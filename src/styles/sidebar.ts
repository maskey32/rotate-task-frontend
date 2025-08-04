import { css } from "../../styled-system/css";

export const sidebarStyles = {
    container: css({
        position: 'relative',
        display: { base: 'none', lg: 'flex' },
        flexDirection: 'column',
        justifyContent: 'space-between',
        px: '16px',
        py: '28px',
        shadow: 'md',
        bg: 'white',
        borderRadius: '12px',
        transition: 'all 0.3s ease',
        flexShrink: 0
    }),
    collapsed: css({
        width: '70px'
    }),
    expanded: css({
        width: '250px'
    }),
    toggleButton: css({
        position: 'absolute',
        right: '-16px',
        width: '32px',
        height: '32px',
        bg: '#00732E',
        border: '3px solid #F0F1F3',
        borderRadius: 'full',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        _hover: {
        bg: '#00732E/80'
        }
    }),
    navContainer: css({
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        overflowY: 'auto'
    }),
    sidebarItem: css({
        width: 'full',
        display: 'flex',
        alignItems: 'center',
        px: '12px',
        py: '10px',
        borderRadius: '8px',
        textAlign: 'left',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        border: 'none',
        bg: 'transparent'
    }),
    sidebarItemSelected: css({
        bg: '#E9FAF0',
        color: '#525D73'
    }),
    sidebarItemUnselected: css({
        color: '#525D73',
        _hover: {
        bg: 'gray.50',
        color: 'gray.900'
        }
    }),
    iconSelected: css({
        width: '16px',
        height: '16px',
        flexShrink: 0,
        transition: 'color 0.2s ease',
        color: '#00732E'
    }),
    iconUnselected: css({
        width: '16px',
        height: '16px',
        flexShrink: 0,
        transition: 'color 0.2s ease',
        color: '#A3A9B6'
    }),
    itemLabel: css({
        fontSize: '15px',
        fontWeight: 'normal',
        transition: 'color 0.2s ease',
        ml: '8px'
    }),
    userSection: css({
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    }),
    userInfo: css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }),
    userDetails: css({
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
    }),
    userName: css({
        color: '#525D73',
        fontSize: '15px',
        fontWeight: 'normal',
        display: 'flex',
        flexDirection: 'column'
    })
};