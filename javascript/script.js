function processing() {


    //form input values.
    let startRow = document.getElementById("Hstart").value;
    let startCol = document.getElementById("Vstart").value;
    let endRow = document.getElementById("Hend").value;
    let endCol = document.getElementById("Vend").value;

    //Get table via ID
    let table = document.getElementById("myTable");
    table.innerHTML = "";
    var tbody = document.createElement('tbody');
  
    var headerRow = document.createElement('tr');
    headerRow.appendChild(document.createElement('th')); // empty corner cell

    
    //Error checking for end of row/col being smaller then start
    if(parseInt(startRow) > parseInt(endRow)){
      let i = startRow;
      startRow = endRow;
      endRow = i;
    }

    if(parseInt(startCol) > parseInt(endCol)){
      let j = startCol;
      startCol = endCol;
      endCol = j;
    }


  // Loops for filling tqable with appropriate multiplied numbers.
    for (var col = parseInt(startCol); col <= parseInt(endCol); col++) {
      var th = document.createElement('th');
      th.textContent = col;
      headerRow.appendChild(th);
    }
    tbody.appendChild(headerRow);

    for (var row = parseInt(startRow); row <= parseInt(endRow); row++) {
      var tr = document.createElement('tr');
      var thRow = document.createElement('th');
      thRow.textContent = row;
      tr.appendChild(thRow);

      for (var col = parseInt(startCol); col <= parseInt(endCol); col++) {
        var td = document.createElement('td');
        td.textContent = row * col;
        tr.appendChild(td);
      }

      tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    return false; // 
};
