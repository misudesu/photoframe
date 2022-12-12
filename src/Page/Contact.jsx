import ContactInfo from './ContactInfo'
import ContactList from './ContactList'
import InputText from './InputText'
import AreaText from'./AreaText'
import Button from './Button'
import  GoogleMap from './GoogleMap'
import { BsFillTelephoneFill,BsFillEnvelopeFill,BsGeoAltFill } from "react-icons/bs";
export default function Contact(){
const ContactInfos={
    h1:'Contact Informations',
    p:'this is GCM ethiopia Contact Center 24/7 feel free to contact Us!',
    name:'CONTACT US',
    Styleh1:"text-center font-bold text-2xl ",
    Stylep:"text-center Container ",
    StyleButton:"btn btn-outline-primary mt-3 "

}
const ContactLists={
    list:[
        {title:'Phone Number', value:'+251994508849',Icon:BsFillTelephoneFill},
        {title:'Email Address', value:'@gmail.com',Icon:BsFillEnvelopeFill},
        {title:'Fax Address',value:'0000',Icon:BsFillTelephoneFill},
        {title:'Location',value:'megenagna/ Adis-Abeba/Ethiopia',Icon:BsGeoAltFill}
    ],
    form:[
        {name:'Name',value:'',type:'text',placeholde:'Your Name'},
        {name:'Email',value:'',type:'email',placeholde:'Email Address'},
        {name:'Phone',value:'',type:'number',placeholde:'Phone Number'},
       
        {name:'Subject',value:'',type:'text',placeholde:'Subject'},
    ]
    
}


    return(
        <div className=' bg-[#F8FAFC] '>
         <div className='pb-5 pt-5'>
         <ContactInfo h1={ContactInfos.h1} p={ContactInfos.p} name={ContactInfos.name} StyleButton={ContactInfos.StyleButton} Stylep={ContactInfos.Stylep} styleh1={ContactInfos.Styleh1}/>
      
         </div>
        <div className=' row gap-8 inline-flex justify-center w-full pb-5'>
<div className='col-12 col-md-4 col-lg-4 '>
    {ContactLists.list.map((data,index)=>(
        <div className='bg-white shadow-md  rounded-md ml-5  px-4  py-1  mt-3'>
         
        <ContactList key={index} title={data.title} value={data.value} Icon={data.Icon}/>
        </div>
    ))}


</div>
<div className='col-12 col-md-5 col-lg-5 pb-5 bg-white shadow-md p-4 rounded-md'>
<h4>Send Message</h4>
<p>you can reach us now!</p>
<div className=' form-group  row mb-4 '>

{ContactLists.form.map((data,index)=>(
        <div className='mt-3 col-6' >
         
         <InputText placeholder={data.placeholde} value={data.value} name={data.name} type={data.type}/>
        </div>
    ))}
    
</div>
<AreaText />
<Button  StyleButton={ContactInfos.StyleButton} name='Send Message'/>
      
</div>
        </div>
       
        </div>
    )
}