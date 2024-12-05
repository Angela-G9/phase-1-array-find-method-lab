// code your solution here
function superbowlWin(record) {
    // Find a record where the result is "W" (win)
    const winRecord = record.find(entry => entry.result === "W");
    
    // Return the year if a winRecord exists, otherwise return undefined
    return winRecord ? winRecord.year : undefined;
  }