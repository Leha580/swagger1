"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const products_router_1 = require("./routes/products-router");
const addresses_router_1 = require("./routes/addresses-router");
// create express app
const app = (0, express_1.default)();
const port = process.env.PORT || 5001;
const parserMiddleware = (0, body_parser_1.default)({});
app.use(parserMiddleware);
const videos = [
    {
        "id": 0,
        "title": "string",
        "author": "string",
        "canBeDownloaded": true,
        "minAgeRestriction": null,
        "createdAt": "2024-10-02T06:25:23.544Z",
        "publicationDate": "2024-10-02T06:25:23.544Z",
        "availableResolutions": [
            "P144"
        ]
    }
];
app.delete('/testing/all-data', (req, res) => {
    //const data = []
    res.send(204);
});
app.post('/videos', (req, res) => {
    const newVideo = {
        id: +(new Date()),
        //title: req.body.title,
        title: 'ss',
        author: "string",
        canBeDownloaded: true,
        minAgeRestriction: null,
        createdAt: "2024-10-02T06:25:23.544Z",
        publicationDate: "2024-10-03T06:25:23.544Z",
        //publicationDate: req.body.publicationDate,
        availableResolutions: [
            "P144"
        ]
    };
    videos.push(newVideo);
    res.status(202).send(newVideo);
});
app.get('/videos', (req, res) => {
    res.send(videos).status(200);
});
app.get('/videos/:id', (req, res) => {
    let video = videos.find(p => p.id === +req.params.id);
    if (video) {
        res.send(video).status(200);
    }
    else {
        res.send(404);
    }
});
app.use('/products', products_router_1.productsRouter);
app.use('/addresses', addresses_router_1.addressesRouter);
// start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
