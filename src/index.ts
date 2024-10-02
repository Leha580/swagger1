import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'
import {productsRouter} from "./routes/products-router";
import {addressesRouter} from "./routes/addresses-router";

// create express app
const app = express()
const port = process.env.PORT || 5001

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)


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
]

app.delete('/testing/all-data', (req: Request, res: Response) => {

    res.send(204)
})
app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)


// start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})