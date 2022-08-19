for (let i = 0; i < 1; i++) {
    let nombre = prompt("Ingrese su nombre")
    let salary = parseInt(prompt("Ingrese su salario"))
    let workingHours = parseInt(prompt("Cuantas horas trabaja?"))
    let salaryPerHour = salary / workingHours

    function salario() {
        let oracion = `${nombre} su salario es: $${salary} <br>`
        document.write(oracion)
    }
    salario(nombre,salary)

    function horas() {
        let salarioXhora = `Cantidad de horas trabajadas : ${workingHours} hs <br>
        Su ganancia por hora es: ${salaryPerHour}`
        document.write(salarioXhora)
    }
    horas(workingHours, salaryPerHour)

    if(salary >= 2000 && salary < 3000) {
        document.write("<br>" + "Su cargo es : Gerente" + "<br>")
    } else if (salary < 2000) {
        document.write("<br>" + "Su cargo es : Empleado" + "<br>")
    } else {
        document.write("<br>" + "Su cargo es : Dueño" + "<br>")
    }
}