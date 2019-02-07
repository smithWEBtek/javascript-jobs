$(function () {
  // clearAppDiv() 
  console.log("app/assets/javascripts/index.js")
  employeeLoginForm()
  employerLoginForm()
  // employerNewForm() 
 
  employeeNewForm()
  jobIndex()
  $('a.navbar-brand#root').on('click', (e) => rootPage(e));
  // $('span#new_employee').on("click", employeeNewForm);
  // $('#new_employee_form').on("submit", submitEmployeeNewForm )

})


//////////////// Employee /////////////////////


var employeeNewForm = () => {
  $('a#new_employee').on("click", function (e) {
    e.preventDefault()

    clearWelcome()
    $.ajax({
      url: 'http://0.0.0.0:3000/employees/new',
      method: 'GET',
      dataType: 'html'
    }).success(function (response) {
      $('div#app-div-id').html(response)
      submitEmployeeNewForm();
    })
  })
}

const submitEmployeeNewForm = (e) => {
  $('form#new_employee_form').on("submit", function(e) {
    e.preventDefault()
    $.ajax({
      type: "POST",
      data: $(this).serialize(),
			dataType: 'json',
      url: this.action
    }).success(function (response) {
     
		  let employee = new Employee(response)
      let employeeHtml =  employee.employeeHTML()

      $('div#employee-div-id').html(employeeHtml)

    })
  })
}

const employeeLoginForm = () => {
  $('a#employee-login').on("click", function (e) {
    
    e.preventDefault()
    // debugger
    clearWelcome()
    
    $.ajax({
      url: 'http://0.0.0.0:3000/signin_employee',
      method: 'GET',
      dataType: 'html'
    }).success(function (response) {
      $('div#app-div-id').html(response);
    })
  })
 } 



function clearWelcome() {
  $('div#the-welcome-page').html("")
}

var rootPage = (e) => {
  e.preventDefault()
  $.ajax({
    url: 'http://0.0.0.0:3000/',
    method: 'GET',
    dataType: 'html'
  }).success(function (response) {
    $('body').html(response)
  })
}

// define Employee class
class Employee {
  constructor(obj) {
    this.name = obj.name;
    this.email = obj.email;
    this.profession = obj.profession;
  }
}

Employee.prototype.employeeHTML = function () {
  return (`
    <div class='employee-show'>
		<h3>${this.name}</h3>
    <p> ${this.email}</p>
    <p> ${this.profession}</p>
		</div>
  `)
}