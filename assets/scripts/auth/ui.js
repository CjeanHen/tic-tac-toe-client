const store = require('../store')
const play = require('../play')

const signUpSuccess = response => {
  $('#message').text('Sign up successful!')
  $('form').trigger('reset')
}

const signUpFailure = response => {
  $('#message').text('Sign up failed!')
  $('form').trigger('reset')
}

const signInSuccess = response => {
  $('form').trigger('reset')
  store.user = response.user
  $('#authorized').show()
  $('#unauthorized').hide()
}

const signInFailure = response => {
  $('#message').text('Sign in failed!')
  $('form').trigger('reset')
}

const signOutSuccess = response => {
  $('#message').text('Signed out!')
  $('form').trigger('reset')
  $('#unauthorized').show()
  $('#authorized').hide()
}

const signOutFailure = response => {
  $('#message').text('Could not sign out!')
  $('form').trigger('reset')
}

const changePwSuccess = response => {
  $('#message').text('Password changed!')
  $('form').trigger('reset')
}

const changePwFailure = response => {
  $('#message').text('Password could not be changed!')
  $('form').trigger('reset')
}

const newGameSuccess = response => {
  $('#gameBoard').css('visibility', 'visible')
  $('#change-pw').hide()
  store.game = response.game
  $('.cells').html('<p> </p>')
  $('.cells').attr('data-isOpen', 'yes')
  play.over = false
}

const newGameFailure = response => {
  $('#message').text('No new game created')
}

const takeTurnSuccess = response => {
  console.log(response)
}

const takeTurnFailure = response => {
  $('#message').text('Turn not logged')
}

const gamesPlayedSuccess = response => {
  $('#display-games').text(response.games.length)
}

const gamesPlayedFailure = response => {
  $('#display-games').text('Cannot display games played')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePwSuccess,
  changePwFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  takeTurnSuccess,
  takeTurnFailure,
  gamesPlayedSuccess,
  gamesPlayedFailure
}
