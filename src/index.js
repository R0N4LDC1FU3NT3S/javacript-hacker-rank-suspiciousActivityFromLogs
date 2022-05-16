import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';
import {processLogs} from './functions.js'

let inputString = [];

export function main() {    
    const logsCount = parseInt(inputString.shift(), 10)

    let logs = [];

    for (let i = 0; i < logsCount; i++) {
        const logsItem = inputString.shift()
        logs.push(logsItem);
    }

    const threshold = parseInt(inputString.shift(), 10)
    console.log("Main",{logs,threshold})

    const result = processLogs(logs, threshold);

    console.log(result.join('\n') + '\n');
}

const rl = readline.createInterface({ input, output });

rl.on("line",(inputStdin)=>{
	if (inputStdin.trim() == "exit") {
		process.exit()
	}
	inputString.push(inputStdin.trim())
	console.log("inputString:>>>>", inputString)
})

rl.on("close", () => {
	main()
})