
 const items_arr=[
    {
        image_url:'img/cz.jpg',
        rare:1
    },
    {
        image_url:'img/p90.jpg',
        rare:1
    },
    {
        image_url:'img/g3.jpg',
        rare:1
    },
    {
        image_url:'img/galil.jpg',
        rare:1
    },
    {
        image_url:'img/p250.jpg',
        rare:1
    },
    {
        image_url:'img/m249.jpg',
        rare:1
    },
    {
        image_url:'img/mp5.jpg',
        rare:1
    },
    {
        image_url:'img/awp.jpg',
        rare:2
    },
    {
        image_url:'img/berrets.jpg',
        rare:2
    },
    {
        image_url:'img/nova.jpg',
        rare:2
    },
    {
        image_url:'img/muha.jpg',
        rare:2
    },
    {
        image_url:'img/ump.jpg',
        rare:2
    },
    {
        image_url:'img/f57.jpg',
        rare:3
    },
    {
        image_url:'img/mk.jpg',
        rare:3
    },
    {
        image_url:'img/usp.jpg',
        rare:3
    },
    {
        image_url:'img/mks.jpg',
        rare:4
    },
    {
        image_url:'img/glock.jpg',
        rare:4
    },
 ]

const img=document.createElement('img')

const inventory=document.querySelector('.inventory')

const invent_but=document.querySelector('.invent_but')

const inv_con=[]

let value='100'

const len=items_arr.length

const score=document.querySelector('.score')

const save=document.querySelector('.btn_save')

const sell=document.querySelector('.btn_sell')

const btn=document.querySelector('.btn_open')

const res=document.querySelector('.res')

const modal=document.getElementById('modal_inv')

let drop=null

score.append(value)

function render_skins(){
    const items=document.getElementById('items')
    items_arr.forEach((item)=>{
        const item_img=document.createElement('img')
        item_img.setAttribute('src',item.image_url)
        item_img.classList.add('item')
        items.appendChild(item_img)
    })
}
render_skins()

function render_inv(){
    modal.innerHTML=''
    inv_con.forEach((item)=>{
        
        const item_img=document.createElement('img')
        item_img.setAttribute('src',item.image_url)
        item_img.classList.add('item')
        modal.appendChild(item_img)
    })
}

btn.addEventListener('click',()=>{
    save.classList.add('opened')
    sell.classList.add('opened')
    if (Number(value)>=10){
    score.innerHTML=''
    value=Number(value)-10
    score.append(value)
    
    drop=items_arr[Math.floor(Math.random()*len)]
    
    img.setAttribute('src',drop.image_url)
    res.innerHTML=''
    img.classList.add('res_img')
    res.appendChild(img)
                          }
    
  
})

sell.addEventListener('click',()=>{
    
    if (drop.rare==1){
        value+=5
        score.innerHTML=''
        score.append(value)
    }
    if (drop.rare==2){
        value+=7
        score.innerHTML=''
        score.append(value)
    }
    if (drop.rare==3){
        value+=12
        score.innerHTML=''
        score.append(value)
    }
    if (drop.rare==4){
        value+=17
        score.innerHTML=''
        score.append(value)
    }
    res.innerHTML=''
})

save.addEventListener('click',()=>{
    res.innerHTML=''
    inv_con.push(drop)
    render_inv()
    
})

invent_but.addEventListener('click',()=>{
    open_modal()
    render_inv()
})

function open_modal(){
    modal.classList.add('visible')
}

function close_modal(){
    modal.classList.remove('visible')
}
document.addEventListener('keypress',(event)=>{
    event.preventDefault()
    if(event.code=='Enter'){
        close_modal()
    }
    
})





