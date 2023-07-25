const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const readlineSync = require('readline-sync');
const commonFunctions = require('./commonFunctions');

(async () => {
  commonFunctions.clean(['./src/images/webps/*']);
  const confirmation = readlineSync.question('The above list of files will be cleaned. Are you sure want to continue? (y/n):');
  if(confirmation === 'y'){
    // commonFunctions.clean(['./src/images/webps/*'], {
    // forced: true,
    // });
    // console.log('Generating Weps...');
    // await imagemin(['./src/images/**/*.{jpg,png}', '!./src/images/resized/*'], {
    // destination: './src/images/webps',
    // plugins: [
    //    imageminWebp({
    //      quality: 75,
    //    }),
    //  ]
    // });
    console.log('Task Aborted');
  }
  else{
    console.log('Task Aborted');
    process.exit(1);
  }
  console.log('Webps Generated');
})();
