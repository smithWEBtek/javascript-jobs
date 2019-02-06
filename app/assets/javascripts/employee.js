// $(function () {
//   console.log("app/assets/javascripts/employee.js")
// })

// const employeeNewForm = () => {
//   $('span#new_employee').on("click", function (e) {
//     e.preventDefault()
//     $.ajax({
//       url: 'http://0.0.0.0:3000/employees/new',
//       method: 'GET',
//       dataType: 'html'
//     }).success(function (response) {
//       $('div#app-div-id').html(response)
//       submitEmployeeNewForm();
//     })
//   })
// }

// const submitEmployeeNewForm = () => {
//   $('#new_employee_form').on("submit", function(e) {

//     e.preventDefault()
//     debugger;
//     $.ajax({
//       type: "POST",
//       dataType: $(this).serialize(),
//       url: this.action
//     }).success(function (response) {
//       debugger
//       alert("you submited the form")
//       $('div#app-div-id').html(response)

//     })
//   })
// }

// const employeeLoginForm = () => {
//   $('a#employee-login').on("click", function (e) {
//     e.preventDefault()
//     // debugger
    
//     $.ajax({
//       url: 'http://0.0.0.0:3000/signin_employee',
//       method: 'GET',
//       dataType: 'html'
//     }).success(function (response) {
//       $('div#app-div-id').html(response);
//     })
//   })
//  } 
