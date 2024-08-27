const axios =require("axios");
const fs=require("fs");
const cheerio =require("cheerio");
const xlsx =require("xlsx");



let url="https://www.amazon.com/s?k=phone&page=2&crid=18EUYBSP7O1SQ&qid=1702535235&sprefix=phon%2Caps%2C280&ref=sr_pg_2";
async function getData(){
let response=await axios.get(url);
fs.writeFileSync("data.txt",response.data);
}
getData(url);

 let html=fs.readFileSync("data.txt","utf-8");
//  console.log(html);
 let $=cheerio.load(html);

 let ProductsPrice=[];
 let ProductsRating=[];
 let ProductsName=[];
$(".a-price-whole").each((index,element)=>{
    ProductsPrice.push($(element).text());
//  console.log($(element).text());
});

$(".a-size-medium.a-color-base.a-text-normal").each((index,element)=>{
    ProductsName.push($(element).text());
    // console.log($(element).text());
});
let answer=$(".a-icon.a-icon-star-small.aok-align-bottom .a-icon-alt").each((index,element)=>{
    ProductsRating.push($(element).text());
    // console.log($(element).text());
});

// console.log(ProductsName,ProductsPrice,ProductsRating);

let exceldata=[];
exceldata.push(['Title', 'Price', 'Rating'])
for(let i=0;i<ProductsName.length;i++){
    let innerdata=[ProductsName[i],ProductsPrice[i],ProductsRating[i]];
    exceldata.push(innerdata);
}

console.log(exceldata);

const workbook = xlsx.utils.book_new();
const sheet = xlsx.utils.aoa_to_sheet(exceldata);
xlsx.utils.book_append_sheet(workbook, sheet, 'Sheet1');
xlsx.writeFile(workbook, 'output.xlsx');

   
 