import * as fs from "fs";
import * as iconvlite from "iconv-lite";
function readFileSync_encoding(filename: string | number | Buffer | import("url").URL, encoding: string) {
    var content = fs.readFileSync(filename);
    return iconvlite.decode(content, encoding);
}

let md5 = ""
let cap = ""
let Solved = new Set()

readFileSync_encoding("good.txt","win1251")
.replace(/}\s?\n{/gm, "}|{")
.split("|")
.map((elem)=>{
    md5 = elem.match(/"md5":"(.*?)"/)[1].toString().trim()
    cap = elem.match(/"cap":"(.*?)"/)[1].toString().trim()    
    Solved.add({
        md5 : md5,
        cap : cap        
    })
})

let towrite = JSON.stringify([...Solved])
let endtowrite = ""

readFileSync_encoding("badSolveFromList.txt","win1251")
.replace(/}\s?\n{/gm, "}|{")
.split("|")
.map((elem)=>{
    md5 = elem.match(/"md5":"(.*?)"/)[1].toString().trim()
    cap = elem.match(/"cap":"(.*?)"/)[1].toString().trim()
    console.log(elem)
    const sSearch = `{"md5":"${md5}","cap":"${cap}"}`
    var r = new RegExp(sSearch, 'g');
    towrite = towrite.replace(r,'');
})



fs.writeFileSync("new.txt", towrite);
//console.log(towrite)





/*
//.split('\n')
.map((line) => { 
    const readyline = line.trim();
    return readyline
})
//.filter(Boolean)


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

*/





