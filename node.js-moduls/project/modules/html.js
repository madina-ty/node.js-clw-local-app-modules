function createHTML(data) {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>My HTML</title>
        </head>
        <body>
          ${data}
        </body>
      </html>
    `;
  }
  
  module.exports = { createHTML };