const path = require('path');

const root = path.resolve(__dirname, '..');
require('electron-compile').init(root, require.resolve('./main'));
