// define no of column and row
// and create a array of object to represent
// state of spreadshee
const numberOfColumn = 10;
const numberOfRow = 20;


export const lastColumn = String.fromCharCode(97 + (numberOfColumn - 1));
export const lastRow = numberOfRow - 1;

// create a object with key of a,b,c,d etc.
// one column object present one row
// each key of object represent a column
function createColumn(noOfColumn) {
  const column = {};
  // carecter code of 'a' to use in function 'String.fromCharCode()'
  const charCodeStart = 97;
  const charCodeEnd = 97 + (noOfColumn - 1);
  for (let i = charCodeStart; (i <= charCodeEnd) && (i <= 122); i += 1) {
    column[String.fromCharCode(i)] = '';
  }

  return column;
}

// one column object represent one row create a array to 
// represent required no of row
function createSheet(noOfColumn, noOfRow) {
  const sheet = [];
  const column = createColumn(noOfColumn);
  for (let i = 0; i < noOfRow; i += 1) {
    sheet.push(column);
  }

  return sheet;
}

// create a object represent initial state of app
const initialStore = {
  fileName: 'Untitled Spradesheet',
  activeCell: {
    currentActiveCell: 'a0',
    isEditable: false,
  },
  sheet: createSheet(numberOfColumn, numberOfRow),
};


export default initialStore;
