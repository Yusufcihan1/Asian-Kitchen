const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/3E4C2DED-D0F9-45CD-B476-8BA54E533AD9/Derivates/d17260c9-bc36-4fb0-bbf1-3b4b8427be74.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let btnContainerDOM = document.querySelector('.btn-container');
let menuList = document.querySelector('.section-center');

//Tüm kategorileri alıyoruz.
const categories = [...new Set(menu.map(item=>item.category))]; //Map fonksiyonu menu içerisinideki itemlerin kategorilerini aldı....new Set fonksiyonu ise sadece benzersiz olan kategori isimlerini getirdi
categories.unshift("All") //kategorilerin ilk sırasına all seçeneğini ekledik
console.log(categories); 
//Kategori isimleri ile buton oluşturuyoruz.
const btnCategories = []; // boş bir array oluşturduk 
categories.forEach(name =>{ //categories array'i içindeki bütün değerleri aldık
  const btn =`<button type="button" class="btn btn-outline-dark btn-item" data-id=${name}>${name}</button>`;
  btnCategories.push(btn);//bu değerlere karşılık gelen buton isimlerini boş arrayın içine pushladık
});
console.log(btnCategories);
btnContainerDOM.innerHTML = btnCategories.join('');  //Ayraçların gitmesi için join komutunu ekledik ve tek bir diziye dönüştürdük

//Butonlara click event ekliyoruz.
const allBtn = document.querySelectorAll(".btn-item");

allBtn.forEach((btn) => { //Her bir buton için 
  btn.addEventListener("click", (e) => { //clik eventi ekledik
    
    btnCategory=e.currentTarget.dataset.id; //her tıklandığında tıklanan objenin data id'sini al 
    console.log(btnCategory);

    const menuCategoryItem = menu.filter((item)=>{ //menü arrayini filtreledik
      if(item.category==btnCategory){ //eğer menünün içindeki kategori , buton kategorisine eşit ise
        return item; //o kategorinin bulunduğu sınıfı döndür.
      };
    });
    console.log(menuCategoryItem);
    if(btnCategory==="All"){
      menuHTML(menu);
    }else{
      menuHTML(menuCategoryItem);
    }
  });

});

const menuHTML= (menuItems) =>{
  const menuDisplay = menuItems.map((item)=>{
    return `<div class="menu-items col-5">
    <img class="photo" src=${item.img} alt=${item.title}>
    <div class="menu-info">
    <div class="menu-title">${item.title}</div>
    <div class="price">${item.price}</div>
    <div class="menu-text">${item.desc}</div>
    </div>
    </div>`
  }).join();
  menuList.innerHTML = menuDisplay;
};

menuHTML(menu);





