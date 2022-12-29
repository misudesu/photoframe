import React,{useState} from 'react'
const RetravFrame=(props)=>{
    const [database,setDatabase]=useState(props.Database)
    return(
        <section className="overflow-auto  text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32 md:justify-center md:mx-auto">
          <div className="flex flex-wrap -m-1 md:-m-2">
            {props.Database.map((data, index) => (
              <div
                className={`flex flex-wrap w-1/3   ${
                    props.Database.length > 4 ? "lg:w-2/12" : ""
                }   `}
                key={index}
              >
                <div
                  className="w-full  p-1 md:p-2"
                //   onClick={() => changGraphics(data.img)}
                >
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full  bg-black rounded-lg"
                    src={data.Image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
export default RetravFrame;