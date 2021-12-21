import React from "react";
import style from "./Users.module.css";


const Pagination = ({totalUsersCount, pageSize, onPageChanged, currentPage}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={style.pageList}>
            {pages.map(page => {
                if (page < 10) {
                    return <span onClick={() => {
                        onPageChanged(page)
                    }} className={currentPage === page && style.currentPage}>{page}</span>
                } else if (page === 2000) {
                    return <span onClick={() => {
                        onPageChanged(page)
                    }} className={currentPage === page && style.currentPage}>{page}</span>
                }
            })}
        </div>
    )
}

export default Pagination