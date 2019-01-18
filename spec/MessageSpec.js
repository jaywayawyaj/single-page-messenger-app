describe('Message', function() {
  let message;
  let time;

  beforeEach(function() {
    time = new Date(1547812301000)
    message = new Message("Test message", time);
  });

  it('has a message body', function() {
    expect(message.text).toBe("Test message");
  });

  it('has a message body function', function() {
    expect(message.getText()).toBe("Test message");
  });

  it('formatTime displays a formatted date and time', function() {
    expect(message.formatTime()).toBe("11:51:41 18/01/2019")
  });
});
