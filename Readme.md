## Reporting

### Install allure system dependency
> brew install allure

### Install allure command line module
> npm install allure-commandline

### Install allure reporter
> npm install @wdio/allure-reporter --save-dev

### Generate report with data stored in allure-results folder and open reporting server
> allure generate allure-results --clean && allure open

## Test Data Generator

### Install lucapette/fakedata
> brew install lucapette/tap/fakedata


### this configuration in tsconfig.json fix modules' importation in this project
"allowSyntheticDefaultImports": true