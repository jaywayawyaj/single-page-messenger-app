let button = document.getElementById('button')


  button.addEventListener('click', function() {
    let message = new Message(messageText.value)
    let messageLog = document.getElementById("messageLog")

    let messageInsert = document.createElement("P")
    messageInsert.innerText = message.getText();

    messageLog.prepend(messageInsert)

    messageText.value = ""
  })
