describe('Message', function() {
  var message;

  beforeEach(function() {
    message = new Message("Test message");
  })

  it('has a message body', function() {
    expect(message.text).toBe("Test message");
  })
})
