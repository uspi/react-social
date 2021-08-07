import React, { useState } from 'react';
import style from "./Paginator.module.css"
import cn from "classnames"

export const Paginator = ({
    totalItemsCount,
    pageSize,
    currentPage,
    onPageNumberChanged,
    portionSize = 10
}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages = [...pages, i];
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftLimitPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightLimitPageNumber = portionNumber * portionSize;

    return (
        <div className={style.paginationButtonsContainer}>
            {
                // prev btn
                portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>prev</button>
            }

            {
                pages
                    .filter(p =>
                        p >= leftLimitPageNumber &&
                        p <= rightLimitPageNumber
                    )
                    .map(p => {

                        return (
                            <span
                                className={
                                    cn({
                                        [style.selectedPageNumberBtn]: currentPage === p
                                    }, style.pageNumberBtn)
                                }
                                key={p}
                                onClick={e => onPageNumberChanged(p)}
                            >{p}
                            </span>
                        );
                    }

                    )
            }

            {
                // next btn
                portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>
            }
        </div>
    );
};

export default React.memo(Paginator);