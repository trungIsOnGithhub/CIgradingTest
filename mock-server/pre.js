const fs = require('fs');

// const reponseObject = { // response content format
//     username: "hihi",
//     'hk232-0': {
//         args: [69, -68]
//     },
//     'hk232-1': {
//         args: [[8888, -8888, 9999]]
//     }
// };

function formatArrayArg(arg) {
    argStr = JSON.stringify(arg);
    return argStr.substring(1, argStr.length-1).split(',').join(" ");
}

function getContetForExercise(responseObject, attr) {
    let testSuitInfo = responseObject[attr];
    let content = "";

    for (const arg of testSuitInfo['args']) {
        if  (typeof arg === 'object' &&
            typeof arg.length !== 'number') {
            throw new Error("Invalid Argument For Function!");
        }

        if (typeof arg === 'object') {
            content += formatArrayArg(arg) + "\n";
            break;
        }
        
        content += arg + "\n";

        // for (value of valueArray) {
        //     content += value + "\n";
        // }
    }

    return content;
}


async function main() {
    const url = 'http://localhost:5000';
    try {
        let responseContent = await fetch(url);

        responseContent = responseContent.json();

        fs.writeFileSync('in0', getContetForExercise(responseContent ,'hk232-0'));
        fs.writeFileSync('in1', getContetForExercise(responseContent ,'hk232-1'));
    } catch(err) {
        console.error(err);
    }
}

main();