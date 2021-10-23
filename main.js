class PhotoGallary {
    constructor(){
        this.api_key = '563492ad6f9170000100000120d9b650553f4feead891d9518cab46c';
        this.glarydiv = document.querySelector('.contentdiv');
        this.search = document.querySelector('.searchbar');
        this.redmore = document.querySelector('#redmore');
        this.eventhandel();
    }
    eventhandel(){
        document.addEventListener('DOMContentLoaded',()=>{
            this.getImg();
        });
    }
   async getImg(){
        let baseURL = "https://api.pexels.com/v1/curated?per_page=8";
      let data = await this.feachImgs(baseURL);
      this.genarethtml(data.photos);
      console.log(data);
    }
    async feachImgs(baseURL){
        let respons = await fetch(baseURL,{
            method: 'GET',
            headers:{
                Accept: 'application/json',
                Authorization: this.api_key
            }
        });
        let data = await respons.json();
        return data;
    }
    genarethtml(photos){
        photos.forEach(photo => {
            let item = document.createElement('div');
            item.classList.add('items');
            item.innerHTML = `
            <img src="${photo.src.medium}" alt="imeg" id="img">
            <div class="potografardiv">
             <p id="fhotogname">${photo.photographer}</p>
             </div>
            `;
            this.glarydiv.appendChild(item);
        });
    }
}

let galary = new PhotoGallary;