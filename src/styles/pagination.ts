import { css } from "../../styled-system/css";

export const paginationStyles = {
    container: css({
        px: '24px',
        py: '12px',
        borderTop: '1px solid #E0E2E7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }),
    content: css({
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        fontSize: '14px',
        color: 'gray.500'
    }),
    button: css({
        p: '4px',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        _hover: {
        bg: 'gray.200'
        },
        _disabled: {
        opacity: 0.5,
        cursor: 'not-allowed'
        }
    }),
    text: css({
        color: '#667085',
        fontSize: '13px',
        fontWeight: 'normal'
    }),
    icon: css({
        width: '16px',
        height: '16px'
    })
};
