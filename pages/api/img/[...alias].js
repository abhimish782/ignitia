// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios');

export default async function handler(req, res) {
    const url = `https://res.cloudinary.com/${req.url?.replace("/api/img/", "")}`;
    // const response = await axios(url, { responseType: 'arraybuffer' })
    // const buffer64 = Buffer.from(response.data, 'binary').toString('base64')
    // const decoded = image.content.toString().replace("data:image/png;base64,", "");
    // const imageResp = new Buffer(decoded, "base64");

    axios.get(url, { responseType: 'arraybuffer' })
        .then(function (response) {
            // we will directly send the response to the client
            // but it is recommended to process and map the response
            const buffer64 = Buffer.from(response.data, 'binary') // We can also use 'base64'
            res.writeHead(200, {
                'Content-Type': 'image/png',
                'Content-Length': buffer64.length
            });
            res.end(buffer64);
        })
        .catch(function (error) {
            // incase anything goes wrong
            switch (error.response.status) {
                case 404:
                    res.status(error.response.status).json({ status: error.response.status, message: 'Unable to find image in database.' });
                    break;

                default:
                    res.status(error.response.status).json({ status: error.response.status, message: 'Internal Server Error.' })
                    break;
            }
        });
}