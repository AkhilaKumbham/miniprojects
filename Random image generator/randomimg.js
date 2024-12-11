const imageFeed = document.getElementById("imageFeed");
const addImageBtn = document.getElementById("addImageBtn");


const imageUrls = [
    "https://images.pexels.com/photos/28857430/pexels-photo-28857430/free-photo-of-stack-of-delicious-homemade-cookies-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/28292874/pexels-photo-28292874/free-photo-of-cozy-bedroom-scene-with-book-and-tea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/29609563/pexels-photo-29609563/free-photo-of-scenic-alpine-landscape-with-rustic-cabins.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/29642313/pexels-photo-29642313/free-photo-of-cozy-dessert-with-chocolate-and-tea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/29633889/pexels-photo-29633889/free-photo-of-handcrafting-a-festive-christmas-wreath.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/29311829/pexels-photo-29311829/free-photo-of-cup-of-coffee-surrounded-by-hazelnuts.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/26833902/pexels-photo-26833902/free-photo-of-minimalism-in-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/29414465/pexels-photo-29414465/free-photo-of-elegant-mirror-reflection-in-sunlit-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
"https://images.pexels.com/photos/29502178/pexels-photo-29502178/free-photo-of-tranquil-garden-oasis-with-white-wall-and-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/19149264/pexels-photo-19149264/free-photo-of-cup-of-coffee-and-christmas-ornaments-on-a-window-sill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=22",
"https://images.pexels.com/photos/5702951/pexels-photo-5702951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"


];


function addRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const imgElement = document.createElement("img");
    imgElement.src = imageUrls[randomIndex];
    imageFeed.appendChild(imgElement);
}


for (let i = 0; i < 6; i++) {
    addRandomImage();
}


addImageBtn.addEventListener("click", addRandomImage);
