const nodeList = document.querySelectorAll('article img');
const imgArray = [...nodeList];

// imgArray.forEach(element => {
//     console.log(element);
// });

const imgList = imgArray.map(({src, alt})=>({
    src,
    alt
}));

console.log(imgList);