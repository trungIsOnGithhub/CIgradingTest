const fetch = require('node-fetch');
const fs = require('fs');

const reponseObject = { // response content format
    username: "example-username",
    tests: {
        'lntc-hk232-exercise-0': {
            test1: {
                args: [69, -68]
            }
        },
        'lntc-hk232-exercise-1': {
            test1: {
                args: [[8888, -8888, 9999]]
            }
        }
    }
};

function formatArrayArg(arg) {
    argStr = JSON.stringify(arg);
    return argStr.substring(1, argStr.length-1).split(',').join(" ");
}

function getTestArgsForExercise(responseObject, attr, testcaseKey) {
    let testSuitInfo = responseObject[attr];
    let content = "";

    for (const arg of testSuitInfo[testcaseKey]['args']) {
        if  (typeof arg === 'object' &&
            typeof arg.length !== 'number') {
            throw new Error("Invalid Argument For Function!");
        }

        if (typeof arg === 'object') {
            content += formatArrayArg(arg) + "\n";
            break;
        }
        
        content += arg + "\n";
    }

    return content;
}

function getHaskellInputFilename(exerciseKey, testcaseKey) {
    return 'in' + exerciseKey.substring(
        exerciseKey.lastIndexOf('-')+1
    ) + testcaseKey;
}


async function main() {
    const url = 'https://ltnchk232.azurewebsites.net/api/HttpTrigger1';

    if (!process.env.API_KEY) {
        throw new Error('Error Resolving API Key!');
    }

    try {
        let responseContent = await fetch(`${url}?code=${process.env.API_KEY}`);

        responseContent = await responseContent.json();

        console.log(JSON.stringify(responseContent));

        // let responseContent = reponseObject;

        for (const exerciseKey of Object.keys(responseContent.tests)) {
            for (const testcaseKey of Object.keys(responseContent.tests[exerciseKey])) {
                let haskellInputFilename = getHaskellInputFilename(exerciseKey, testcaseKey);

                console.log(haskellInputFilename);

                // fs.writeFileSync(haskellInputFilename,
                    // getTestArgsForExercise(responseContent.tests, exerciseKey, testcaseKey));
            }
        }

    } catch(err) {
        console.error(err);
    }
}

main();