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
.replace(/\[|\]/gm, "")
.replace(/\},/gm, "}\n")
.replace(/}\s?\n{/gm, "}|{")
.split("|")
.map((elem)=>{
    Solved.add({
        md5 : elem.match(/"md5":"(.*?)"/)[1].toString().trim(),
        cap : elem.match(/"cap":"(.*?)"/)[1].toString().trim()        
    })
})

let towrite = JSON.stringify([...Solved])
readFileSync_encoding("badSolveFromList.txt","win1251")
.replace(/}\s?\n{/gm, "}|{")
.split("|")
.map((elem)=>{
    md5 = elem.match(/"md5":"(.*?)"/)[1].toString().trim()
    cap = elem.match(/"cap":"(.*?)"/)[1].toString().trim()
    console.log(elem)
    const sSearch = `{"md5":"${md5}","cap":"${cap}"}`
    var r = new RegExp(sSearch, 'g');
    towrite = towrite.replace(r,'').replace(/\,\,/gm, ",");
})

fs.writeFileSync("new.txt", towrite);
