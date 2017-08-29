const jsdom = require('jsdom')
const { JSDOM } = jsdom

const dom = new JSDOM(`<body>
<script>document.body.appendChild(document.createElement("hr"));</script>
</body>`, { runScripts: 'dangerously' })
console.log(dom.window.document.body.children)
console.log(dom.serialize())
