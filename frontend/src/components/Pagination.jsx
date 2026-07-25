export default function Pagination() {
    return (
        <div className="flex justify-center items-center gap-2 mt-10">

            <button
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
                ◀ Previous
            </button>

            <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
                1
            </button>

            <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                2
            </button>

            <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                3
            </button>

            <button
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            >
                Next ▶
            </button>

        </div>
    );
}