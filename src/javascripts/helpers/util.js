const printToDom = (divId, textToPrint) => {
  const selectDiv = document.getElementById(divId);
  selectDiv.innerHTML = textToPrint;
};

const randomize = max => Math.floor(Math.random() * Math.floor(max));

export default { printToDom, randomize };
