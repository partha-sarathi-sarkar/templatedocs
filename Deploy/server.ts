import express from "express";
import path from 'path';

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(express.static(__dirname + '/_docs'));
// app.get('/first', function(req, res) {
//     fs.readFile( '../articles/jenkins-intro.md', 'utf-8', function(err, data) {
//       if (err) throw err;
//       res.send(converter.makeHtml(data));
//     });
// });

app.get('/', function (req, res)
{
     res.sendFile(path.join(__dirname + '/_docs/readme.html'))
});

app.get('/articles/jenkins-intro', function (req, res)
{
     res.sendFile(path.join(__dirname + '/_docs/articles/jenkins-intro.html'))
});

app.get('/articles/docker-intro', function (req, res)
{
     res.sendFile(path.join(__dirname + '/_docs/articles/docker-intro.html'))
});


app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port")
    );
    console.log("  Press CTRL-C to stop\n");
});