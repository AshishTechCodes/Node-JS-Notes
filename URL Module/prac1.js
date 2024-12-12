var url = require('url');
var adr = 'https://www.nasa.gov/nasa-socials/';
var q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log("host name:",q.host);
console.log("pathname",q.pathname);
console.log("search Detail:",q.search); 