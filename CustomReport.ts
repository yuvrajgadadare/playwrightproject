import type {
  FullConfig, FullResult, Reporter} from "@playwright/test/reporter";
class MyReporter implements Reporter {
 constructor(options: { customOption?: string } = {}) {
    console.log(`my-awesome-reporter setup with customOption set to ${options.customOption}`);
  }
  onBegin(config: FullConfig, suite: any) {
    console.log(`Starting the run with ${suite.allTests().length} tests`);
  }
  onTestBegin(test: any, result: any) {
    console.log(`Starting test ${test.title}`);
  }
  onTestEnd(test: any, result: any) {
    console.log(`Finished test ${test.title}: ${result.status}`);
  }
  onEnd(result: FullResult) {
    console.log(`Finished the run: ${result.status}`);
  }
}
export default MyReporter;