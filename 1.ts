import * as fs from "fs";
import * as iconvlite from "iconv-lite";
function readFileSync_encoding(filename, encoding) {
    var content = fs.readFileSync(filename);
    return iconvlite.decode(content, encoding);
}

const goodfile = readFileSync_encoding("good.txt","win1251")
.toString()
.split('\n')
.map((line) => { 
    const readyline = line.trim();
    return readyline
})
.filter(Boolean)

const badSolveFromList = readFileSync_encoding("badSolveFromList.txt","win1251")
.toString()
.split('\n')
.map((line2) => {
    const readyline2 = line2.trim();
    return readyline2
})
.filter(Boolean)
const allArray = [...goodfile,...badSolveFromList]

let fullSet = new Set(); fullSet.add(allArray)

const arrayfromset = Array.from(fullSet)




//console.log(fullSet)
console.log(typeof(fullSet))
console.log(typeof(allArray))
console.log(typeof(goodfile))
console.log(console.log(arrayfromset))







