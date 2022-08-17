for (let i = 0; i < 3; i++) {
    let nombre = prompt("Ingrese su nombre")
    document.write("<br>" + nombre + " ")
    let salary = parseInt(prompt("Ingrese su salario"))
    document.write("su salario es: $" + salary)
    let workingHours = parseInt(prompt("Cuantas horas trabaja?"))
    document.write("<br>" + "Cantidad de horas trabajadas :" + workingHours + "hs")
    let salaryPerHour = salary / workingHours
    document.write ( "<br>" + "Su ganancia por hora es: " + salaryPerHour)
    if(salary >= 2000 && salary < 3000) {
        document.write("<br>" + "Su cargo es : Gerente" + "<br>")
    } else if (salary < 2000) {
        document.write("<br>" + "Su cargo es : Empleado" + "<br>")
    } else {
        document.write("<br>" + "Su cargo es : Dueño" + "<br>")
    }
}