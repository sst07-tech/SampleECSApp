//exports.handler = async (event) => {

//console.log("Event, ", JSON.stringify(event));


const https = require('http');

//var fileName = event.Records[0].s3.object.key;
var fileName = "test4.txt";
const options = {
    hostname: `mydemoapplb-355072577.us-east-1.elb.amazonaws.com`,
    port: '80',
    path: `/tapin/${fileName}`,
    method: 'GET',
};

//const url = `http://mydemoapplb-355072577.us-east-1.elb.amazonaws.com:80/tapin/test.txt`;

console.log("Options, ", JSON.stringify(options));

const req = https.request(options, res => {
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

const request = require('request');
const data = {
    latitude: "28.9845° N",
    longitude: "77.7064° E",
    location: "Meerut"
}
const weather = (url, callback) => {
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            console.log('Unable to connect to weather service');
        } else if (body.error) {
            console.log('Unable to find location');
        }
        else {
            // console.log(response);
            //Since we have used json: true above. We don't have to parse the body explicitly in JSON Object.
            // const data = JSON.parse(body);
            console.log(body.currently);
            //console.log(response.statusCode);

            console.log(`It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipIntensity} chance of rain.`);
            callback(undefined, body);
        }
    })
};

const url = `https://api.darksky.net/forecast/54721615fbad2c8f43dfe1bd5bf1d2e4/${data.latitude},${data.longitude}`;

weather(url, (error, body) => {
    console.log('Body',body.currently);
});

//};
