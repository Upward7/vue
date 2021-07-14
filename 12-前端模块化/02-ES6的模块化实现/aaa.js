var flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

// 1. 导出方式1
export {
  flag, sum
}
// 2. 导出方式2
// export var flag = true;

// 3. 导出函数 / 类
// export function sum(num1, num2) {
//   return num1 + num2;
// }

// 4. export default
// const address = '重庆市';
// // 让导入者自己命名 
// export default address
// 在同一个模块中只允许存在一个 export default 
export default function (argument) {
  console.log(argument);
}