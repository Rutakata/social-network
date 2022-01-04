import React, {useState} from "react";
import style from "./Pagination.module.css";


const Pagination = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {
    let portionSize = 10
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let [portionNumber, setPortionNumber] = useState(1)
    let portionCount = Math.ceil(pagesCount / portionSize)
    let leftPortionBorder = (portionNumber - 1) * portionSize + 1
    let rightPortionBorder = portionNumber * portionSize

    return (
        <div className={style.pageList}>
            {
                portionNumber > 1 && <span onClick={() => setPortionNumber(portionNumber - 1)}
                                           className={style.navigationButton}>Back</span>
            }
            {
                pages.filter(p => p >= leftPortionBorder && p <= rightPortionBorder)
                    .map(p => <span onClick={() => {onPageChanged(p)}} className={currentPage === p && style.currentPage}>
                        {p}</span>)
            }
            {
                portionCount > portionNumber && <span onClick={() => setPortionNumber(portionNumber + 1)}
                                                        className={style.navigationButton}>Next</span>
            }

        </div>
    )
}

export default Pagination