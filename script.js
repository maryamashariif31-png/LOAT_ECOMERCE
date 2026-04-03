// MOBILE MENU TOGGLE
const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");
menuBtn.onclick=()=>navLinks.classList.toggle("show");

// SIMULATED CART
let cart=0;
function addCart(product){
  cart++;
  alert(product + " added to cart. Total items: "+cart);
}

// CONTACT FORM
const contactForm=document.getElementById("contactForm");
if(contactForm){
  contactForm.onsubmit=function(e){
    e.preventDefault();
    let name=this.querySelector('input[type=text]').value;
    let email=this.querySelector('input[type=email]').value;
    let msg=this.querySelector('textarea').value;
    if(name && email && msg){
      alert("Thanks "+name+"! Message sent.");
      this.reset();
    }else{
      alert("Fill all fields.");
    }
  }
}

// ===== DYNAMIC CART FUNCTIONALITY =====
function updateTotals(){
  const items=document.querySelectorAll('.cart-item');
  const subtotalEl=document.getElementById('subtotal');
  const totalEl=document.getElementById('total');
  const shipping=20;

  let subtotal=0;
  items.forEach(item=>{
    const price=parseFloat(item.dataset.price);
    const count=parseInt(item.querySelector('.count').innerText);
    subtotal+=price*count;
  });

  subtotalEl.innerText=subtotal;
  totalEl.innerText=subtotal+shipping;
}

// INITIAL UPDATE
updateTotals();

// QUANTITY & DELETE HANDLERS
document.querySelectorAll('.cart-item').forEach(item=>{
  item.querySelector('.increase').onclick=()=>{
    const countEl=item.querySelector('.count');
    countEl.innerText=parseInt(countEl.innerText)+1;
    updateTotals();
  }

  item.querySelector('.decrease').onclick=()=>{
    const countEl=item.querySelector('.count');
    if(parseInt(countEl.innerText)>1){
      countEl.innerText=parseInt(countEl.innerText)-1;
      updateTotals();
    }
  }

  item.querySelector('.delete-btn').onclick=()=>{
    item.remove();
    updateTotals();
  }
});

// SIMULATED CHECKOUT
document.getElementById('checkout').onclick=()=>{
  alert("Checkout successful!\nTotal: $"+document.getElementById('total').innerText);
}

// ADD TO CART FUNCTION FROM PRODUCT SECTION
function addCart(productName){
  alert(productName + " added to cart!");
}