
const InputText=(props)=>{
    return(

        <input className='form-control' type={props.type} name={props.name} requre placeHolder={props.placeholder} value={props.value} onChange={props.onchange}/>
    )
}
export default InputText;