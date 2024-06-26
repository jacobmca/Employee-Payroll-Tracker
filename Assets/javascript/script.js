// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
let collectEmployees = function() {
  let employees = [];
  let addEmployee = true;
  while(addEmployee) {
    let firstName = prompt("Enter first name");
    let lastName = prompt("Enter last name");
    let salary;

    while (true) {
      salary = parseFloat(prompt("Enter salary"));
      if (!isNaN(salary)) break;
      alert("You did not enter a number.")
    }

  employees.push({
    firstName: firstName,
    lastName: lastName,
    salary: salary
  });

  const addAnother = confirm("Do you want to add another employee?")
  addEmployee = addAnother;
  }

return employees;

};

// Display the average salary
const displayAverageSalary = function(employees) {
if (employees.length > 0) {
  let totalSalary = 0;
  for(let i=0; i < employees.length; i++) {
    totalSalary += employees[i].salary;
  }

  let avg = totalSalary / employees.length
  console.log("The average salary between our " + `${employees.length}` + " employees is $" + `${avg}` + ".")
} else {
  console.log("No employees added yet.")
}
};

// Select a random employee
const getRandomEmployee = function(employees) {
  if (employees.length > 0) {
    let randomUser = employees[Math.floor(Math.random() * employees.length)]
    console.log("Congratulations to " + `${randomUser.firstName} ${randomUser.lastName}` + ", our random drawing winner!")
  } else {
    console.log("No random employee.")
  }
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
