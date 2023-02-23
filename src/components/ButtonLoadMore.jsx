export const ButtonLoadMore = ({ loadMoreUsers, buttonName }) => {
  return (
    <div className="ButtonWrap">
      <button onClick={loadMoreUsers} type="button" className="button">
        {buttonName}
      </button>
    </div>
  );
};
