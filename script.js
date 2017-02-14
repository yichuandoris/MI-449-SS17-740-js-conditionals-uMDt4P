var button = document.getElementById('start-button')

button.addEventListener('click', function () {
  var greeting = window.prompt('Welcome to the crazy where-to-go world - how are you today?')
  var hour = window.prompt('"' + greeting + '"' + '? Hey, same here! And it\'s just a good time for an adventure. So how much time do you have for this adventure? Name a number!')
  if (isNaN(hour)) { hour = 1 }
  var ready = window.prompt('Okay! We will play the game within ' + hour + ' minute(s). Alright, it\'s time to depart! Let\'s Go and decide our destination. Are you ready?')
  if (ready === 'yes' || ready === 'y') {
    window.alert('Great! Click on the Destination button NOW!')
  } else if (ready === 'no' || ready === '' || ready === 'n') {
    window.alert('Okay, just restart or click on the Destination button later.')
  } else if (ready === null || ready === undefined) {
    window.alert('Quit now? No way, it\'s not even a choice')
  } else {
    window.alert('Hey, are you with us? Try again?')
  }
  ready = ready.trim()
  greeting = greeting || ''
  greeting = greeting.trim()
})

var destinationButton = document.getElementById('destination-button')
destinationButton.addEventListener('click', function () {
  var destination = window.prompt('Do you prefer exploring Other Countires or visiting Another State?')
  if (destination === 'other countries' || destination === 'countries' || destination === 'country') {
    var country = window.prompt('Good choices! So guess which country you are going to?')
    if (country === 'france') {
      window.alert('Bingo! Wow, it\'s glorious place, isn\'t it?')
    } else if (country === 'japan') {
      window.alert('Nice choice! But I want to go to somewhere shining.')
    } else if (country === 'china') {
      window.alert('Wow, seriously? That\'s far from here. I am lazy to bring you there.')
    } else if (country === 'spain') {
      window.alert('Wow, that\'s a passinate country! I need a place to calm down. Maybe next time.')
    } else if (country === 'brazil') {
      window.alert('Me too! Reakky that\' a great one. But don\'t you consider othere place?')
    } else if (country === null || country === undefined) {
      window.alert('Quit now? No way, it\'s not even a choice')
    } else {
      window.alert('Coooooool. But I want to go to other place.')
    }
    country = country.toUpperCase().trim()
  } else if (destination === 'other states' || destination === 'states' || destination === 'state') {
    var state = window.prompt('That\'s great! So guess which state we\'re going to?')
    if (state === 'california') {
      window.alert('Yay! That\'s the one! Let\'s Go for our adventure!!')
    } else if (state === 'michigan') {
      window.alert('Nice choice! But I guess that\'s where you are right now, isn\'t it?')
    } else if (state === 'florida') {
      window.alert('Wow, I like it! Just...that\'s a bit far from here. I am lazy to bring you there.')
    } else if (state === 'texas') {
      window.alert('Wow, that\'s a passinate state! I need a place to chill out. Maybe next time.')
    } else if (state === null || state === undefined) {
      window.alert('Quit now? Oh,no! It\'s not even a choice')
    } else {
      window.alert('Coooooool. But I want to go to other state.')
    }
    state = state.toUpperCase().trim()
  } else if (destination === '') {
    window.alert('Are you sure you\'ve entered anything? Try again!')
  } else if (destination === null || destination === undefined) {
    window.alert('Gameover Now? No, it\'s not even a choice')
  } else {
    var randomNumber = Math.random()
    if (randomNumber > 0.5) {
      window.alert('Come on! Advernture is ahead! Keep going!')
    } else {
      window.alert('Okay! I am tired of asking. THE END.')
    }
  }
  destination = destination.toUpperCase().trim()
})
