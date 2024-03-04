import {Schema, model} from 'mongoose'

const categorySchema = Schema({
    name: {
        type: String,
        require: [true, "Name is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    }
},{
    versionKey: false
})

export default model('category', categorySchema)