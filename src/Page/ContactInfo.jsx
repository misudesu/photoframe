import Button from './Button'
const ContactInfo=(props)=>{
    return(
        < >
        <h1 className={props.styleh1}>{props.h1}  </h1>
        <p className={props.Stylep}>{props.p}</p>
        <div className='inline-flex justify-center w-full'> 
        {/* <Button StyleButton={props.StyleButton} name={props.name}/> */}
        </div>
        </>
    )
}
export default ContactInfo;