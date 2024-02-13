const fetch = require('node-fetch');
const fs = require('fs');

const reponseObject = { // response content format
    username: "hihi",
    tests: {
        'hk232-0': {
            args: [69, -68]
        },
        'hk232-1': {
            args: [[8888, -8888, 9999]]
        }
    }
};

function formatArrayArg(arg) {
    argStr = JSON.stringify(arg);
    return argStr.substring(1, argStr.length-1).split(',').join(" ");
}

function getTestArgsForExercise(responseObject, attr) {
    let testSuitInfo = responseObject.tests[attr];
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

function getHaskellInputFilename(exerciseKey) {
    return 'in' + exerciseKey.substring(
        exerciseKey.indexOf('-')+1
    );
}

async function main() {
    // const url = 'http://localhost:5000';
    try {
    //     let responseContent = await fetch(url);

    //     responseContent = responseContent.json();

        let responseContent = reponseObject;

        for (const exerciseKey of Object.keys(responseContent.tests)) {
            let haskellInputFilename = getHaskellInputFilename(exerciseKey);

            fs.writeFileSync(haskellInputFilename,
                getTestArgsForExercise(responseContent,exerciseKey));
        }

        let resp = await fetch('https://reqres.in/api/users/2');

        let json = await resp.json();

        console.log(json);
    } catch(err) {
        console.error(err);
    }
}

main();