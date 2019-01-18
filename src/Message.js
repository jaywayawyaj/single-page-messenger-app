class Message {
  constructor(text, time = new Date) {
    this.text = text;
    this.time = time;
  };

  formatTime() {
    return `${this.time.toLocaleTimeString()} ${this.time.toLocaleDateString()}`;
  };

  getText() {
    return this.text;
  };
}
