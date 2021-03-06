import * as fs from "fs";
import * as iconvlite from "iconv-lite";
var encoding = require("encoding");

function readFileSync_encoding(
	filename: string | number | Buffer | import("url").URL,
	encoding: string
) {
	const content = fs.readFileSync(filename);
	return iconvlite.decode(content, encoding);
}

let md5 = "";
let cap = "";
const Solved = new Set();

readFileSync_encoding("good.txt", "win1251")
	.replace(/\[|\]/gm, "")
	.replace(/\},/gm, "}\n")
	.replace(/}\s?\n{/gm, "}|{")
	.split("|")
	.map(elem => {
		Solved.add({
			md5: elem
				.match(/"md5":"(.*?)"/)[1]
				.toString()
				.trim(),
			// tslint:disable-next-line:object-literal-sort-keys
			cap: elem
				.match(/"cap":"(.*?)"/)[1]
				.toString()
				.trim(),
		});
	});

let towrite = JSON.stringify([...Solved]);

readFileSync_encoding("badSolveFromList.txt", "win1251")
	.replace(/}\s?\n{/gm, "}|{")
	.split("|")
	.map(elem => {
		md5 = elem
			.match(/"md5":"(.*?)"/)[1]
			.toString()
			.trim();
		cap = elem
			.match(/"cap":"(.*?)"/)[1]
			.toString()
			.trim();
		const sSearch = `{"md5":"${md5}","cap":"${cap}"}`;
		const r = new RegExp(sSearch, "g");
		towrite = towrite.replace(r, "").replace(/\,\,/gm, ",");
	});

var result = encoding.convert(towrite, "WINDOWS-1251", "UTF-8");
fs.writeFileSync("new.txt", result);
