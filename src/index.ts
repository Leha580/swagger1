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
        //"createdAt": "2024-10-02T06:25:23.544Z",
        //"publicationDate": "2024-10-02T06:25:23.544Z",
        "createdAt": new Date().toISOString(),
        "publicationDate": new Date().toISOString(),
        "availableResolutions": [
            "P144", "P144", "P240", "P360", "P480", "P720", "P1080", "P1440", "P2160"
        ]
    }
]

app.delete('/testing/all-data', (req: Request, res: Response) => {

    //const data = []
    res.send(204)
})


app.post('/videos', (req: Request, res: Response) => {

    let title = req.body.title
    if(!title || typeof title !== 'string' || !title.trim() || title.length > 40) {
        res.status(400).send({
            errorsMessages: [{
             message: "incorrect title",
             field: "title"
            }]
        })
        return
    }


    const newVideo = {
        id: +(new Date()),
        //title: req.body.title,
        title: 'ssa',
        author: "string",
        canBeDownloaded: true,
        minAgeRestriction: null,
        createdAt: "2024-10-02T06:25:23.544Z",
        publicationDate: "2024-10-03T06:25:23.544Z",
        //publicationDate: req.body.publicationDate,
        availableResolutions: [
            "P144"
        ]
    }
    videos.push(newVideo)
    res.status(202).send(newVideo)




})
app.get('/videos', (req: Request, res: Response) => {
    res.status(200).send(videos)
})
app.get('/videos/:id', (req: Request, res: Response) => {

    let video = videos.find(p => p.id === +req.params.id)
    if (video) {
        res.status(200).send(video)
    } else {
        res.send(404)
    }
})


app.put('/videos/:id', (req: Request, res: Response) => {
    let title = req.body.title
    if(!title || typeof title !== 'string' || !title.trim() || title.length > 40) {
        res.status(400).send({
            errorsMessages: [{
                message: "incorrect title",
                field: "title"
            }]
        })
        return
    }




    let product = videos.find(p => p.id === +req.params.id)
    if (product) {
        product.title = req.body.title
        res.send(product)
    } else {
        res.send(404)
    }
})




// start app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})