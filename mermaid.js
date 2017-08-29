const JSDOM = require('jsdom').JSDOM
const fs = require('fs')

JSDOM.fromFile('index.html', { resources: 'usable', runScripts: 'dangerously' }).then(dom => {
  setTimeout(function () {
    const svg = dom.window.document.querySelector('.mermaid').querySelector('svg').outerHTML
    console.log(svg)
    fs.writeFileSync('mermaid.svg', svg)
  }, 3000)
})
