import {Schema, model} from 'mongoose'

const companySchema = Schema({
    name: {
        type: String,
        require: [true, "Name is required"]
    },
    impact: {
        type: String,
        uppercase: true,
        enum: ['LOW', 'MEDIUM', 'HIGH' ],
        required: [true, "Impact is required"]
    },
    yearExp: {
        type: String,
        require: [true, "Password is required"]
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'category', 
        require: true
    }
},{
    versionKey: false
})

export default model('company', companySchema)