var outputType = 'ARRAY';
var input  = null;
var output = null;

var fs = require('fs');

var scriptName = process.argv[1].split('/');
scriptName = scriptName[ scriptName.length - 1 ];

function get_usage() {
    var usage = "\n";
    usage += "Usage: " + scriptName + ' <options> <input markdown file>\n';
    usage += "options:\n";
    usage += get_options('\t') + '\n';
    return usage;
}

function get_options(prefix) {
    var options = "";
    options += prefix + '--array    (to output as an array : DEFAULT)\n';
    options += prefix + '--string   (to output as a flat string)';
    options += prefix +  '--help     (to display this output and exit)';
    return options
}

function print_usage(exit, code) {
    console.log(get_usage());
    if (exit) {
        process.exit(code);
    }
}

function toString(text) {
    return '"'+text.replace(/\n/g, '\\n').replace(/"/g, "\\\"") + '"';
}

function toArray(text) {
    var arrayText = "";
    arrayText += "[\n";

    text = text.replace(/"/g, "\\\"");
    text.split('\n').map(function(line) {
        arrayText += '"' + line + '",\n';
    });

    arrayText += "]";
    return arrayText;
}

// now the main code

if (process.argv.length == 4) {
    if (process.argv[2] == '--array') {
        outputType = 'ARRAY';
    }
    else if (process.argv[2] == '--string') {
        outputType = 'STRING';
    }
    else {
        print_usage(true, -1);
    }
    
    input = process.argv[3];
    output = input + '.converted.json';
}
else if (process.argv.length == 3)
{
    if (process.argv[2] == '--help') {
        print_usage(true, 0);
    }
    else {
        input = process.argv[2];
        output = input + '.converted.json';
    }
}
else {
    console.error('Incorrect arguments!');
    print_usage(true, -1);
}

// load the file
fs.readFile(input, function(err, data) {
    if (err) {
        throw err;
    }
    // make it a string
    data = new String(data);
    // now convert
    var outputData = '';
    if (outputType == 'ARRAY') {
        outputData = toArray(data);
    }
    else if (outputType == 'STRING') {
        outputData = toString(data);
    }
    // write output
    fs.writeFile(output, outputData, 'utf8', (err) => {
        if (err) {
            throw err;
        }
        process.exit(0);
    });
});
