import { css } from "../../styled-system/css";

export const chartStyles = {
    container: css({
        flex: 1,
        px: '30px',
        py: '10px',
        height: 'full',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '1px solid #E0E2E7',
        borderRadius: '15px'
    }),
    title: css({
        fontSize: '18px',
        fontWeight: 'medium',
        color: '#667085',
        mb: '36px'
    }),
    content: css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'full'
    }),
    legendContainer: css({
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    }),
    legendItem: css({
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
    }),
    dot: css({
        width: '8px',
        height: '8px',
        borderRadius: 'full',
        flexShrink: 0
    }),
    legendText: css({
        fontSize: '15px',
        fontWeight: 'normal',
        color: '#383874'
    }),
    count: css({
        fontWeight: 'bold'
    }),
    chartContainer: css({
        position: 'relative',
        ml: '32px',
        height: 'full',
        display: 'flex',
        alignItems: 'center'
    }),
    chartWrapper: css({
        position: 'relative',
        aspectRatio: '1',
        height: 'full',
        maxHeight: '192px'
    }),
    svg: css({
        transform: 'rotate(-90deg)'
    }),
    centerNumber: css({
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }),
    number: css({
        fontSize: '35px',
        fontWeight: 'semibold',
        color: '#656575'
    })
};