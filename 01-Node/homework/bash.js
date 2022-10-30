const commands = require("./commands/index");

process.stdout.write("prompt > ");

process.stdin.on("data", function (data) {
    var args = data.toString().trim().split(" ");//remueve la linea
    var cmd = args.shift();
    if (commands.hasOwnProperty(cmd)) {
        commands[cmd](args)
    } else {
        process.stdout.write("command not found")
        process.stdout.write("\nprompt > ");
    }
})
