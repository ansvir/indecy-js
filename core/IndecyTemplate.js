export class IndecyTemplate {

    casesMap = [{}]
    result

    declare(flow) {
        let initValue = flow.initValue
        flow.cases.forEach(c => this.casesMap.push({name: c.name, value: c}))
        this.nextCase(flow.cases[0], initValue)
    }

    nextCase(next, result) {
        if (next === undefined) {
            this.result = result
        } else {
            const branch = next.branches
                .filter(b => b.hasOwnProperty("condition") ? b.condition : true)[0]
            result += branch.result
            this.nextCase((this.casesMap.filter(cm => cm.name === branch.target)[0]).value, result)
        }
    }

    get result() {
      return this.result
    }

}
