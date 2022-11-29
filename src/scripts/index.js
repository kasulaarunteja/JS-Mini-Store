
let currentpage = 1;
if(currentpage === 1){
  document.getElementById("previous").disabled = true;
}

let prev = document.getElementById("previous");
prev.addEventListener("click", () => {ChangePage(-1)});

let nexts = document.getElementById("next");
nexts.addEventListener("click", () => {ChangePage(1)});

function ChangePage(pageNo){

  if(currentpage === 2 && pageNo === -1){
    document.getElementById("previous").disabled = true;
    currentpage = currentpage+pageNo;
    datafetch(currentpage);
  }else if(currentpage === 3 && pageNo === 1){
    document.getElementById("next").disabled = true;
    currentpage = currentpage + pageNo;
    datafetch(currentpage);
  }
  else{
    document.getElementById("previous").disabled = false;
    document.getElementById("next").disabled = false;
    currentpage = currentpage + pageNo;
    datafetch(currentpage);
  }
  
}




async function datafetch(pageNum) {
  const response = await fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=${pageNum}`,
  )
  // if(pageNum == 4){
  //   document.getElementById("next").disabled = true;
  // }else if(pageNum == 1){
  //   document.getElementById("pervious").disabled = true;
  // }
  const res = await response.json()

  AppendDateToDiv(res)
}

datafetch(currentpage)


let cart  = JSON.parse(localStorage.getItem("cart")) || [];

// let count= [];
    let x = cart?.length ? cart.length : 0 ;
    document.querySelector('#cart_count').textContent = x;


function AppendDateToDiv(arr) {
  document.querySelector('#main_items').innerHTML = null
  console.log(arr)
  arr.data.map((e, id) => {
    let div = document.createElement('div')

    let img = document.createElement('img')
    img.src = e.image

    let P = document.createElement('P')
    P.innerText = e.category

    let h2 = document.createElement('h2')
    h2.innerText = e.title

    let h3 = document.createElement('h3')
    h3.innerText = `Brand:- ${e.brand}`

    let h4 = document.createElement('h4')
    h4.innerText = `Price :- ${e.price}`

    var btn = document.createElement('button')
    btn.addEventListener('click', cartFun)
    btn.className = 'add_to_cart'
    btn.textContent = 'add to cart'

    function cartFun() {
      cart.push(e)
      document.querySelector('#cart_count').textContent = cart.length
      localStorage.setItem('cart', JSON.stringify(cart))
    }

    div.append(img, P, h2, h3, h4, btn)

    document.querySelector('#main_items').append(div)
  })
}
