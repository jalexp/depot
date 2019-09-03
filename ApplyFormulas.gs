function ApplyFormulas1() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('B2').activate()
  .setFormula('=ArrayFormula(if(not(isblank(A2:A)),vlookup(A2:A,Volunteers!A2:B,2,0),""))');
  spreadsheet.getRange('E2').activate()
  .setFormula('=ArrayFormula(countif(A2:A, A2:A)*3)');
  spreadsheet.getRange('G2').activate()
  .setFormula('=ArrayFormula(if(not(isblank(#REF!)),"Completed",""))');
  spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
  spreadsheet.getActiveRange().setFormula('=ArrayFormula(if(not(isblank(#REF!)),"Completed",""))');
  spreadsheet.getCurrentCell().setFormula('=ArrayFormula(if(not(isblank(A2:A)),"Completed",""))');
  spreadsheet.getRange('I2').activate()
  .setFormula('=ArrayFormula(if(not(isblank(A2:A)),1,""))')
  .setFormula('=ArrayFormula(if(exact(H2:H,"Completed"),3,""))');
  spreadsheet.getCurrentCell().setFormula('=ArrayFormula(if(exact(G2:G,"Completed"),3,""))');
  spreadsheet.getRange('H2').activate()
  .setFormula('=ArrayFormula(if(exact(G2:G,"Completed"),3,""))');
  spreadsheet.getRange('I2').activate();
  spreadsheet.getCurrentCell().setFormula('=ArrayFormula(if(not(isblank(A2:A)),1,""))');
  spreadsheet.getRange('D2').activate()
  .setFormula('=ArrayFormula(if(not(isblank(A2:A)),vlookup(C2:C,$K2:$L13,2,0),""))');
}
