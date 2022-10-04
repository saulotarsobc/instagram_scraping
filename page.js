const imgArray = [...document.querySelectorAll('article img')];

imgArray.forEach(element => {
    console.log(element);
});

const imgList = imgArray.map(({ src, alt }) => ({ src, alt }));

console.log(imgList);