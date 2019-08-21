function myFunction() {
  
  
  var schedSheet = "August 2019";
  var volSheet = "Volunteers";
  var reportSheet= "MonthlyReport";
 
  var sheet1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(schedSheet);
  var sheet3 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(reportSheet);
  var sheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(volSheet);
  var dataRange1 = sheet1.getDataRange();
  var dataRange2 = sheet2.getDataRange();
  
  var reportRow = 2;
  var reportNameCol = 1;
  
  var bgColors = dataRange1.getBackgrounds();
  var volValues = dataRange2.getValues();
  
  var BEIGE = "#fff2cc"; //regular volunteer 
  var GREEN = "#00ff00"; //new volunteer
  var YELLOW = "#ffff00"; //absence, to-be-filled
  var IGNORE_ARRAY = ["Station 1","Station 2","Station 3","Station 4", "Logistique", "Students", "Flow Manager"];
  
  for (var i = 0; i < bgColors.length; i++) {
    for (var j = 0; j < bgColors[i].length; j++) {
      var currentColor = bgColors[i][j];
      var currentRow = i+1;
      var currentCol = j+1;
      
      if (currentColor == BEIGE || currentColor == GREEN || currentColor == YELLOW) {
        var cell = dataRange1.getCell(currentRow, currentCol);
        var cellVal = cell.getValue();

        if (!containsIgnoreString(cellVal, IGNORE_ARRAY) && (cellVal != "")) {
          /* Do we want to copy just the value? (We lose the data validation)
          * or do we want to copy the entire cell?
          * sheet3.getRange(reportRow, reportNameCol).setValue(cellVal);
          */
          cell.copyTo(sheet3.getRange(reportRow, reportNameCol));
          Logger.log("COPYING cellVal: "+cellVal);
          reportRow++;
        }
      }  
    }
  }
  
    
  function containsIgnoreString(cellValue, ignoreArr) {
    var isIgnored = false;
    for (var k = 0; k < ignoreArr.length; k++) {
      if (cellValue == ignoreArr[k])
        isIgnored = true;
    }
    return isIgnored;
  }
  

  
}

