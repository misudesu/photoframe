import React, { useState, useEffect } from "react";
import interact from "interactjs";
import html2canvas from "html2canvas";

import { BsZoomIn, BsZoomOut } from "react-icons/bs";
import { BsArrowCounterclockwise, BsArrowClockwise } from "react-icons/bs";
import Function from "./Function";
import Database from "./Database";
import { Link, useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import Slider from "./Slider";
const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];
const Frame = () => {
  const { SelectedGraphics } = useLocation().state;
  const [image, setImage] = useState({
    image: "one",
    size: 400,
    orentation: "",
    rotate: "0",
    zindex: "-z-50",
  });
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
    const screenshotTarget = document.getElementById("image");
    html2canvas(screenshotTarget).then((canvas) => {
      const base64image = canvas.toDataURL("image/png");
      var anchor = document.createElement("a");
      anchor.setAttribute("href", base64image);
      anchor.setAttribute("download", "my-image.png");
      anchor.click();
      anchor.remove();
    });
  };
  const handleImageChange = (e) => {
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
  return (
    <div>
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
                  className="w-[260px] h-[260px] md:w-[380px] md:h-[380px]"
                  style={{
                    position: "absolute",
                    backgroundImage: `url(${graphics})`,
                    backgroundSize: `400px,400px`,
                    overflow: "hidden",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    top: "0px",
                    left: "0px",
                    overflow: "hidden",
                  }}
                ></div>
                <div
                  id="draggable"
                  className="draggable "
                  style={{
                    position: "absolute",
                    backgroundImage: `url(${image.image})`,
                    touchAction: "none",
                    userselect: "none",
                    backgroundSize: ` ${image.size}px,${image.size}px`,

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
                ></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6 ">
            <div>
              <div className=" gap-4 m-4">
                {options.map((option, index) => {
                  return (
                    <SidebarItem
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
              <div className="d-flex  align-items-end justify-center bg-blue-600  p-3 rounded-md text-white items-center  gap-8 ">
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
              {/* choose file and create Frame Menu */}
              <div className="d-flex  align-items-end items-center mx-auto   gap-4 mt-4 ">
                <input
                  type="file"
                  placeholder="image"
                  className="bg-blue-400 py-1 px-1 rounded-md form-control "
                  name="image"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e)}
                />

                <button
                  className="bg-blue-400 py-1 btn btn-primary rounded-md text-white text-sm font-bold px-3"
                  onClick={download}
                >
                  Download
                </button>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        <section class="overflow-auto h-screen text-gray-700 ">
          <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32 md:justify-center md:mx-auto">
            <div class="flex flex-wrap -m-1 md:-m-2">
              {Database.image.map((data, index) => (
                <div
                  class={`flex flex-wrap w-1/3   ${
                    Database.image.length > 4 ? "lg:w-2/12" : ""
                  }   `}
                  key={index}
                >
                  <div
                    class="w-full  p-1 md:p-2"
                    onClick={() => changGraphics(data.img)}
                  >
                    <img
                      alt="gallery"
                      class="block object-cover object-center w-full h-full  bg-black rounded-lg"
                      src={data.img}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Frame;
