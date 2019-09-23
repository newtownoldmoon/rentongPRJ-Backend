const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/rentong",
    { useNewUrlParser: true, useUnifiedTopology: true })
const bukkenSchema = mongoose.Schema({
    title: { type: String },
    address: { type: Array },
    rent: { type: Number },
    note: { type: String }
})
const bukken = mongoose.model("rentong", bukkenSchema)
module.exports = bukken