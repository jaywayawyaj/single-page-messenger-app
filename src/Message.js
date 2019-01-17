class Message {
  constructor(text, time = new Date) {
    this.text = text;
    this.time = `${time.toLocaleTimeString()} ${time.toLocaleDateString()}`;
  }
}
