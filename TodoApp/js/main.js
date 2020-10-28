var removebtn = '<span class="iconfont icon-shanchu"></span>';
var completebtn = '<span class="iconfont icon-duihao"></span>';

//1、用户点击按钮，拿到数据，将数据插入到DOM结构中
document.getElementById('add')
    .addEventListener('click', function() {
        var value = document.getElementById('item').value;
        if (value) {
            //将数据插入到结构中
            addItemTodo(value);
            document.getElementById('item').value = '';
        }
    });
//用户回车，拿到数据，将数据插入到DOM结构中
document.addEventListener('keydown', function() {
    var value = document.getElementById('item').value;
    if (event.keyCode == 13 && value) {
        //将数据插入到结构中
        addItemTodo(value);
        document.getElementById('item').value = '';
    }
})


function addItemTodo(text) {
    var list = document.getElementById('todo');
    //创建li元素
    var item = document.createElement('li');
    item.innerHTML = text;
    // console.log(text);

    //创建div并且给class为todoleft
    var todoleft = document.createElement('div');
    todoleft.classList.add('todoleft');

    //创建两个button，分别是remove & complete
    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removebtn;
    remove.addEventListener('click', removeItem);

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completebtn;
    complete.addEventListener('click', completeItem);

    //将所有元素添加至DOM结构中
    todoleft.appendChild(remove);
    todoleft.appendChild(complete);

    item.appendChild(todoleft);
    list.insertBefore(item, list.childNodes[0]);
}

// 删除按钮
function removeItem() {
    //拿到点击后当前元素
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);
    // console.log(item);
}

//标已完成
function completeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;

    var target = (id === 'todo') ?
        document.getElementById('completed') :
        target = document.getElementById('todo');

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);

    // console.log(target)
}