// define the data
let arr = [
    { name: 'player1', score: 10, rank: 1},
    { name: 'player2', score: 7, rank: 2 },
    { name: 'player3', score: 3 , rank: 3},
    { name: 'player4', score: 12, rank: 0 }
];

// select the container div
let container = document.getElementById('container');

// create a table and insert the table to the container
let table = document.createElement('table');

// populate the header and data of the table
let tableHeaders = Object.keys(arr[0]);

let tableHeaderRow = document.createElement('tr');

tableHeaders.forEach(heading => {
    let th = document.createElement('th');
    th.textContent = heading;
    tableHeaderRow.appendChild(th);
});

table.appendChild(tableHeaderRow);

arr.forEach(object => {
    let tr = document.createElement('tr');
    Object.values(object).forEach(value => {
        let td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td);
    });
    table.appendChild(tr);
});

container.appendChild(table);

table.classList.add('table', 'custom-bordered', 'custom-striped');