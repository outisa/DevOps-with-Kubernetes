const express = require('express')
const app = new express()
const scrape = require('website-scraper')
websiteUrl = process.env.WEBSITE_URL
 
getResult = async () => {
  const options = {
  urls: [websiteUrl],
  urlFilter: (url) => url.startsWith(websiteUrl), // Filter links to other websites
  recursive: true,
  maxRecursiveDepth: 10,
  filenameGenerator: 'bySiteStructure',
  directory: '/app/files'
  }
  count = 1
  const result = await scrape(options)
  if (result) {
    console.log('We are ready')
  }
}

getResult()

app.get('/', async(request, response) => {
  let file = `${websiteUrl.substring(8)}index.html`
  console.log(file)
  response.sendFile(`/app/files/${file}`)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})