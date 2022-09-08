const empleados = []
const salary = []
const working = []
const messageName = document.querySelector(".message-name")
const messageHours = document.querySelector(".message-hours")
const messageSalary = document.querySelector(".message-salary")
const messageCargo = document.querySelector(".cargo")
const cargos = {
    cargo1: "empleado",
    cargo2: "gerente",
    cargo3: "jefe"
}
const buttonForm = document.querySelector("#button-form")
const nameForm = document.querySelector("#name-form").value
const workingForm = document.querySelector("#working-form").value
const salaryForm = document.querySelector("#salary-form").value

buttonForm.addEventListener("click", function() {
    empleados.push(nameForm.value)
    salary.push(salaryForm.value)
    working.push(workingForm.value)
    loadData()
})
function loadData(){
    let listItems = ""
    for (let i = 0; i < empleados.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${empleados[i]}'>
                ${empleados[i]}</a>
            </li>
            `
        }
    messageName.innerHTML = listItems
    }



