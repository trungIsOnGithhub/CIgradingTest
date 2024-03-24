const fetch = require('node-fetch');
const fs = require('fs');

const resutlTypeConvertFuncMapping = {
    'lntc-hk232-exercise-0': convertInt,
    'lntc-hk232-exercise-1': convertInt,
    'lntc-hk232-exercise-2': convertArray(convertInt)
}

function generateExerciseId(order) { // order start from 0
    return 'lntc-hk232-exercise-' + order;
}

function prepareRequestTestInfo(stringData, exerciseKey) {
    // let jsonRequestBody = {};

    // let outputByExerciseArr = stringData.split("_");

    let exerciseOutputInfo = {
        test1: {
            result: resutlTypeConvertFuncMapping[exerciseKey](stringData)
        }
    };

    return exerciseOutputInfo;

    // return jsonRequestBody;
}

function getGithubUsername() {
    return process.env.GH_USRNAME || '?';
}

// driver code
async function main() {
    // const url = 'http://localhost:5000';

    let jsonRequestBody = {
        username: getGithubUsername()
    };

    try {
        for (let i = 0; i < 2; ++i) {
            const filename = 'out' + i + 'test1';

            const exerciseKey = generateExerciseId(i);

            const dataRead = fs.readFileSync(filename);

            const strDataRead = dataRead.toString();

            jsonRequestBody[exerciseKey] = prepareRequestTestInfo(strDataRead, exerciseKey);
            // console.log(JSON.stringify(jsonRequestBody));
        }

        // let response = fetch(`${url}/submit`, {
        //     method: "POST",
        //     mode: "cors",
        //     headers: {
        //         "Content-Type": "application/json",
        //       },
        //     body: JSON.stringify(jsonRequestBody)
        // });

        console.log(jsonRequestBody);

    } catch(err) {
        console.error(err);
    }
}

main();


// converter
function convertInt(string) {
    return parseInt(string);
}
function convertFloat(string) {
    return parseFloat(string);
}
function convertArray(callback) {
    return function(string) {
        let tempStringArr = string.substring(1, string.length-1);

        let tempOut = [];
    
        for (let value of tempStringArr.split(",")) {
            tempOut.push(callback(value))
        }
    
        return tempOut;
    }
}