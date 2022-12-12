import Icon from '../asset/Icon.png'
const About=()=>{
    const About=[
        {title:'OUR MISSION :',dis:'Win, build and send Christ-centered multiplying disciples',icon:Icon},
        {title:'OUR VISION :',dis:'Movements everywhere so that everyone knows someone who truly follows Jesus',icon:Icon},
        {title:'OUR VALUES :',dis:'Faith, Growth and Fruitfulness',icon:Icon},
    ]
    return(
        <div className=' mb-20 bg-gradient-to-r from-cyan-500 to-blue-500'>
          <div className='text-center '>
            <p className='text-blue-400'>.</p>
            <h1 className='mt-20'>About Us</h1>
            <p>Great Commission Ministry Ethiopia is the name of Campus Crusade for Christ International in Ethiopia. Here is an overview of our national ministry.</p>
      </div>
       <div className='md:flex justify-center gap-4  p-5'>
    {About.map((data,index)=>(
<div className='border border-solid rounded-lg mt-4 md:flex justify-center   md:w-[400px] h-[100px] p-3'>
<div className='flex gap-2'> 
<img src={data.icon} className='w-4 h-4 ' />
<p ><span className=' font-bold '>{data.title} </span> {data.dis}</p>  
</div>
</div>
    ))}
   
</div>
       </div>
      
    )
}
export default About;