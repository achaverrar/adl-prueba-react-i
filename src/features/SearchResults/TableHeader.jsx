import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import "./TableHeader.css";

const ORDER = {
  ASC: 1,
  DESC: -1,
};

const TableHeader = ({ id, text, sortable, colspan, sort, setSort }) => {
  if (sortable) {
    return (
      <th key={id} colSpan={colspan}>
        <div
          className="table__header"
          onClick={() =>
            setSort((prevSort) => ({
              by: id,
              order:
                prevSort.by === id && prevSort.order === ORDER.ASC
                  ? ORDER.DESC
                  : ORDER.ASC,
            }))
          }
        >
          <span className="table__header-text sortable">{text}</span>
          {sort.by === id && (
            <FontAwesomeIcon
              icon={sort.order === ORDER.ASC ? faCaretUp : faCaretDown}
              className="table__header-icon"
            />
          )}
        </div>
      </th>
    );
  } else {
    return (
      <th key={id} colSpan={colspan}>
        <div className="table__header">
          <span className="table__header-text">{text}</span>
        </div>
      </th>
    );
  }
};

export default TableHeader;
