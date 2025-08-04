import { css } from "../../styled-system/css";

export const riskTableStyles = {
    container: css({
        display: 'flex',
        flexDirection: 'column'
    }),
    title: css({
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#02983E',
        mb: '16px'
    }),
    content: css({
        display: 'flex',
        alignItems: 'center',
        height: '256px',
        gap: '20px'
    })
};