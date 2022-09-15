let empleados = []
let salary = []
let hours = []
const cargos = {
    cargo1: "empleado",
    cargo2: "gerente",
    cargo3: "jefe"
}
let myData = {
    nombre: empleados,
    salario: salary,
    horas: hours
}
let nameForm = document.querySelector("#name-form");
let salaryForm = document.querySelector("#salary-form");
let hoursForm = document.querySelector("#hours-form");
let btnForm = document.querySelector("#btn-form");
let ulName = document.querySelector("#ul-name");
let ulSalary = document.querySelector("#ul-salary");
let ulHours = document.querySelector("#ul-hours");
let messageCargo = document.querySelector(".cargo")


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
        <li> ${hours[i]} ${"hs"} </li>`
    }
    ulName.innerHTML = namesSaved
    ulSalary.innerHTML = salarySaved
    ulHours.innerHTML = hoursSaved
}

if(salary >= 2000 && salary < 3000) {
    messageCargo.textContent += " " + cargos.cargo1
} else if (salary < 2000) {
    messageCargo.textContent += " " + cargos.cargo2
} else {
    messageCargo.textContent += " " + cargos.cargo3
}