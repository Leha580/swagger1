import express, {Request, Response} from 'express'

const app = express()
const port = 3002

app.get('/', (req: Request, res: Response) => {
    let helloMessage = 'www111'
    res.send(helloMessage)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})