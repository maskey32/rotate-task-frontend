import { paginationStyles } from "../../../styles/pagination";

export default function Pagination({ currentPage, totalItems }: IPaginationProps) {
    const startItem = (currentPage - 1) * 2 + 1;
    const endItem = Math.min(currentPage * 2, totalItems);

    return (
        <div className={paginationStyles.container}>
            <div className={paginationStyles.content}>
                <button className={`${paginationStyles.button}`} disabled>
                    <svg className={paginationStyles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <span className={paginationStyles.text}>
                    Showing {startItem}-{endItem} of {totalItems}
                </span>
                <button className={`${paginationStyles.button}`} disabled>
                    <svg className={paginationStyles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>

    );
}