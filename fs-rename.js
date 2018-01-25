console.log("\n\tFile Renamer v0.1");

var fileServer = require('fs');
var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

function renameFile(fileName, newFileName) {
    fileServer.rename(fileName, newFileName, function (error) {
        // console.log(error);
    });
}

rl.question("Input file PATH > ", function(path) {
    rl.question("Input file NAME > ", function(fileName) {
        rl.question("Input file EXTENSION > ", function(extension) {

            console.log("your located files in '" + path + "/' renamed to '" + fileName + "' with extension '" + extension + "'");

            fileServer.readdir(path, function (error, files) {
                for (var i = 0; i < files.length; i++) {
                    renameFile(path + files[i], path + fileName + "-" + i + "." + extension);
                }
            });

            rl.close();

        });
    });
});