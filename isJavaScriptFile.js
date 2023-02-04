function isJavaScriptFile(fileName) {
    if (typeof fileName != 'string' || fileName.length == 0) {
        return 'Please Valid Input'
    }
    if (fileName.endsWith('.js')) {
        return true;
    }
    else{
        return false;
    }
}

const result = isJavaScriptFile('script.js');

console.log(result);