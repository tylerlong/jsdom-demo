const jsdom = require('jsdom')
const { JSDOM } = jsdom

JSDOM.fromFile('index.html', { resources: 'usable' }).then(dom => {
  setTimeout(function () {
    console.log(dom.serialize())
    console.log(dom.window.document.getElementById('test-id2').innerText)
  }, 3000)
})
