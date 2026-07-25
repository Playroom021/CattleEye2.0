export default function FilterBar({ selectedDate, setSelectedDate }) 
{
    return (
        <div className="w-full md:w-60">
            <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
        </div>
    );
}



// export default function FilterBar() {

//     return (

//         <select className="rounded-xl border px-4 py-3">

//             <option>All</option>

//             <option>Today</option>

//             <option>This Week</option>

//             <option>This Month</option>

//         </select>

//     );

// }