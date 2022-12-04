const url = require('url')
const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active')

// Serialized URL
console.log(myUrl.href)
console.log(myUrl.toString())

// Host (root domain)
console.log(myUrl.host)

// Host name (does not get the port)
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname)

// Serialize query
console.log(myUrl.search)

// Params object
console.log(myUrl.searchParams)

// Add param
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)

// Loop through
myUrl.searchParams.forEach((value,name)=> console.log(`${name}: ${value}`))