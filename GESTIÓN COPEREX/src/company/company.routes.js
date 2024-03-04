import {Router} from 'express'
import { add, filterImpact, filterYears, filterAZ, filterZA, update, generateXLSX } from './company.controller.js'

const api = Router()

api.post('/add', add)
api.put('/update/:id', update)
api.get('/filterYear', filterYears)
api.get('/filterImpact', filterImpact)
api.get('/filterAZ', filterAZ)
api.get('/filterZA', filterZA)
api.get('/generateExcel', generateXLSX)

export default api