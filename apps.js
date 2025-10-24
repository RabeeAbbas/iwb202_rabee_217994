
// making checkboxes show and hide the next row 
$(document).ready(function() {
  //alert("Hello"); 
    $('.showHide').on('change', function() {
    const currentRow = $(this).closest('tr');  //returns the table row that contains the check box
    const nextRow = currentRow.next('tr');     // returns the row that comes exactly after 
    //alert("Hello");
    if ($(this).is(':checked')) {
      nextRow.show();
    } else {
      nextRow.hide();
    }
  });
});


//code when the page laods and have data in the local storage 
document.addEventListener("DOMContentLoaded", function () {
  const appData = JSON.parse(localStorage.getItem("newAppData"));
  if (!appData) return;

  const table = document.getElementById("apps");

  // Visible row
  const visibleRow = table.insertRow(-1);
  visibleRow.insertCell(0).textContent = appData.appName;
  visibleRow.insertCell(1).textContent = appData.companyName;
  visibleRow.insertCell(2).textContent = appData.summary;

  const showCheckbox = document.createElement("input");
  showCheckbox.type = "checkbox";
  showCheckbox.className = "showHide";
  visibleRow.insertCell(3).appendChild(showCheckbox);

  const freeCheckbox = document.createElement("input");
  freeCheckbox.type = "checkbox";
  freeCheckbox.checked = appData.isFree;
  visibleRow.insertCell(4).appendChild(freeCheckbox);

  // Hidden row
  const hiddenRow = table.insertRow(-1);
  hiddenRow.className = "hidden";
  const hiddenCell = hiddenRow.insertCell(0);
  hiddenCell.colSpan = 5;

  const detailsTable = document.createElement("table");
  detailsTable.className = "details";

  const row1 = detailsTable.insertRow();
  const cell1a = row1.insertCell();
  cell1a.innerHTML = `<p>الموقع الالكتروني : <a href="${appData.companyURL}" target="_blank">${appData.companyURL}</a></p>`;

  const cell1b = row1.insertCell();
  cell1b.innerHTML = `<img src="https://via.placeholder.com/150x100?text=${encodeURIComponent(appData.appName)}" alt="${appData.appName} Photo" width="150" height="100"><br>`;

  const row2 = detailsTable.insertRow();
  const cell2a = row2.insertCell();
  cell2a.innerHTML = `<p>${appData.summary}</p>`;

  const cell2b = row2.insertCell();
  cell2b.innerHTML = `<iframe width="552" height="311" src="https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(appData.appName)}" title="${appData.appName} Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

  hiddenCell.appendChild(detailsTable);
  localStorage.removeItem("newAppData");
});
