import { $ } from '@wdio/globals';
import Page from './page.js';

class SuperCalculatorPage extends Page{
    private _firstInput: string = '[ng-model="first"]'
    private _goButton: string = '#gobutton'
    private _operatorDropdown: string = '[ng-model="operator"]'
    private _resultContainer: string = `${this._goButton} + .ng-binding`
    private _secondInput: string = '[ng-model="second"]'
    private _tableBody: string = ':has(>[ng-repeat="result in memory"])'
    private _url: string = 'https://juliemr.github.io/protractor-demo/'

    public get firstInput(){
        return $(`${this._firstInput}`)
    }

    public get goButton() {
        return $(`${this._goButton}`)
    }

    public get operatorDropdown() {
        return $(`${this._operatorDropdown}`)
    }

    public get resultContainer() {
        return $(this._resultContainer)
    }

    public get secondInput() {
        return $(`${this._secondInput}`)
    }

    private _buildRowHistorySelectorByIndex(rowIndex: number = 1) {
        return `${this._tableBody} tr:nth-child(${rowIndex})`
    }

    public async calculateOperation(firstNumber: number, secondNumber: number, operation: string) {
        await this.firstInput.setValue(firstNumber)
        await this.operatorDropdown.selectByAttribute('value', operation)
        await this.secondInput.setValue(secondNumber)
        await this.goButton.click()
    }

    public async getRowInfoFromHistoryByIndex(rowIndex: number = 1) {
        const time = await $(`${this._buildRowHistorySelectorByIndex(rowIndex)} td:nth-child(1)`).getText()
        const operator = await $(`${this._buildRowHistorySelectorByIndex(rowIndex)} td:nth-child(2) span:nth-child(2)`).getText()
        const result = await $(`${this._buildRowHistorySelectorByIndex(rowIndex)} td:nth-child(3)`).getText()

        return {
            'time': time,
            'operator': operator,
            'result': result
        }
    }

    public open() {
        return super.open(this._url)
    }

    public async waitForResult(rowIndex: number = 1) {
        await $(this._buildRowHistorySelectorByIndex(rowIndex)).waitForDisplayed()
    }
    
}

export default new SuperCalculatorPage();
