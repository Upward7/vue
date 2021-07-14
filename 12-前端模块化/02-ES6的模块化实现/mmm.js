import {flag, sum} from "./aaa.js"

if(flag) {
  console.log(sum(1,2));
}

import addr from "./aaa.js"
// console.log(addr);
addr('hello');

// 统一全部导入
import * as aaa from "./aaa.js"
console.log(aaa.flag);
