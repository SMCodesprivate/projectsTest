const fs = require("fs");
const {google} = require('googleapis');

function imageUpload(fileName, filePath, callback){
    require("./gdrive-auth")((auth) => {
        const fileMetadata = {
            name: "teste"
        };

        const media = {
            mimeType: "image/jpeg",
            body: fs.createReadStream('https://cdn.glitch.com/fc8b6166-005c-49a4-b616-1d91b91e0b6c%2F25022402_356384201439286_2084933329143988224_n.jpg?1575137212087')
        }
        
        const drive = google.drive({version: 'v3', auth});
        drive.files.create({
            resource: fileMetadata,
            media: media,
            fields: 'id'
          }, function (err, file) {
            if (err) {
              // Handle error
              console.error(err);
            } else {
              callback(file.data.id);
            }
          });
    });
}

imageUpload();