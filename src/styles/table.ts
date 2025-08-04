import { css } from "../../styled-system/css";

export const tableStyles = {
    container: css({
        width: '50%',
        height: 'full',
        border: '1px solid #E0E2E7',
        borderRadius: '15px',
        overflow: 'hidden'
    }),
    table: css({
        width: 'full'
    }),
    header: css({
        borderBottom: '1px solid #E0E2E7'
    }),
    headerCell: css({
        px: '24px',
        py: '12px',
        textAlign: 'left',
        fontSize: '13px',
        fontWeight: 'normal',
        color: '#858D9D',
        letterSpacing: 'wide'
    }),
    body: css({
        bg: 'white',
        '& tr': {
        borderBottom: '1px solid',
        borderColor: 'gray.200',
        transition: 'colors 0.15s ease',
        _hover: {
            bg: 'gray.50'
        }
        }
    }),
    assetCell: css({
        px: '10px',
        py: '16px'
    }),
    assetContent: css({
        display: 'flex',
        alignItems: 'center',
        gap: '8.1px'
    }),
    iconContainer: css({
        flexShrink: 0
    }),
    iconWrapper: css({
        width: '45px',
        height: '45px',
        bg: 'blue.100',
        borderRadius: 'full',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }),
    assetInfo: css({
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
    }),
    assetName: css({
        fontSize: '13px',
        fontWeight: 'semibold',
        color: '#525D73',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }),
    assetIp: css({
        fontSize: '9.45px',
        fontWeight: 'medium',
        color: '#667085'
    }),
    riskCell: css({
        px: '24px',
        py: '16px'
    })
};