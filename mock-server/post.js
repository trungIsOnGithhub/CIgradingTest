const { json } = require('express');
const fs = require('fs');

// const requestObject = {
//     hk232-0: {
//         result: 
//     },
// };

const resutlTypeConvertFuncMapping = {
    'hk232-0': convertInt,
    'hk232-1': convertInt,
    'hk232-2': convertArray(convertInt)
}

function generateExerciseId(order) { // order start from 0
    return 'hk232-' + order;
}

function prepareRequestTestInfo(stringData, exerciseKey) {
    // let jsonRequestBody = {};

    // let outputByExerciseArr = stringData.split("_");

    let exerciseOutputInfo = {
        result: resutlTypeConvertFuncMapping[exerciseKey](stringData)
    };
    // console.log("Vui " + typeof(exerciseOutputInfo["value"]) + "-" + exerciseOutputInfo['value'].length);

    return exerciseOutputInfo;

    // return jsonRequestBody;
}

function getGithubUsername() {
    return process.env.GH_USRNAME || '?';
}

// driver code
async function main() {
    const url = 'http://localhost:5000';

    let jsonRequestBody = {
        username: getGithubUsername()
    };

    try {
        for (let i = 0; i < 2; ++i) {
            const filename = 'out' + i;

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