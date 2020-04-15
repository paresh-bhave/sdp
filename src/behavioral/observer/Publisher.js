
class Publisher {
  constructor(name) {
    this.name = name;
  }
  notify(section, newHeadings) {
    console.log(`\n#Publisher: ${this.name}`);
    if (typeof newHeadings === 'object') {
      console.log(`  #${section}:`);
      newHeadings.forEach((heading) => {
         console.log(`    ${heading}`);
      });
    }
    if (typeof newHeadings === 'string') {
      console.log(`  #${section}: ${newHeadings}`);
    }
  }
}

module.exports = Publisher;
