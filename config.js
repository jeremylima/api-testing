var convict = require('convict');

// Schema
var conf = convict({
    env: {
        doc: "The QA Environment.",
        format: ["production", "development", "test"],
        default: "test",
        env: "NODE_ENV",
        arg: "env"
    }
});

// load environment dependent configuration
var env = conf.get('env');
console.log(env);
conf.loadFile('./config/' + env + '.json');

// perform validation
conf.validate();

module.exports = conf;