import React, { useState, useEffect } from "react";
import imageToBase64 from 'image-to-base64/browser';
import interact from "interactjs";
import html2canvas from "html2canvas";
import { FacebookButton, FacebookCount } from "react-social";
import { BsZoomIn, BsZoomOut } from "react-icons/bs";
import { BsArrowCounterclockwise, BsArrowClockwise } from "react-icons/bs";
import Function from "./Function";
import Database,{DEFAULT_OPTIONS} from "./Database";
import { Link, useLocation,useParams } from "react-router-dom";
import PhotoEditer from "./PhotoEditer";
import Slider from "./Slider";
import { Timestamp,collection, onSnapshot, orderBy, query,addDoc,doc, where ,deleteDoc } from "firebase/firestore";
import { storage, db, auth } from "../Server/Configer";
import { getStorage, ref, uploadBytes,uploadString ,getDownloadURL} from "firebase/storage";
import { BsShareFill } from "react-icons/bs";
import domtoimage from "dom-to-image-more";
import { Stepper } from 'react-form-stepper';
import { saveAsPng, saveAsJpeg } from 'save-html-as-image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import downloadjs from 'downloadjs';
import {ShareSocial} from 'react-share-social' 
 
const Frame = () => {
  // const {SelectedGraphics}=useParams();
 const { SelectedGraphics } = useLocation().state;
  const [image, setImage] = useState({
    image: "one",
    size: 600,
    sizesm:280,
    orentation: "",
    rotate: "0",
    zindex: "-z-50",
    export:false,
    wh:800,
    ww:200,
    positiony:'',
    screen:'false',
  });
  const position = { x: 0, y: 0 };

  const [fburl,setFburl]=useState();
  const [graphics, setGraphics] = useState(SelectedGraphics);
  const [value, setValue] = useState(false);
  const [notification, setNotify] = useState(null);
  const [zindex, setZindex] = useState("-3");
  const [opacity, setOpacity] = useState("1");
  const Inc = () => {
    setImage({ ...image, size: image.size + 10,wh: image.wh + 20 });
  };
  const Dic = () => {
    setImage({ ...image, size: image.size - 10,wh: image.wh - 20 });
  };
  const Left = () => {
    setImage({ ...image, rotate: image.rotate - 10 });
  };
  const Right = () => {
    setImage({ ...image, rotate: image.rotate + 10 });
  };
  const changGraphics = (image) => {
    
    setGraphics(image);
   };

  const download = () => {
    if (value == true) {
      setNotify("Your are in Editing Mode Please uncheck Edit!");
    } else {
      setNotify(null);
      eventHandler();
    }
  };
  const eventHandler = () => {
    const storage = getStorage();
const storageRef = ref(storage,
  `/Temp/${Date.now()}${image.image}`);

    // domtoimage
    // .toPng(document.getElementById("image"), { quality: 0.95 })
    // .then(function (dataUrl) {
    //   const message2 = '5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
    //   uploadString(storageRef, dataUrl, 'data_url').then((snapshot) => {
    //     console.log('Uploaded a base64 string!');
    //     getDownloadURL(snapshot.ref).then((url) => {
    //       setFburl(url);
    //     });
    //   });
    //   var link = document.createElement("a");
    //   link.download = "my-image-name.png";
    //   link.href = dataUrl;
     
    //   link.click();
    // });
   
    // const screenshotTarget = document.querySelectorAll("#export").forEach(el=>{
    //   el.style.width="800px";
    //  el.style.height="800px";
    // });
    // const screenshotTargetg = document.querySelectorAll("#g").forEach(el=>{
    //  // el.style.width="560px";
    //   //el.style.height="560px";
    //   //el.style.backgroundImage=`url(${SelectedGraphics})`;
    //  // el.style.backgroundSize="560px,560px"
    // });
    const screenshotTargeti = document.querySelectorAll("#export").forEach(el=>{
      const screenshotTarget = document.querySelectorAll("#image").forEach(ei=>{
        const screenshotTargeti = document.querySelectorAll("#export").forEach(eg=>{
     // el.style.backgroundImage=`url(${SelectedGraphics})`;
   
      el.style. backgroundImage= `url(${image.image})`;
      el.style.touchAction= "none";
      el.style. userselect= "none";
      el.style. backgroundSize=`${image.wh}px,${image.wh}px` 
      el.style.transform = ei.style.transform;
    el.style. width= '800px';
      el.style. height= '800px';
      el.style. backgroundRepeat= "no-repeat";
    });
    });
  });

    // const yu= document.createElement(screenshotTarget);
  
 
    
    // var img = new Image();
    // img.src = canvas.toDataURL("image/png");
    // img.width = width;
    // img.height=height;
//     window.devicePixelRatio = 2;
//     html2canvas(screenshotTarget,  {
//       width: 1200,
//       height: 1200
//     }).then((canvas) => {
//       const base64image = canvas.toDataURL();
//       var extra_canvas = document.createElement("canvas");
//       extra_canvas.setAttribute('width',500);
//       extra_canvas.setAttribute('height',500);
//       var ctx = extra_canvas.getContext('2d');
//       ctx.drawImage(canvas,0,0,1010, 1010,0,0,800,800);
//       var dataURL = extra_canvas.toDataURL();
//       var img = document.createElement('img');
//       img.setAttribute('src', dataURL);
//       // insert the thumbnail at the top of the page
//     //  $('body').prepend(img);
//    // console.log(dataURL);
// // document.getElementsByClassName('img')[0].appendChild(div);
//     // domtoimage.toPng(document.getElementById("image"),{quality:0.95})
//     // .then(function (dataUrl){
//     //   var link=document.createElement('a');
//     //   link.download='my-image-name.png';
//     //   link.href=dataUrl;
//     //   link.click();
//     // })
//    // const base64images = screenshotTarget.toDataURL();
   
//    // console.log(canvas);

//       var anchor = document.createElement("a");
//       anchor.setAttribute("href", screenshotTarget);
//       anchor.setAttribute("download", "my-image.png");
//       //anchor.click();
//       //anchor.remove();
//    });

//html2canvas(document.querySelector("#image")).then(canvas => {
  //document.body.appendChild(canvas.toDataURL());
//   let uiui=document.getElementById("image");
// let images = new Image();
// images.src =SelectedGraphics;
// images.width=800;
// images.setAttribute('id','misu');
// images.setAttribute('style',`background-image:url(${ canvas.toDataURL("image/jpeg",1.0)});background-repeat: no-repeat; background-size:100%,100%`);
//document.body.appendChild(images);
  //console.log(images)
  
  window.devicePixelRatio = 2;
  htmlToImage.toPng(document.querySelector("#image"),{ quality: 0.95 })
  .then(function (dataUrl) {
    downloadjs(dataUrl, 'download.png', 'image/png');
    // var anchor = document.createElement("a");
    //     anchor.setAttribute("href", dataUrl);
    //     anchor.setAttribute("download", "my-image.png");
    //   anchor.click();
    //     anchor.remove();
  });
//    html2canvas(document.querySelector("#image"),{ quality: 0.95 }).then(canvas => {
//     const base64images = canvas.toDataURL();
// // //var newData=base64images.replace(/^data.image\/png/,"data:application/octet-stream");

// //   // var extra_canvas = document.createElement("canvas");
// //   //       extra_canvas.setAttribute('width',500);
// //   //       extra_canvas.setAttribute('height',500);
// //   //       var ctx = extra_canvas.getContext('2d');
// //   //       ctx.drawImage(canvas,0,0,500, 500,0,0,800,800);
// //   //       var dataURL = extra_canvas.toDataURL();
// //   //       var img = document.createElement('img');
// //   //       img.setAttribute('src', dataURL);       
// //        // document.body.appendChild(newData);
//   var anchor = document.createElement("a");
//         anchor.setAttribute("href", base64images);
//         anchor.setAttribute("download", "my-image.png");
//       anchor.click();
//         anchor.remove();
// downloadjs(base64images, 'download.png', 'image/png');
//    });
//});
  };
 
  const handleImageChange = (e) => {
   // setNotificationTwo('')
  //  setImage({
  //   ...image,
  //   [e.target.name]: URL.createObjectURL(e.target.files[0])
  // }); 
  
setImage({
  ...image,[e.target.name]: URL.createObjectURL(e.target.files[0])}); 
imagewh(e);
  };
  const imagewh=(e)=>{
    
    const file = e.target.files[0];
    

    let reader=new FileReader()
reader.readAsDataURL(file)
reader.onload=function(e){
const image=new Image()
image.src=e.target.result
image.onload=function(){
const height=this.height
const width=this.width
console.log(width,height);
 
   
  }
}
  }
  const ZINDEX = (e) => {
    if (value == false) {
      setValue(e.target.checked);
      setZindex("3");
      setOpacity("0.5");
    } else {
      setValue(e.target.checked);
      setZindex("-3");
      setOpacity("1");
      setNotify(null);
    }
  };

  
  interact(".draggable").draggable({
    listeners: {
      start(event) {
        console.log(event.type, event.target);
      },
      move(event) {
        position.x += event.dx;
        position.y += event.dy;
       
        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
     
      },
      
    },
   
  });

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const selectedOption = options[selectedOptionIndex];

  function handleSliderChange({ target }) {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;
        return { ...option, value: target.value };
      });
    });
  }

  function getImageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return filters.join(" ");
  }
  const [search,setSearch]=useState(
    {
        data: [],
        value: ''
      }
)
  useEffect(()=>{
    const productRef = collection(db, "Frame");
      const q = query(productRef,   orderBy("createdAt", "desc"));  onSnapshot(q, (snapshot) => {
        const frame = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
    
      setSearch({...search , data:frame});
    });
    },[]);  
  //   useEffect(()=>{
  // if(window.screen.availWidth<=768){
  //   //setImage({...search , screen:'true'});
  //   setImage({...search , size:'200'});
  // }else{
  //   //setImage({...search , screen:'false'});
  //   setImage({...search , size:'400'});
  // }
  //   },[])
 const[notif,setNotificationTwo]=useState('')
function exports(){
  if(image.image=='one'){
    toast('Pelase Select a Photo!')
  }else{
    toast('Please wait request processing...')
  
  
    window.devicePixelRatio = 2;
  htmlToImage.toPng(document.querySelector("#image"),{ quality: 0.95 })
  .then(function (dataUrl) {
    //downloadjs(dataUrl, 'download.png', 'image/png');
   
    const storage = getStorage();
    const storageRef = ref(storage,
      `/Temp/${Date.now()}${image.image}`);
      
    uploadString(storageRef, dataUrl, 'data_url').then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        toast('Process completed You can  Now Share!');
        setFburl(url);
        setImage({...image,export:true})
      });
  
   } );
  });
   
   
  
  }
 
}

  return (
    <div >
       <ToastContainer />
      <div className="container-fluid mt-5">
        <div className="row  ">
          <div className="col-12 col-lg-6 col-md-6 ">
            <div className="border-dashed border-2 border-indigo-600 m-4 bg-white rounded-md w-[340px] h-[360px] md:w-[500px] md:h-[500px] shadow-lg justify-center items-center mx-auto ">
              <div
                 
                className="image relative justify-center mx-auto shadow-lg w-[320px] h-[340px] md:w-[480px] md:h-[480px] mt-2 "     
                style={{
                  backgroundColor: "#fff",
                  overflow: "hidden",
                  zIndex: "1",
                }}
              >
                <div
               id="image"
                  className="w-[320px] h-[340px]  md:h-full   md:w-full  bg-smolle md:bg-contain "
                  style={{
                    position: "absolute",
                    backgroundImage: `url(${graphics})`,                 
                    overflow: "hidden",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    top: "0px",
                    left: "0px",
                    overflow: "hidden",
                  }}
                
                > 
  
 

 
                <div 
                 id="draggable"
               
                  className={`draggable   `}
                  

                  style={{
                    position: "absolute",
                    backgroundImage: `url(${image.image})`,
                    touchAction: "none",
                    userselect: "none", 
                    backgroundSize: `${image.size}px,${image.size}px`,                 
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top ",
                    transform: "rotate(" + image.rotate + "deg)",
                   // resize: "both",
                    width: `${image.size}px`,
                    height: `${image.size}px`,
                    top: "0px",
                    left: "0px",
                    zIndex: `${zindex}`,
                    opacity: `${opacity}`,
                    cursor: "move",
                    filter: `${getImageStyle()}`,
                  }}
                >
                               
                                
                                  </div>
                                  </div> 
              </div>
            </div>
          </div>
         
          <div className="col-12 col-lg-6 col-md-6  text-right ">
         
            <div>
           
            <label name='FrameImage' className="flex flex-col w-full h-20 mt-5 md:h-32 border-4 border-dashed  hover:bg-gray-100 hover:border-gray-300">
                   
                   <div className="flex flex-col items-center justify-center md:pt-7">
                       <svg xmlns="http://www.w3.org/2000/svg"
                           className="w-8 h-8 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                           fill="currentColor">
                           <path fill-rule="evenodd"
                               d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                               clip-rule="evenodd" />
                       </svg>
                       <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                           Select a photo</p>
                           <input
             type="file"
             placeholder="image"
             className="opacity-0 "
             name="image"
             accept="image/*"
             onChange={(e) => handleImageChange(e)}
           />
           </div>
            </label>
              <div className=" gap-4 mt-3 md:m-4">
                {options.map((option, index) => {
                  return (
                    <PhotoEditer
                      key={index}
                      name={option.name}
                      active={index === selectedOptionIndex}
                      handleClick={() => setSelectedOptionIndex(index)}
                    />
                  );
                })}
              </div>

              <Slider
                min={selectedOption.range.min}
                max={selectedOption.range.max}
                value={selectedOption.value}
                handleChange={handleSliderChange}
              />
              <div className="d-flex  align-items-end justify-center mt-3  p-3  bg-gray-500 text-white items-center  gap-4 ">
                <button onClick={Dic}>
                  <BsZoomOut size={20} />
                </button>
                <button onClick={Inc}>
                  {" "}
                  <BsZoomIn size={20} />{" "}
                </button>
                <button onClick={Left}>
                  <BsArrowClockwise size={20} />{" "}
                </button>
                <button onClick={Right}>
                  <BsArrowCounterclockwise size={20} />
                </button>
                Adjust
                <input
                className='bg-black'
                  type="checkbox"
                  id="check"
                  checked={value}
                  onChange={(e) => ZINDEX(e)}
                />{" "}
                {value}
              </div>
             
              {notification ? (
                <div className="flex justify-center items-center mx-auto gap-4 mt-4 ">
                  {" "}
                  <p className=" text-center  bg-red-700 text-white  text-sm px-5 rounded-md py-4">
                    {notification}
                  </p>
                </div>
              ) : (
                <div></div>
              )}
              <div className="d-flex  align-items-end items-center mx-auto   gap-4 mt-4 ">
                {image.export==false? 
              <button
                  className="bg-blue-400 py-1 btn btn-secondary rounded-md text-white text-sm font-bold px-3"
                  onClick={exports}
                >
                  Next
                </button>
                :''}
                <span className='mr-4'>{notif}</span>
              </div>
               
              {/* choose file and create Frame Menu */}
           {image.export==true?  <div className="   align-items-end items-center mx-auto  gap-4 mt-4 ">
              <button
                id='save'
                  className="bg-blue-400 w-full py-1 btn btn-secondary rounded-md text-white text-sm font-bold px-3"
                  onClick={download}
                >
                 Download
                </button>
                <ShareSocial 
                 title={'sharing happiness'} 
     url ={fburl}
     socialTypes={['facebook','twitter','reddit','linkedin','telegram']}
   />
                {/* <FacebookButton url={ fburl} className='flex gap-4 btn btn-primery' appId='829828258275482'>
                <BsShareFill size={20}/>
       
      </FacebookButton> */}
              </div>:'' }
              {/*  */}
            </div>
          </div>
        </div>
     {/* <div className="relative ui h-[800px] w-[800px] overflow-hidden hidden" id="ui">
        <div  className='absolute w-full h-full'  id="export"></div>
          <img src={SelectedGraphics} className='absolute' id="export1" />    
        </div> */}
      
      </div>
    </div>
  );
};
export default Frame;
