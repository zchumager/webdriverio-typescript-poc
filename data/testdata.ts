import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'

const operators = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data/operators.json'), 'utf-8'))
const records = parse(fs.readFileSync(path.join(process.cwd(), 'data/testdata.csv')), {
    columns: true,
    skip_empty_lines: true
})

export {
    operators,
    records
}