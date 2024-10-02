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
        /*"canBeDownloaded": true,
        "minAgeRestriction": null,
        "createdAt": "2024-10-02T06:25:23.544Z",
        "publicationDate": "2024-10-02T06:25:23.544Z",*/
        "availableResolutions": [
            "P144"
        ]
    }
]

app.delete('/testing/all-data', (req: Request, res: Response) => {

    //const data = []
    res.send(204)
})


app.post('/videos', (req: Request, res: Response) => {
    const newVideo = {
        id: +(new Date()),
        title: req.body.title,
        author: 'name',
        "availableResolutions": [
            "P144"
        ]
    }
    videos.push(newVideo)
    res.status(202).send(newVideo)
})
app.get('/videos', (req: Request, res: Response) => {
    res.send(videos).status(200)
})
app.get('/videos/:id', (req: Request, res: Response) => {

    let video = videos.find(p => p.id === +req.params.id)
    if (video) {
        res.send(video).status(200)
    } else {
        res.send(404)
    }
})


app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)


// start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})