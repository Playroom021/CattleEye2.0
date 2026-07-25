import ProgressBar from "./ProgressBar";

export default function HistoryCard({ item, onDelete }) {
    // Placeholder image if no image is available
    const image =
    item.imageUrl ||
    "https://placehold.co/120x120?text=Cattle";

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5">

            <div className="flex flex-col md:flex-row gap-5">

                {/* Image */}
                <img
                    src={image}
                    alt={item.breed}
                    className="w-32 h-32 rounded-lg object-cover border"
                />

                {/* Prediction Details */}
                <div className="flex-1">

                    <div className="flex justify-between items-start">

                        <div>

                            <h2 className="text-2xl font-bold text-gray-800">
                                {item.breed}
                            </h2>

                            <p className="text-gray-500 mt-1">
                                {new Date(item.createdAt).toLocaleString()}
                            </p>

                        </div>

                        {/* Delete Button */}
                        <button
                            onClick={() => onDelete && onDelete(item._id)}
                            className="text-red-500 hover:text-red-700 transition"
                            title="Delete Prediction"
                        >
                            🗑️
                        </button>

                    </div>

                    {/* Confidence Progress */}
                    <div className="mt-5">
                        <ProgressBar value={item.confidence} />
                    </div>

                </div>

            </div>

        </div>
    );
}