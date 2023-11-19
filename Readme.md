## Execution

### Example of execution for operation
> FIRST_INPUT=NUMBER_1 SECOND_INPUT=NUMBER_2 ARITHMETIC_OPERATION="OPERATION_NAME" npm run operation

OPERATION_NAME
- ADDITION
- SUBTRACTION
- MULTIPLICATION
- DIVISION
- MODULO

### Run sanity script using commandline arguments
> sh sanity.sh

### Execution command for e2e suite using testdata.csv
> npm run e2e

## Configuration

### this configuration in tsconfig.json fix modules' importation in this project
"allowSyntheticDefaultImports": true

## Reporting

### Install allure system dependency
> brew install allure

### Install allure command line module
> npm install allure-commandline

### Install allure reporter
> npm install @wdio/allure-reporter --save-dev

### Generate report with data stored in allure-results folder and open reporting server
> allure generate allure-results --clean && allure open
