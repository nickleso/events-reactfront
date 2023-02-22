export const ButtonLoadMore = ({ loadMoreUsers, buttonName }) => {
  return (
    <div className="ButtonWrap">
      <button onClick={loadMoreUsers} type="button" className="Button">
        {buttonName}
      </button>
    </div>
  );
};
