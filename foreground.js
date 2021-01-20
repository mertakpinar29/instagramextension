const getUnfollowers = document.createElement('button');
getUnfollowers.innerText = "GET UNFOLLOWERS";
getUnfollowers.id = "getUnfollowers";
getUnfollowers.class="button-primary";
document.querySelector('header').appendChild(getUnfollowers);


var button = document.getElementById("getUnfollowers");

var namesTakipci = [];
var namesTakipEdilen = [];
var unfollowers = [];


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function takipciListFunc () {
    document.querySelector('a.-nal3 ').click();
    button.remove();
    ht=1;
    last_ht=0;
    while(last_ht!=ht){
        last_ht=ht;
        await sleep(1000);
        document.querySelector('div.isgrP').scrollTo(0,document.querySelector('div.isgrP').scrollHeight);
        ht=document.querySelector('div.isgrP').scrollHeight;
        linksTakipci = document.querySelectorAll('a.FPmhX.notranslate._0imsa ');
        //console.log(linksTakipci.length);
    }
    }
    

async function takipEdilenListFunc(){
    ht=1;
    last_ht=0;
    while(last_ht!=ht){
        last_ht=ht;
        await sleep(1000);
        document.querySelector('div.isgrP').scrollTo(0,document.querySelector('div.isgrP').scrollHeight);
        ht=document.querySelector('div.isgrP').scrollHeight;
        linksTakipEdilen = document.querySelectorAll('a.FPmhX.notranslate._0imsa ');
    }
}


button.addEventListener('click' ,async()=>{  
    await takipciListFunc();
    linksTakipci.forEach(element => {
        namesTakipci.push(element.innerText);
    });
    document.querySelector("body > div.RnEpo.Yx5HN > div > div > div:nth-child(1) > div > div:nth-child(3) > button").click();
    await sleep(1000);
    document.querySelector("#react-root > section > main > div > header > section > ul > li:nth-child(3) > a").click();
    await takipEdilenListFunc();
    linksTakipEdilen.forEach(element=>{
        namesTakipEdilen.push(element.innerText);
    });
    namesTakipEdilen.forEach(element => {
        if(namesTakipci.includes(element))
        return;
        unfollowers.push(element);
    });
    document.querySelector("body > div.RnEpo.Yx5HN > div > div > div:nth-child(1) > div > div:nth-child(3) > button").click();
    await sleep(1000);

    const container = document.createElement('div');
    container.class="container";
    const h1 = document.createElement('h1');
    h1.innerText='UNFOLLOWERS';
    h1.id="title";
    container.appendChild(h1);
    const list = document.createElement('ul');
    list.id="ul";
    container.appendChild(list);
    container.id="div";
    document.querySelector('header').appendChild(container);


    await sleep(1000);

        unfollowers.forEach(element=>{
            const li = document.createElement('li');
            li.innerText='@'+element;
            li.id="li";
            list.appendChild(li);
           }); 
    

});









