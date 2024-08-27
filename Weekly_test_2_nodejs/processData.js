const fs = require('fs');

function saveData(data) {
    fs.writeFileSync('iplData.json', JSON.stringify(data, null, 2));
}
