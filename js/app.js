let form = document.getElementById ('formbox');
let nam = document.getElementById ('name');
let code = document.getElementById ('code');
let descript =  document.getElementById ('description');
let alert = document.getElementById ('alt-one');
let selectedRow = null;
form.addEventListener ('submit', operatons);
function operatons (e) {
    e.preventDefault ();
    let dataForm = readFormData ();
    if (nam.value === '', code.value === '', descript.value === '') {
        alert.classList.remove ('rmvalert');
        alert.innerHTML = `<div class = "alerttext">
                                The fields are required
                            </div>`;
        alert.innerHTML += `<button class="close" onClick = "closePopUp ()">
                                <svg height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/>
                                </svg>
                            </button>`
        return;
    }
    else {
        if (selectedRow == null) {
            insertNewEmployee (dataForm);
        }
        else {
            updateEmployee (dataForm);
        }
    }
    resetForm ();
}
// Leer datos
function readFormData () {
    let inputData = {};
    let parName1 = 'empname';
    let parName2 = 'empcode';
    let parName3 = 'descname';
    let res = new FormData (form);
    inputData [parName1] = res.get (parName1);
    inputData [parName2] = res.get (parName2);
    inputData [parName3] = res.get (parName3);
    return inputData;
}
// Insertar datos
function insertNewEmployee (data) {
    let table = document.getElementById ('employeelist').getElementsByTagName ('tbody') [0];
    let newRow = table.insertRow (table.length)
    let cell1 = newRow.insertCell (0);
    cell1.innerHTML = data.empname;
    let cell2 = newRow.insertCell (1);
    cell2.innerHTML = data.empcode;
    let cell3 = newRow.insertCell (2);
    cell3.innerHTML = data.descname;
    let cell4 = newRow.insertCell (3);
    cell4.innerHTML = `
    <div class = "initcell" id = "init">
        <a class = "butbox" onClick = "empDelete (this)">Delete</a>
        <a class = "butbox" onClick = "empEdit (this)">Edit</a>
    </div>`;
}
// Borrar formulario
function resetForm () {
    document.getElementById ('name').value = '';
    document.getElementById ('code').value = '';
    document.getElementById ('description').value = '';
    selectedRow = null;
}
// Editar dato
function empEdit (td) {
    selectedRow = td.parentElement.parentElement.parentElement;
    document.getElementById ('name').value = selectedRow.cells [0].innerHTML;
    document.getElementById ('code').value = selectedRow.cells [1].innerHTML;
    document.getElementById ('description').value = selectedRow.cells [2].innerHTML;
}
// Actualizar dato
function updateEmployee (inputData) {
    selectedRow.cells [0].innerHTML = inputData.empname;
    selectedRow.cells [1].innerHTML = inputData.empcode;
    selectedRow.cells [2].innerHTML = inputData.descname;
}
// Eliminar dato
function empDelete (td) {
    if (confirm ('Are you sure to delete this record?')) {
        let row = td.parentElement.parentElement.parentElement.parentElement;
        document.getElementById ('employeelist').deleteRow (row.rowIndex);
        resetForm ()
    }
}