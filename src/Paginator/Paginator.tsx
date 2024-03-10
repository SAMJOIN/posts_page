import { PaginatorProps } from '../Types';
import style from './Paginator.module.css'

const Paginator = (props: PaginatorProps) => {


    let pages: number[] = [];
    const pageCount = props.pageCount;
    const currentPage = props.currentPage;
    for (let i = 1; i <= pageCount; i++)
        pages.push(i);

    return (
        // <div className={style.paginatorContainer}>
        //     {pages.map(page => {
        //         if (page === currentPage) {
        //             return <span key={page} className={currentPage === page ? style.selectedPage : style.pageNumber} >{'   ' + page + '   '}</span>
        //         } else {
        //             return <span key={page} className={currentPage === page ? style.selectedPage : style.pageNumber} onClick={() => props.onPageChange(page)}>{'   ' + page + '   '}</span>
        //         }
        //     })}
        // </div>
        <div className={style.paginatorContainer}>
            <button className={style.button} disabled={currentPage === 1} onClick={() => currentPage > 1 && props.onPageChange(currentPage - 1)}>{'<'}</button>
            {pages.map(page => {
                if (page === currentPage) {
                    return <span key={page} className={currentPage === page ? style.selectedPage : style.pageNumber} >{'   ' + page + '   '}</span>
                } else {
                    return <span key={page} className={currentPage === page ? style.selectedPage : style.pageNumber} onClick={() => props.onPageChange(page)}>{'   ' + page + '   '}</span>
                }
            })}
            <button className={style.button} disabled={currentPage === pageCount} onClick={() => currentPage < pageCount && props.onPageChange(currentPage + 1)}>{'>'}</button>
        </div>
    );
}

export default Paginator;