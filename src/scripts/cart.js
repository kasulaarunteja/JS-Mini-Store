let Checkout = JSON.parse(localStorage.getItem('cart')) || []
displayproduct(Checkout)

var x = Checkout.length
document.querySelector('#cart_count').textContent = x

function displayproduct(Checkout) {
  document.querySelector('#items').innerHTML = null
  Checkout.map(function (ele, id) {
    let div = document.createElement('div')
    div.className = 'item'
    let img = document.createElement('img')
    img.src = ele.image

    let P = document.createElement('P')
    P.innerText = ele.category

    let h2 = document.createElement('h2')
    h2.innerText = ele.title

    let h3 = document.createElement('h3')
    h3.innerText = ele.brand

    let h4 = document.createElement('h4')
    h4.innerText = ele.price

    let btn = document.createElement('button')
    btn.className = 'remove'
    btn.textContent = 'remove'
    btn.addEventListener('click', function () {
      Deleteit(id)
    })

    div.append(img, P, h2, h3, h4, btn)

    document.querySelector('#items').append(div)
  })

  function Deleteit(id) {
    Checkout.splice(id, 1)
    document.querySelector('#cart_count').textContent = x - 1
    localStorage.setItem('cart', JSON.stringify(Checkout))
    displayproduct(Checkout)
  }
}

document.getElementById('checkout').addEventListener('click', function () {
  let name = document.getElementById('name').value
  alert(`succefull ${name}`)
})
