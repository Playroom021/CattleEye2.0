export default function Toast({show,message,type}){

    if(!show){
        return null
    }

    return(
        <div
        className="
        fixed
        top-5
        right-5
        "
        >
            <div className={`
            px-4
            py-2
            rounded
            ${type==="success"?"bg-green-500":"bg-red-500"}
            text-white
            shadow-lg
            `}
            >
                {message}
            </div>
        </div>
    )
}