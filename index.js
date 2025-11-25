
// DOM操作相关js代码
const box1 = document.getElementById("box1");
console.log(box1.innerHTML);

const box2 = document.getElementsByClassName("box2");
console.log(box2[0].textContent);

// 表格操作相关js代码

// 新增行函数
function add() {
    let table_element = document.getElementById('table')

    let newRow = table.insertRow(); // 创建新行
    newRow.insertCell(0).innerText = '新增姓名'; // 在索引0处插入
    newRow.insertCell(1).innerText = '新增手机号';  // 
    newRow.insertCell(2).innerHTML = '<button onclick="deleteRow(this)">删除</button> <button onclick="editRow(this)">修改</button>'
}

document.getElementById("add_data").addEventListener("click", add);

//删除行函数
function deleteRow(button) {
    button.closest('tr').remove();   // 找到行并直接删掉

}

//编辑行函数
function editRow(button) {

    const current_row = button.closest('tr')
    const name = current_row.cells[0]
    const tel = current_row.cells[1]

    // 如果已经是“编辑模式”就执行保存，否则进入编辑
    if (button.textContent === '保存') {
        // 保存：把输入框的值写回单元格
        name.innerText = name.querySelector('input').value;
        tel.innerText = tel.querySelector('input').value;
        button.textContent = '修改';   // 按钮文案切回来
    } else {
        // 进入编辑：把单元格内容换成 <input>
        const oldName = name.innerText;
        const oldTel = tel.innerText;
        name.innerHTML = `<input type="text" value="${oldName}">`;
        tel.innerHTML = `<input type="text" value="${oldTel}">`;
        button.textContent = '保存';   // 按钮文案变“保存”
    }
}


var name = 'window';

function Person(name) {
    this.name = name;

    this.foo1 = function () {
        console.log(this.name);
    };

    this.foo2 = () => console.log(this.name);

    this.foo3 = function () {
        return function () {
            console.log(this.name);
        };
    };

    this.foo4 = function () {
        return () => {
            console.log(this.name);
        };
    };
}

var person1 = new Person('person1');
var person2 = new Person('person2');

person1.foo1(); // person1
person1.foo1.call(person2); // person2

person1.foo2(); // person1
person1.foo2.call(person2); // person1

person1.foo3()(); // window
person1.foo3.call(person2)(); // window
person1.foo3().call(person2); // person2

person1.foo4.call(person2)(); // person2
person1.foo4().call(person2);   // person1