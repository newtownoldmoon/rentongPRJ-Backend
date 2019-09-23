const express = require("express")
const bukken = require("./models/bukken")
const app = express()
app.use(express.json())
app.use(require("cors")())
//增
app.post("/api", async function (req, res) {
    const add = req.body
    try {
        await bukken.create(add)
        res.send(add)
        console.log(add)
    } catch (err) {
        console.log(err)
    }
})
//删
app.delete("/api/:id", async function (req, res) {
    const remove = await bukken.findById(req.params.id)
    try {
        await remove.remove()
        res.send({ removed: true })
    } catch (err) {
        console.log(err)
    }

})
//改
app.put("/api/:id", async function (req, res) {
    let edit = await bukken.findById(req.params.id)
    edit.title = req.body.title
    edit.address = req.body.address
    edit.rent = req.body.rent
    edit.note = req.body.note
    try {
        await edit.save()
        res.send(edit)
    } catch (err) {
        console.log(err)
    }
})
//查
app.get("/api", async function (req, res) {
    const search = await bukken.find()
    res.send(search)
})
//定义端口
const port = 2333
app.listen(port, () => {
    console.log("服务正在监听端口 : " + port)
})