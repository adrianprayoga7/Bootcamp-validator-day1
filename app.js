//core module
//file system
const validator = require('validator');

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readLine.question(`Siapa Nama Kamu?`, name => {
    readLine.question(`Berapa Nomor Telepon?`, tlp => {
        if (!validator.isMobilePhone(tlp, ['id-ID'])) {
        readLine.question(`Tuliskan email kamu?`, email => {
            if (!validator.isEmail(email)) {
                console.log(`Hi ${name}`);
                console.log(`Nomormu ${tlp}`);
                console.log(`Emailmu ${email}`);
                
            } else {
                console.log("Email tidak valid");
            }
        });
        } else {
            console.log("Nomor Telepon tidak valid");
        }
        readline.close();
    });
});


 