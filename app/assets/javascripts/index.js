$(function () {
  // clearAppDiv() 
  console.log("app/assets/javascripts/index.js")
  employeeLoginForm()
  employerLoginForm()
  // employerNewForm() 
  // employeeNewForm() 
  jobIndex()
  $('a.navbar-brand#root').on('click', (e) => rootPage(e));
  $('span#new_employee').on("click", (e) => employeeNewForm(e));

})


//////////////// Employee /////////////////////


var employeeNewForm = (e) => {
  // $('span#new_employee').on("click", function (e) {
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
  // })
}

const submitEmployeeNewForm = () => {
  $('#new_employee_form').on("submit", function(e) {

    e.preventDefault()
    debugger;
    $.ajax({
      type: "POST",
      dataType: $(this).serialize(),
      url: this.action
    }).success(function (response) {
      debugger
      alert("you submited the form")
      $('div#app-div-id').html(response)

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