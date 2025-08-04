import { css } from "../../styled-system/css";

export const networkStyles = {
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
    diagramContainer: css({
        borderRadius: '15px',
        bg: '#FAFAFA',
        height: '307.8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    })
};
