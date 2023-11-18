import { expect } from '@wdio/globals'
import TestData from '../../types/TestData.js'
import { operators, records } from '../../data/testdata.js'
import { timeValidation } from '../../utils/helpers.js'
import SuperCalculatorPage from '../pageobjects/supercalculator.page.js'

describe('Super Calculator', async () => {
    beforeEach(async () => {
        await SuperCalculatorPage.open()
    })

    it('does an arithmetic operation using all the operators', async () => {
        for(const [index, entry] of Object.entries(records)) {
            let i = +index+1
            let record = entry as TestData

            const firstInput: number = +record.firstInput
            const secondInput: number = +record.secondInput
            const arithmeticOperation = record.arithmeticOperation

            await SuperCalculatorPage.calculateOperation(firstInput, secondInput, arithmeticOperation)
            await SuperCalculatorPage.waitForResult(i)

            const result = await SuperCalculatorPage.resultContainer.getText()
            const rowHistoryInfo = await SuperCalculatorPage.getRowInfoFromHistoryByIndex(1)

            await expect(timeValidation(rowHistoryInfo.time)).toEqual(true)
            await expect(rowHistoryInfo.result).toEqual(result)
            await expect(result).toEqual(`${eval(`${firstInput} ${operators[arithmeticOperation]} ${secondInput}`)}`)
        }
    })
})
