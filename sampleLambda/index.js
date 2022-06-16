const http = require('http');

// exports.handler = async (event) => {
    
//     console.log("Event, ", JSON.stringify(event));
//     let fileName = event.Records[0].s3.object.key;
//     const res = await callLB(fileName);
    
//     return res;
// };

let response = main();

async function main(){
    console.log("Event, ");
    let fileName = "file4.txt"; //event.Records[0].s3.object.key;
    const res = await callLB(fileName);
    
    return res;
}

async function callLB(fileName){
    console.log("Call LB invoked ");
    //var fileName = event.Records[0].s3.object.key;
    let pathOfFile = `/tapin/test5.txt`;
    const options = {
        hostname: 'mydemoapplb-355072577.us-east-1.elb.amazonaws.com',
        port: '80',
        path: pathOfFile,
        method: 'GET',
    };
    
    const url = "http://mydemoapplb-355072577.us-east-1.elb.amazonaws.com/tapin/test.txt";
    
    console.log("Options, ", JSON.stringify(options));
    
    try{
        
        const req =  await http.request( options, res => {
            console.log("Invoking ");
            console.log(`statusCode: ${res.statusCode}`);

            res.on('data', d => {
                console.log(d.toString());
            });
        
        // // TODO implement
        // const response = {
        //     statusCode: 200,
        //     body: JSON.stringify('Hello from Lambda!'),
        // };
        // return response;
            });

            req.on('error', error => {
                console.error(error);
            });

            req.end();
        
        }catch (error) {
            console.log("Error, ", error);
        }
    
    
        return "success";

    }