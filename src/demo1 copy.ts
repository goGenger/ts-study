//lib.d.dom.ts
//lib.d.es5.ts
//输入和输出一定写完全
function alertName(something: string | number): void {

}
function test() {
    const res: string = '宝啊'
    const age: number = 18
    // return [res, age] as const
    return tuplify(res, age)
}
const items = test()
const [res] = items

// utils 元组转为数组
function tuplify<T extends unknown[]>(...elements: T): T {
    return elements
}
interface Big {
    uname: string,
    uage: number
}
const bao: Big = {
    uname: '宝子',
    uage: 12
}
console.log(bao)

