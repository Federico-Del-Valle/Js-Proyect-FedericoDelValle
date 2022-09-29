let empleados = []
let salary = []
let hours = []
const cargos = {
    cargo1: "empleado",
    cargo2: "gerente",
    cargo3: "jefe"
}
let {cargo1, cargo2, cargo3} = cargos
let myData = {
    nombre: empleados,
    salario: salary,
    horas: hours
}
let nameForm = document.querySelector("#name-form");
let salaryForm = document.querySelector("#salary-form");
let hoursForm = document.querySelector("#hours-form");
let btnForm = document.querySelector("#btn-form");
let btnFormErase = document.querySelector("#btn-form-erase");
let ulName = document.querySelector("#ul-name");
let ulSalary = document.querySelector("#ul-salary");
let ulHours = document.querySelector("#ul-hours");
let ulCargo = document.querySelector(".cargo")
document.getElementById("jsonBtn").addEventListener("click", cargarJSON);

function cargarJSON() {
    fetch('empleados.json')
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            let html = "";
            data.forEach(function(empleado){
                html += `
                            <li>${empleado.nombre} ${empleado.puesto}</li>
                            `
            })
            document.getElementById('resultado').innerHTML = html
        })
}

btnFormErase.addEventListener("click", function() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
        )
        }
    })
})

btnForm.addEventListener("click", function() {
    empleados.push(nameForm.value)
    salary.push(salaryForm.value)
    hours.push(hoursForm.value)
    nameForm.value = ""
    salaryForm.value = ""
    hoursForm.value = ""
    showData()
    let myDataJson = JSON.stringify(myData)
    console.log(myDataJson)
    localStorage.setItem("myData", myDataJson)
    salaryFunction(empleados)
    Swal.fire('Empleado añadido')
})



function showData() {
    let namesSaved = ""
    let salarySaved = ""
    let hoursSaved = ""
    for ( let i = 0; i < empleados.length; i++){

        namesSaved +=` 
        <li> ${empleados[i]} </li>`
    }
    for ( let i = 0; i < salary.length; i++){
        salarySaved +=` 
        <li> ${"$"} ${salary[i]} </li>`
    }
    for ( let i = 0; i < hours.length; i++){
        hoursSaved +=` 
        <li > ${hours[i]} ${"hs"} </li>`
    }
    ulName.innerHTML = namesSaved
    ulSalary.innerHTML = salarySaved
    ulHours.innerHTML = hoursSaved
}

function salaryFunction(name) {
    (salary >= 2000) ? ulCargo.textContent += name + " " + cargo1 
    : (salary < 2000) ? ulCargo.textContent += name + " " + cargo2 
    : ulCargo.textContent += name + " " + cargo3
}
