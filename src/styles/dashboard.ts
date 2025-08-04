import { css } from "../../styled-system/css";

export const dashboardStyles = {
    container: css({
        flex: 1,
        overflow: 'hidden'
    }),
    content: css({
        height: 'full',
        p: '27px',
        display: 'flex',
        flexDirection: { base: 'column', lg: 'row' },
        gap: '20px'
    }),
    leftPanel: css({
        width: { lg: '385px' },
        px: '30px',
        py: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        shadow: 'sm',
        bg: 'white',
        borderRadius: '15px',
        border: '1px solid',
        borderColor: 'gray.200',
        overflowY: 'auto'
    }),
    sectionTitle: css({
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#02983E',
        mb: '16px'
    }),
    sectionText: css({
        fontSize: '12px',
        fontWeight: 'normal',
        color: '#525D73',
        lineHeight: 'relaxed'
    }),
    rightPanel: css({
        flex: { lg: 1 },
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        overflowY: 'auto'
    })
};