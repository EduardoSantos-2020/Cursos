const Base_Url='https://dog.ceo/api/breeds/image/random';
const btnDog=document.getElementById('change-dog');

const imgDogs = async()=>{
    const data=await fetch(Base_Url)
    .then((res)=>res.json())
    .catch((e)=>console.log(e))
        
    return data.message;
    
}


// const imgDogs = async()=>{
//     try{   
//         const getDogs=await fetch(Base_Url);
//         const json=await getDogs.json();
//     return json.message;
//     }catch(e){
//     console.log(e.message);
//     }
// }



const loadingImg=async()=>{
const CampImg=document.getElementById('dog');
CampImg.src= await imgDogs();
}

loadingImg()

btnDog.addEventListener('click',loadingImg)


