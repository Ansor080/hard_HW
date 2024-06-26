function CartItem(item) {
    const main_div = document.createElement('div')   
    const left = document.createElement('div')   
    const right = document.createElement('div')   
    const img = document.createElement('img')   
    const col = document.createElement('div')   
    const title = document.createElement('span')   
    const counter = document.createElement('div')   
    const plus = document.createElement('button')   
    const minus = document.createElement('button')   
    const amount = document.createElement('input')   
    const price = document.createElement('span')   
    const remove_btn = document.createElement('button')   

    // class
    main_div.classList.add('item')
    left.classList.add('left')
    right.classList.add('right')
    col.classList.add('col')
    counter.classList.add('counter')
    plus.classList.add('plus')
    minus.classList.add('minus')
    amount.classList.add('total')
    // text
    plus.innerHTML = "+"
    minus.innerHTML = "-"
    remove_btn.innerHTML = "remove"
    title.innerHTML = item.title
    price.innerHTML = item.price

    // attr
    img.src = item.image
    img.alt = item.title
    amount.type = "number"
    amount.value = 1

    main_div.append(left, right)
    left.append(img, col)
    col.append(title, counter)
    counter.append(minus, amount, plus)
    right.append(price, remove_btn)

    return main_div 
}

let count_inp = 0; 
let price = arr.price; 


const plus = document.querySelector('plus');
const minus = document.querySelector('minus');
const total = document.querySelector('total');

function allPrice() {
    total.innerHTML = count_inp * price;
}

plus.onclick = () => {
    if (count_inp < 10) {
        count_inp++;
        total.innerHTML = count_inp;
        allPrice();
    }
}

minus.onclick = () => {
    if (count_inp > 0) {
        count_inp--;
        total.innerHTML = count_inp;
        allPrice();
    }
}