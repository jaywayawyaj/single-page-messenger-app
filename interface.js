let button = document.getElementById('button')


  button.addEventListener('click', function() {
    let message = new Message(messageText.value)
    let messageLog = document.getElementById("messageLog")

    messageLog.prepend(message.getText())
    console.log("getting here")
  })


// document.addEventListener('load', init);
