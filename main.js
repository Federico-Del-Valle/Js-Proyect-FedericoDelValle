const empleados = []
const messageName = document.querySelector(".message-name")
const messageHours = document.querySelector(".message-hours")
const messageSalary = document.querySelector(".message-salary")
const messageCargo = document.querySelector(".cargo")
const cargos = {
    cargo1: "empleado",
    cargo2: "gerente",
    cargo3: "jefe"
}
let number = prompt("Cuantos datos desea cargar?")
for (let i = 0; i < number; i++) {
    let nombre = prompt("Ingrese su nombre")
    let salary = parseInt(prompt("Ingrese su salario"))
    let workingHours = parseInt(prompt("Cuantas horas trabaja?"))
    let salaryPerHour = salary / workingHours

    function data(nombre, salary, workingHours) {
        messageName.textContent = (nombre) 
        messageHours.textContent = (workingHours)
        messageSalary.textContent = (salary)
        empleados.push(nombre)
    }
    console.log(empleados)
    data(nombre,salary, workingHours)

    if(salary >= 2000 && salary < 3000) {
        messageCargo.textContent += " " + cargos.cargo1
    } else if (salary < 2000) {
        messageCargo.textContent += " " + cargos.cargo2
    } else {
        messageCargo.textContent += " " + cargos.cargo3
    }
}


