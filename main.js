// const renderID = document.getElementById("render")
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(respone =>respone.json())
// .then(data =>renderFUnc(data))
// .catch(err =>console.error(err))

// function renderFUnc(data){
//     data.forEach(el => {
//       const p= document.createElement("p")
//       p.innerText = el.name
//        renderID.appendChild(p)
//     });
// }

const API = 'https://jsonplaceholder.typicode.com/photos'
const wrapper =document.querySelector(".wrapper")
const fetchApi = fetch(API)
.then(res => res.json())
.then(data => myFunc(data))
function myFunc(data){
  data.forEach((el)=>{
    const card = document.createElement("div")
    card.innerHTML = `
    <div class="card">
    <img src="${el.thumbnailUrl}" alt="">
    <p>${el.title}</p>
    <p>${el.id}</p>
    </div>
    `
     wrapper.appendChild(card)
  })
}