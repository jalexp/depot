function initDataValidationCells() {
  
  var SHEET_NAME = "September 2019";
  var VOLUNTEERS_LIST = 'Volunteers!A2:A';
  
  var sheet1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  var dataRange = sheet1.getDataRange();
  
  var PINK = "#ff00ff";
  var GREEN = "#00ff00";
  var BEIGE = "#ffe599";
  var LIGHT_BEIGE = "#fff2cc";
  var YELLOW = "#ffff00";
  var BLUE = "#cfe2f3";
  
  for (var i = 1; i < dataRange.getNumRows() ; i++) {
    for (var j = 1; j < dataRange.getNumColumns(); j++) {
     var bg = dataRange.getCell(i,j).getBackground();

      if(bg == PINK ||
         bg == GREEN ||
         bg == LIGHT_BEIGE ||
         bg == BEIGE ||
         bg == YELLOW ||
         bg == BLUE)             
             {
          
             var cell = dataRange.getCell(i,j);
             var range = SpreadsheetApp.getActive().getRange(VOLUNTEERS_LIST);
             var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range).build();
             cell.setDataValidation(rule);
           }
    }
  }
  
}

