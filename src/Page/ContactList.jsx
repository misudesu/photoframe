
const ContactList=(props)=>{
    return(
        <div className='flex gap-x-4  items-center '>
            <div className="rounded-full bg-indigo-100 w-10 flex items-center justify-center h-10">
<props.Icon size='20'/>
            </div>
            <div className='inline-block w-32 '>
                <p className='font-bold text-sm mb-0'>{props.title}</p>
                <p className='text-sm'>{props.value}</p>
            </div>
        </div>
    )
}
export default ContactList;