import { Link } from "react-router-dom";

export default function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-20">

            <div className="text-8xl">
                🐄
            </div>

            <h2 className="text-3xl font-bold mt-6">
                No Predictions Yet
            </h2>

            <p className="text-gray-500 mt-2">
                Upload an image to begin building your prediction history.
            </p>

            <Link to="/">
                <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    Upload Image
                </button>
            </Link>

        </div>
    );
}



// export default function EmptyState() {
//     return (
//         <div className="flex flex-col items-center justify-center py-20">

//             <div className="text-7xl">
//                 🐄
//             </div>

//             <h2 className="text-2xl font-bold mt-4">
//                 No Predictions Yet
//             </h2>

//             <p className="text-gray-500 mt-2">
//                 Upload an image to start building your history.
//             </p>

//         </div>
//     );
// }