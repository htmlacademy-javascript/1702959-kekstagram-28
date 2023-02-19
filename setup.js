const fs = require('fs');
const vm = require('vm');

const globalContext = vm.createContext(global);

// Load the script files
vm.runInContext(fs.readFileSync('js/functions.js'), globalContext, { filename: 'functions.js' });
