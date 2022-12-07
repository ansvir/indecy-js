import {IndecyTemplate} from "../core/IndecyTemplate.js";

const it = new IndecyTemplate()

it.declare({
  name: "Flow1",
  initValue: 1.0,
  cases: [
    {
      name: "Case1",
      branches: [
        { target: "Case2", condition: 1.0 === 1.0, result: 0.5 },
        { target: "Case3", condition: 1.0 === 2.0, result: 0.3 },
        { target: "Case3", condition: 3.0 === 1.0, result: 0.7 },
        { target: "Case2", result: 0.7 }
      ]
    },
    {
      name: "Case2",
      branches: [
        { target: "Case3", condition: 1.4 === 1.0, result: 0.1 },
        { target: "Case3", condition: 1.1 === 2.0, result: 0.2 },
        { target: "Case3", condition: 3.0 === 1.0, result: 0.3 },
        { target: "Case3", result: -0.5 }
      ]
    },
    {
      name: "Case3",
      branches: [
        { condition: 1.0 === 1.0, result: 0.1 },
        { condition: 1.0 === 0.5, result: 0.2 },
        { condition: 1.0 === 2.0, result: 1.0 },
        { condition: 1.0 === 2.0, result: -2.0 },
        { result: -1.5 }
      ]
    }
  ]
})

console.log(it.result)
