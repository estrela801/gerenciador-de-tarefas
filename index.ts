const express= require('express')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
function Root(page: any){
    return path.join(__dirname, `public/${page}`)
}

app.get('/', (req: any,res: any)=>{
    res.sendFile(Root('index.html'))
})


const PORT = process.env.PORT || 3000
app.listen(PORT)