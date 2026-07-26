import { useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import UploadCard from "../components/UploadCard";
import ImagePreview from "../components/ImagePreview";
import Spinner from "../components/Spinner";
import Toast from "../components/Toast";

export default function Home(){

    const [file,setFile]=useState()

    const [result,setResult]=useState()

    const [loading, setLoading] = useState(false);

    const [toast, setToast] = useState({ show:false,message:"",type:"success"});



    function showToast(message, type = "success") {

        setToast({
            show: true,
            message,
            type,
        });

        setTimeout(() => {
            setToast((prev) => ({
                ...prev,
                show: false,
            }));
        }, 3000);
    }

    async function predict(){

        
        if(!file){
            showToast("Please select an image","error")
            return
        }

        setLoading(true);

        const fd=new FormData()

        fd.append("file",file)

        try{

            const res=
            await api.post(
                "/predict",
                fd
            )

            setResult(
                res.data
            )

        }

        catch(err){

            console.log(
                err.response?.data
            )

            console.log(
                err.message
            )

            alert(
                JSON.stringify(
                    err.response?.data
                    ||err.message
                )
            )

        }
        finally{
            setLoading(false);
            showToast("Prediction Complete")
        }

    }

    return(

    <>

       <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
            <NavBar/>

            <Hero/>

            <UploadCard file={file} setFile={setFile}/>

            <ImagePreview file={file} />

            <button
            onClick={predict}
            disabled={!file || loading}
            className={`
                mx-auto
                px-10
                py-4
                rounded-xl
                font-semibold
                text-white
                transition
                align-item:center
                flex
                gap-2
                mt-6    
                ${
                    file
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-400 cursor-not-allowed"
                }
            `}
            >
            {
                loading
                ?
                <span className="flex items-center gap-2">
                <Spinner/>
                Predicting...
                </span>
                :
                "Predict Breed"
            }
                
            </button>
            
            <Toast 
                show={toast.show}
                message={toast.message} 
                type={toast.type}
            />

        </div>

        {/* <input
            id="image"
            type="file"
            className="hidden"
            onChange={(e)=>setFile(e.target.files[0])}
        />

        <label
            htmlFor="image"
            className="
                flex
                flex-col
                items-center
                justify-center
                w-full
                h-72
                border-2
                border-dashed
                rounded-2xl
                cursor-pointer
                hover:border-green-500
                hover:bg-green-50
                transition
            "
        >

            <span className="text-6xl">

                📷

            </span>

            <h2 className="mt-4 text-xl font-semibold">

                Drag & Drop Image

            </h2>

            <p className="text-gray-500">

                or click to browse

            </p>

        </label>
        {
            file && (

            <img

            src={URL.createObjectURL(file)}

            className="mt-8 rounded-xl shadow-lg w-10 mx-auto h-10 object-cover"

            />

            )
            
        }

        <br/>

        <button
            onClick={predict}
            className="mt-8 bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-xl font-semibold transition"
        >
            
            Predict Breed
        </button>

        

        {

        result && (

            <div className="bg-white rounded-2xl shadow-xl p-8 mt-10">

                <h2 className="text-2xl font-bold">

                Prediction Result

                </h2>

                <img
                src={result.imageUrl}
                className="rounded-xl mt-6"
                />

                <h3 className="text-3xl mt-6 font-bold">

                {result.breed}

                </h3>

                <p className="text-green-600 text-xl">

                {result.confidence.toFixed(2)}%

                </p>

                </div>

        )

        } */}

    </>

)

}