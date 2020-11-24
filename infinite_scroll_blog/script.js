//获取节点
const postContainer = document.getElementById('posts-container');
const loading = document.querySelector(".loader");

//加载帖子
let limit = 5;
let page = 1;
//发送请求
async function getPosts() {
    const res = await fetch(
        `http://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`

    )
    const data = await res.json();
    return data;
}

async function showPosts() {
    const posts = await getPosts();
    // console.log(posts);
    posts.forEach(post => {
        const postEl = document.createElement("div");
        postEl.classList.add("post");
        postEl.innerHTML = `
            <div class="number">${post.id}</div>
            <div class="post-info">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">
                ${post.body}
                </p>
            </div>
      `;
        postContainer.appendChild(postEl);
    })
}

function showLoading() {
    loading.classList.add('show');
    setTimeout(() => {
        loading.classList.remove("show")
        setTimeout(() => {
            page++;
            showPosts();
        }, 300);
    }, 1000);
}

showPosts();
// 事件监听
window.addEventListener("scroll", () => {
    // console.log(document.documentElement)
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        showLoading();
    }
});

//过滤帖子

const filter = document.getElementById("filter");

//事件监听
window.addEventListener("input", filterPosts)

function filterPosts(e) {
    const term = e.target.value.toUpperCase();;
    const posts = document.querySelectorAll(".post");

    posts.forEach(post => {
        const tilte = post.querySelector(".post-title").innerText.toUpperCase();
        const body = post.querySelector(".post-body").innerText.toUpperCase();

        if (tilte.indexOf(term) > -1 || body.indexOf(term) > -1) {
            post.style.display = "flex";
        } else {
            post.style.display = "none";
        }
    })
}