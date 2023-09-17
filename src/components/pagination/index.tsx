import ReactPaginate from 'react-paginate';
import './index.scss';

interface IProps {
  handlePageClick?: (count: { selected: number }) => void;
}

const Pagination: React.FC<IProps> = ({ handlePageClick }) => {
  return (
    <div className="page-container">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={80}
        disableInitialCallback={true}
        marginPagesDisplayed={1}
        pageClassName="page-item"
        previousClassName="prev-page"
        nextClassName="next-page"
        previousLabel="Previous"
        containerClassName="pagination"
        renderOnZeroPageCount={null}
        disabledClassName="disable"
      />
    </div>
  );
};

export default Pagination;
