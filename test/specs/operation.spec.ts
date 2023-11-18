import { expect } from '@wdio/globals'
import { operators } from '../../data/testdata.js'
import { timeValidation } from '../../utils/helpers.js'
import SuperCalculatorPage from '../pageobjects/supercalculator.page.js'

describe('Super Calculator suite for Pipeline', () => {
    before(async () => {
        await SuperCalculatorPage.open()
    })

    // Getting test data from command line argument flags
    const firstInput: number = +process.env.FIRST_INPUT! || 3
    const secondInput: number = +process.env.SECOND_INPUT! || 4
    const arithmeticOperation: string = process.env.ARITHMETIC_OPERATION! || "MULTIPLICATION"

    it('does arithmetic operation using an operator', async () => {
        await SuperCalculatorPage.calculateOperation(firstInput, secondInput, arithmeticOperation)
        await SuperCalculatorPage.waitForResult()

        const result = await SuperCalculatorPage.resultContainer.getText()
        const firstRowHistoryInfo = await SuperCalculatorPage.getRowInfoFromHistoryByIndex(1)

        await expect(timeValidation(firstRowHistoryInfo.time)).toEqual(true)
        await expect(firstRowHistoryInfo.result).toEqual(result)
        await expect(result).toEqual(`${eval(`${firstInput} ${operators[arithmeticOperation]} ${secondInput}`)}`)
    })
})