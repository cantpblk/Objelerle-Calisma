const wrapper = document.querySelector('.wrapper')
const cinsiyet = document.getElementById('cinsiyet')
const yas = document.getElementById('yas')


let sınıf = [
    {

        ad:'Utku',
        cinsiyet:'Erkek',
        yas:27
    },
    {
        ad:'Mehmet',
        cinsiyet:'Erkek',
        yas:23
    },
    {
        ad:'Deniz',
        cinsiyet:'Erkek',
        yas:31
    },
    {
        ad:'Taner',
        cinsiyet:'Erkek',
        yas:32
    },
    {
        ad:'Hasan',
        cinsiyet:'Erkek',
        yas:31
    },
    {
        ad:'Furkan',
        cinsiyet:'Erkek',
        yas:21
    },
    {
        ad:'Sonay',
        cinsiyet:'Kadın',
        yas:21
    },
    {
        ad:'Ömer',
        cinsiyet:'Erkek',
        yas:32
    },
    {
        ad:'Övünç',
        cinsiyet:'Erkek',
        yas:29
    },
    {
        ad:'Serap',
        cinsiyet:'Kadın',
        yas:32
    },
    {
        ad:'Gürcan',
        cinsiyet:'Erkek',
        yas:22
    },
    {
        ad:'Reşat',
        cinsiyet:'Erkek',
        yas:28
    },
]

function ekranaYazdir(x){
    wrapper.innerHTML = ''
    for(let i of x){
        const card = document.createElement('div')
        // card.classList.add('card')
        card.className = 'card'
        const h1 = document.createElement('h1')
        h1.textContent = i.ad
        const h2 = document.createElement('h2')
        h2.textContent = i.cinsiyet
        const h3 = document.createElement('h3')
        h3.textContent = i.yas
        card.append(h1,h2,h3)
        wrapper.append(card)
    }
}
ekranaYazdir(sınıf)

let secilmisler = []
let yasaGore = []
let yaslar = []

cinsiyet.addEventListener('change',()=>{
    secilmisler = []
    yaslar = []
    yas.innerHTML = '<option selected disabled>Yas seçin</option>'
    ekranaYazdir(sınıf)
    
    for(let i of sınıf){
        if (i.cinsiyet == cinsiyet.value){
            secilmisler.push(i)
        }
    }  
   
    
    for(let i of secilmisler){
        if(!yaslar.includes(i.yas)){
            yaslar.push(i.yas)
        }
    }
    for(let i of yaslar){
        const option = document.createElement('option')
        option.textContent = i
        option.value = i
        yas.append(option)
    }  
})

yas.addEventListener('change',()=>{
    yasaGore = []
    for(let i of secilmisler){
        if (i.yas == yas.value){
            yasaGore.push(i)
        }
    }  
    ekranaYazdir(yasaGore)
})
