function random(){
    let image1="https://picsum.photos/id/237/200/300";
    let image2="https://picsum.photos/seed/picsum/200/300";
    let image3="https://picsum.photos/200/300?grayscale";
    let image4="https://picsum.photos/200/300";
    let image5="https://picsum.photos/200/300.jpg";
    let image6="https://picsum.photos/200/300?grayscale";

    let imageArray=[image1,image2,image3,image4,image5,image6];

 }

        
    for (t in imageArray){
        let image=document.createElement("img");
        image.src=t
        image.appendChild(imgContainer)
    }




