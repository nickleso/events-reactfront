export const ButtonCreate = ({ buttonName, showModal }) => {
  return (
    <button onClick={showModal} type="submit" className="button">
      {buttonName}
    </button>
  );
};
