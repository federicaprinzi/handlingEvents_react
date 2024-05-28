export function Click() {
  function handleButtonClick(event) {
    console.log(event.currentTarget);
  }

  function handleImageClick(event) {
    console.log(event.target.src);
    event.stopPropagation();
  }

  return (
    <button onClick={handleButtonClick}>
      <img
        src="handlingEvents_react/src/assets/bottone.png"
        width={25}
        height={25}
        onClick={handleImageClick}
      />
      Clicca qui!
    </button>
  );
}

export default Click;
