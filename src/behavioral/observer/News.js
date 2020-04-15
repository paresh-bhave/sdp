
class News {
  constructor(section, headings) {
    this.section = section;
    this.subscribers = [];
  }

  subscribe(observer) {
    this.subscribers.push(observer);
  }

  publish(headings) {
    this.subscribers.forEach(observer => observer.notify(this.section, headings));
  }
}

module.exports = News;
