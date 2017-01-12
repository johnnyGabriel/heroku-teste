const http = require('http')

http.createServer( (req, res) => {

    res.writeHead(200, { "Content-Type": "text-html" })

    res.end(

        "<html>" +
            "<head>" +
                "<title>Hello World!</title>" +
            "</head>" +
            "<body>" +
                "<h1> Hello World! </h1>" +
                "<p> Lorem ipsum dolor sit amet consectetur </p>" +
            "</body>" +
        "</html>"

    )

}).listen( process.env.PORT )
