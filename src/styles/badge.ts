import { css } from "../../styled-system/css";

export const badgeStyles = {
    base: css({
        display: 'inline-flex',
        alignItems: 'center',
        px: '16px',
        py: '4px',
        fontSize: '15px',
        fontWeight: 'bold',
        borderRadius: 'full',
        border: '1px solid'
    }),
    critical: css({
        bg: 'red.100',
        color: 'red.800',
        borderColor: 'red.200'
    }),
    high: css({
        bg: 'orange.100',
        color: 'orange.800',
        borderColor: 'orange.200'
    }),
    medium: css({
        bg: 'yellow.100',
        color: 'yellow.800',
        borderColor: 'yellow.200'
    }),
    low: css({
        bg: 'green.100',
        color: 'green.800',
        borderColor: 'green.200'
    }),
    default: css({
        bg: 'gray.100',
        color: 'gray.800',
        borderColor: 'gray.200'
    })
};
