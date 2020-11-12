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
    // movefunc()移动函数
function movefunc() {
    var container = document.getElementsByClassName('news_li')[0];
    var oldBottomPos = parseInt(container.style.top);
    var Height = container.children[0].offsetHeight;
    var newBottomPos = oldBottomPos - Height;
    container.style.top = newBottomPos + "px";
}

function autoRullImg() {
    var timer = null;
    var showContainer = document.getElementById("t_news")[0];
    var container = document.getElementsByClassName('news_li')[0];
    var imgNum = container.children.length;
    var Height = container.children[0].offsetHeight;
    // rullAuto()自滚动函数
    function rullAuto() {
        // timer = setInterval("movefunc()", 800); //每隔800毫秒执行一次移动函数
        timer = setInterval(function() {
            movefunc();
            if (parseInt(container.style.top) <= -imgNum * Height) {
                container.style.top = '0px';
            }
        }, 3000);
    }
    rullAuto();
    showContainer.onmouseover = function() {
        clearInterval(timer);
    };
    showContainer.onmouseout = function() {
        rullAuto();
    };
}
window.onload = autoRullImg;