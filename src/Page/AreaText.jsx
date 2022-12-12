const AreaText=(props)=>{
    return(
        <textarea required="" rows="3" class="form-control" placeholder="Your message...." max='2000' row='5' cols='5' values={props.value} onChange={props.onchange} />
    )
}
export default AreaText;