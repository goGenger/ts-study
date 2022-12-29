//对象静态类型
const xiao: {
    name: string,
    age: number
} = {
    name: 'aa',
    age: 12
}

const xiaos: string[] = ['1', '2']

class Person { }

const my: Person = new Person()

const see: () => string = () => {
    return ''
}
// 对象类型 数组类型 类类型 函数类型