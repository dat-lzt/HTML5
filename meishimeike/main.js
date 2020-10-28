window.onload = function() {
    var search = document.querySelector('.search');
    var grid = document.querySelector('.grid');
    scrollMenu(search, grid);
}
setTimeout(function() {
    document.getElementById('flash').classList.add('fade')
}, 3000);

function scrollMenu(obj, target) {
    window.onscroll = function() {
        //获取当前页面滚动条纵坐标位置
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var top = target.offsetTop;
        if (scrollTop >= top) {
            obj.className = "search fixed"
        } else {
            obj.className = "search";
        }
    }
}