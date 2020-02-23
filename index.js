const express = require('express');
const fs = require('fs');
const app = express();
app.listen(3000, function () {
    console.log('Node listening on port 3000')
})

app.get('/', function (req, res) {
    res.send(' <div>\n' +
        '        <form>\n' +
        '            <input name="session id" placeholder="00000000">\n' +
            '            <input name="nickname" placeholder="player">\n' +
        '            <button>Submit</button>\n' +
        '        </form>\n' +
        '    </div>');
    console.log(req.query);
    fs.writeFile('repo/sessions.json', JSON.stringify(req.query), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
})




app.post('/', function(req, res){
    console.log(req.body);
    res.send("recieved your request!");
});