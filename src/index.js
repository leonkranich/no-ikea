const fetch = require('isomorphic-fetch');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// fetch("https://www.etsy.com/search?q=jeans", {
// 	mode: 'no-cors'
// })
//   .then(response => response.text())
// 	.then(text => new JSDOM(text))
//   .then((dom) => {
//     console.log(dom.window.document.querySelector("h2").textContent);
//   });

(async () => {
  const response = await fetch('https://example.com');
  const text = await response.text();
  const dom = await new JSDOM(text);
  console.log(dom.window.document.querySelector("h1").textContent);
})()