const products=[
 {name:'Essential Tee',color:'white',price:'54,95 EUR',type:'tee'},
 {name:'Essential Tee',color:'black',price:'54,95 EUR',type:'tee'},
 {name:'Motion Boxers 3 Pack',color:'red',price:'41,95 EUR',type:'boxers'},
 {name:'Motion Boxers 3 Pack',color:'black',price:'41,95 EUR',type:'boxers'},
 {name:'Flow Hoodie',color:'olive',price:'117,95 EUR',type:'hoodie'},
 {name:'Flow Joggers',color:'black',price:'117,95 EUR',type:'pants'},
 {name:'Flow Hoodie',color:'navy',price:'117,95 EUR',type:'hoodie'},
 {name:'Flow Joggers',color:'navy',price:'117,95 EUR',type:'pants'}
];
const colors={white:'#f7f7f4',black:'#121419',red:'#c92342',olive:'#626855',navy:'#1e2940'};
const grid=document.querySelector('#products');const cart=document.querySelector('.cart b');let count=0;
products.forEach((p)=>{const card=document.createElement('article');card.className='product-card';card.innerHTML=`<div class="product-visual"><div class="garment ${p.type}" style="--c:${colors[p.color]}"></div><button class="plus" aria-label="Ajouter ${p.name}">+</button></div><div class="dots">● ○ ○</div><div class="product-name">${p.name} (${p.color})</div><div class="price">${p.price}</div>`;card.querySelector('.plus').onclick=()=>{count++;cart.textContent=count};grid.appendChild(card)});
