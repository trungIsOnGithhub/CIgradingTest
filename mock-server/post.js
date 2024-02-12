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

function prepareRequestBody(stringData) {
    let jsonRequestBody = {};

    let outputByExerciseArr = stringData.split("_");

    for (let index in outputByExerciseArr) {
        let exerciseKey = generateExerciseId(index);
        let exerciseOutputInfo = {
            result: resutlTypeConvertFuncMapping[exerciseKey](outputByExerciseArr[index])
        };
        // console.log("Vui " + typeof(exerciseOutputInfo["value"]) + "-" + exerciseOutputInfo['value'].length);

        jsonRequestBody[exerciseKey] = exerciseOutputInfo;
    }

    return jsonRequestBody;
}

// driver code
async function main() {
    const url = 'http://localhost:5000';
    try {
        for (let i = 0; i < 2; ++i) {
            const filename = 'out' + i;

            const dataRead = fs.readFileSync(filename);

            const strDataRead = dataRead.toString();

            let jsonRequestBody = prepareRequestBody(strDataRead);

            let response = fetch(`${url}/submit`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(jsonRequestBody)
            });

            console.log(JSON.stringify(jsonRequestBody));
        }
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