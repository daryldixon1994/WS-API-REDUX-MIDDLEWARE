let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third");

let btn = document.getElementById("btn");
btn.addEventListener("click", async function () {
    userProfile();
});

// addColor(1000, first, "red")
//     .then((res) => {
//         console.log(res);
//         addColor(3000, second, "blue").then((res) => {
//             console.log(res);
//             addColor(2000, third, "green").then((res) => console.log(res));
//         });
//     })
//     .catch((err) => console.log(err));

//////////

function addColor(time, selector, color) {
    return new Promise((resolve, reject) => {
        if (selector) {
            setTimeout(() => {
                selector.style.color = color;
                resolve("ok");
            }, time);
        } else {
            reject(`element not found`);
        }
    });
}

/// async await

// const example = async () => {
//     return "hello";
// };
// async function func() {
//     const result = await example();
//     console.log(result);
// }
// func();

//Promises

/// try, catch
const users = [
    {
        id: 1,
        name: "Anwar",
    },
    {
        id: 2,
        name: "Sara",
    },
    {
        id: 3,
        name: "Mohamed",
    },
    {
        id: 4,
        name: "Rania",
    },
];

const posts = [
    {
        id: 1,
        posts: ["one", "two"],
    },
    {
        id: 2,
        posts: ["three", "four"],
    },
    {
        id: 3,
        posts: ["six", "seven"],
    },
    {
        id: 4,
        posts: ["eight", "nine", "ten"],
    },
];

// async function userProfile() {
//     try {
//         let user = await getUser("Anwar");
//         console.log(user);
//         if (user) {
//             let posts = await getUserPosts(user.id);
//             console.log(posts);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
// userProfile();

function getUser(name) {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.name === name);
        if (user) {
            return resolve(user);
        } else {
            reject(`there is no data matching ${name}`);
        }
    });
}
function getUserPosts(userId) {
    return new Promise((resolve, reject) => {
        const userPosts = posts.find((post) => post.id === userId);
        if (userPosts) {
            return resolve(userPosts.posts);
        } else {
            reject("wrong Id");
        }
    });
}

//Fetch API

let url = "https://jsonplaceholder.typicode.com/users";
// console.log(fetch(url));

// fetch(url)
//     .then((response) => response.json())
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

async function getPeople() {
    try {
        const res = await fetch(url);
        const people = await res.json();
        console.log(people);
    } catch (error) {
        console.log(error);
    }
}
getPeople();
