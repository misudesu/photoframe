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
const Frame = () => {
  // const {SelectedGraphics}=useParams();
 const { SelectedGraphics } = useLocation().state;
  const [image, setImage] = useState({
    image: "one",
    size: 400,
    sizesm:280,
    orentation: "",
    rotate: "0",
    zindex: "-z-50",
    export:false,
  });
  const [fburl,setFburl]=useState();
  const [graphics, setGraphics] = useState(SelectedGraphics);
  const [value, setValue] = useState(false);
  const [notification, setNotify] = useState(null);
  const [zindex, setZindex] = useState("-3");
  const [opacity, setOpacity] = useState("1");
  const Inc = () => {
    setImage({ ...image, size: image.size + 10 });
  };
  const Dic = () => {
    setImage({ ...image, size: image.size - 10 });
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
   
    const screenshotTarget = document.getElementById("image");
    html2canvas(screenshotTarget).then((canvas) => {
      const base64image = canvas.toDataURL("image/png");
    // domtoimage.toPng(document.getElementById("image"),{quality:0.95})
    // .then(function (dataUrl){
    //   var link=document.createElement('a');
    //   link.download='my-image-name.png';
    //   link.href=dataUrl;
    //   link.click();
    // })

      var anchor = document.createElement("a");
      anchor.setAttribute("href", base64image);
      anchor.setAttribute("download", "my-image.png");
      anchor.click();
      anchor.remove();
   });
  };
  const handleImageChange = (e) => {
    setNotificationTwo('')
    setImage({
      ...image,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    });
  };
  
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

  const position = { x: 0, y: 0 };

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
 const[notif,setNotificationTwo]=useState('')
function exports(){
  if(image.image=='one'){
    toast('Pelase Select a Photo!')
  }else{
    toast('Please wait request processing...')
    const screenshotTarget = document.getElementById("image");
    html2canvas(screenshotTarget).then((canvas) => {
      const base64image = canvas.toDataURL("image/png");
    const storage = getStorage();
    const storageRef = ref(storage,
      `/Temp/${Date.now()}${image.image}`);
    uploadString(storageRef, base64image, 'data_url').then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        toast('Process completed You can  Now Share!');
        setFburl(url);
        setImage({...image,export:true})
      });
    });   
   } );
  
  }
 
}

  return (
    <div>
       <ToastContainer />
      <div className="container-fluid">
        <div className="row align-items-center m-4">
          <div className="col-12 col-lg-6 col-md-6 ">
            <div className="border-dashed border-2 border-indigo-600 m-4 bg-white rounded-md w-[280px] h-[280px] md:w-[400px] md:h-[400px] shadow-lg justify-center items-center mx-auto ">
              <div
                className="relative justify-center mx-auto shadow-lg w-[260px] h-[260px] md:w-[380px] md:h-[380px] mt-2 "
                id="image"
                style={{
                  backgroundColor: "#fff",
                  overflow: "hidden",
                  zIndex: "1",
                }}
              >
                <div
                 
                  className="w-[260px] h-[270px] md:w-[380px] md:h-[380px] bg-smolle md:bg-large "
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
  </div> 
                <div 
                  id="draggable"
                  className={`draggable bg-auto `}
                  style={{
                    position: "absolute",
                    backgroundImage: `url(${image.image})`,
                    touchAction: "none",
                    userselect: "none",
                    backgroundSize: `  ${image.size}px,${image.size}px`,
                    width: `${image.size}px`,
                    height: `${image.size}px`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top ",
                    transform: "rotate(" + image.rotate + "deg)",
                    resize: "both",
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
         
          <div className="col-12 col-lg-6 col-md-6  text-right ">
         
            <div>
           
            <label name='FrameImage' className="flex flex-col w-full h-20 mt-5 md:h-32 border-4 border-dashed  hover:bg-gray-100 hover:border-gray-300">
                   
                    <div className="flex flex-col items-center justify-center md:pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
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
              <button
                  className="bg-blue-400 py-1 btn btn-primary rounded-md text-white text-sm font-bold px-3"
                  onClick={exports}
                >
                  Next
                </button>
                <span className='mr-4'>{notif}</span>
              </div>
               
              {/* choose file and create Frame Menu */}
           {image.export?  <div className="d-flex  align-items-end items-center mx-auto   gap-4 mt-4 ">
            
                <button
                  className="bg-blue-400 py-1 btn btn-primary rounded-md text-white text-sm font-bold px-3"
                  onClick={download}
                >
                  Download
                </button>
               
                <FacebookButton url={fburl} className='flex gap-4 btn btn-primery' appId='829828258275482'>
                <BsShareFill size={20}/>
       
      </FacebookButton>
              </div>:'' }
              {/*  */}
            </div>
          </div>
        </div>

        {/* <section class="overflow-auto  text-gray-700 ">
          <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32 md:justify-center md:mx-auto">
            <div class="flex flex-wrap -m-1 md:-m-2">
              {search.data.map((data, index) => (
                <div
                  class={`flex flex-wrap w-1/3   ${
                    search.data.length > 4 ? "lg:w-2/12" : ""
                  }   `}
                  key={index}
                >
                  <div
                    class="w-full  p-1 md:p-2"
                    onClick={() => changGraphics(data.base64Frame)}
                  >
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full  bg-black rounded-lg"
                      src={data.base64Frame}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};
export default Frame;
