import React from 'react';
import style from "./Paginator.module.css"

export const Paginator = ({
    totalUsersCount,
    pageSize,
    currentPage,
    onPageNumberChanged
}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages = [...pages, i];
    }

    // let quantityPageButtons = 24;
    let filteredPages = [];
    for (let i = 0; i < pages.length; i++) {

        if (i > currentPage - 5 && i < currentPage + 6) {
            filteredPages = [...filteredPages, i + 1]
            continue;
        }
    }
    return (
        <div className={style.paginationButtonsContainer}>
            {
                filteredPages.map(p => (
                    <div key={p}
                        className={currentPage === p ?
                            style.selectedPageNumberBtn
                            : style.pageNumberBtn}
                        onClick={() => { onPageNumberChanged(p) }}>
                        {p}
                    </div>
                ))
            }
        </div>
    );
}

export default Paginator;