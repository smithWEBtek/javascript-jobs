$(function () {
  console.log("app/assets/javascripts/employer.js")
})

const employerNewForm = () => {
  $('span#new_employer').on("click", function (e) {
    e.preventDefault()
    debugger

    $.ajax({
      url: 'http://0.0.0.0:3000/employers/new',
      method: 'GET',
      dataType: 'html'
    }).success(function (response) {
      $('div#app-div-id').html(response)

    })
  })
} 

const employerLoginForm = () => {
  $('a#employer-login').on("click", function (e) {
    e.preventDefault()
    // debugger

    $.ajax({
      url: 'http://0.0.0.0:3000/signin_employer',
      method: 'GET',
      dataType: 'html'
    }).success(function (response) {
      $('div#app-div-id').html(response)

    })
  })
} 