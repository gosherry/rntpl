/**
 * synchronous fonts to android
 */

const child_process = require('child_process');
const fs = require('fs');

const subPath = __dirname.substring(0, __dirname.lastIndexOf('/'));
const src = subPath + '/assets/fonts/iconfont.ttf';
const dest = subPath + '/android/app/src/main/assets/fonts/';
const mkSrc = subPath + 'android/app/src/main/assets'; 
const mksupSrc = subPath + 'android/app/src/main/assets/fonts'; 

if (!fs.existsSync('android/app/src/main/assets')) {
	fs.mkdirSync('android/app/src/main/assets');
}
if (!fs.existsSync('android/app/src/main/assets/fonts')) {
	fs.mkdirSync('android/app/src/main/assets/fonts');
}

console.log(`src path ${ src }`);
console.log(`dest path ${ dest }`);

// action
child_process.execSync(`cp ${ src } ${ dest }`);

console.log('congratulations, synchronous success');