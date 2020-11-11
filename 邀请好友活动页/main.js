var btn = document.getElementById('click-footer');
var maskShow = document.getElementById('mask-show');
var actionSheet = document.getElementById('actionSheet');
// 取消按钮
var cancel = document.getElementById('cancel');
// 邀请徒弟
btn.onclick = function show() {
    maskShow.style.display = 'block';
    actionSheet.style.bottom = '0';
}
maskShow.onclick = function maskcancel() {
        maskShow.style.display = 'none';
        actionSheet.style.bottom = '-100%';
    }
    //取消
cancel.onclick = function Cancel() {
        maskShow.style.display = 'none';
        actionSheet.style.bottom = '-100%';
    }
    // 轮播组件
function movefunc() {
    var container = document.getElementsByClassName('news_li')[0];
    var oldBottomPos = parseInt(container.style.top);
    var Height = container.children[0].offsetHeight;
    var newBottomPos = oldBottomPos - Height;
    // var imgNum = container.children.length;
    container.style.top = newBottomPos + "px";
    console.log(container.style.top)
}

function autoRullImg() {
    // var showContainer = document.getElementById("t_news")[0];
    var timer = null;

    function rullAuto() {
        timer = setInterval("movefunc()", 800); //每隔800毫秒执行一次移动函数
        // if (parseInt(container.style.top) <= -imgNum * Height){

        // }
    }
    rullAuto();
    // showContainer.onmouseout = function() {
    //     rullAuto();
    // };
}
window.onload = autoRullImg;