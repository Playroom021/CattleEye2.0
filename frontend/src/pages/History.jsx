import { useEffect, useState } from "react";
import api from "../services/api";


import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import StatsCards from "../components/StatsCards";
import HistoryCard from "../components/HistoryCard";
import EmptyState from "../components/EmptyState";
import Pagination from "../components/Pagination";
import LoadingSkeleton from "../components/LoadingSkeleton";

export default function History() {
    
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    useEffect(() => {
        loadHistory();
    }, []);

    async function loadHistory() {

        try {

            const res = await api.get("/history");

            setHistory(res.data);

        } catch (err) {

            console.log(err);

        } finally {

            setLoading(false);

        }

    }

    // const filteredHistory = history.filter((item) =>
    //     item.breed.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    const filteredHistory = history.filter((item) => {
        const matchesSearch = item.breed
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesDate =
            !selectedDate ||
            new Date(item.createdAt).toISOString().split("T")[0] === selectedDate;

        return matchesSearch && matchesDate;
    });

    return (

        <div className="min-h-screen bg-gray-100">

            <div className="max-w-7xl mx-auto p-8">

                <h1 className="text-4xl font-bold mb-8">

                    Prediction History

                </h1>

                <StatsCards history={history} />

                <div className="flex flex-col md:flex-row gap-4 my-6">

                    <SearchBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />

                    <FilterBar
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                    />

                </div>

                {

                    loading ?

                        <LoadingSkeleton />
                        //  <p>cool</p>
                        // <EmptyState />
                        :

                        filteredHistory.length === 0 ?

                            // <EmptyState />
                            <p>coool</p>

                            :
                            //  <p>cooool</p>

                            <div className="grid gap-6">

                                {filteredHistory.map((item) => (
                                    <HistoryCard
                                        key={item._id}
                                        item={item}
                                    />
                                ))}

                            </div>
                            

                }

                {/* <div className="grid gap-6">
                    {history.map(item => (
                        <HistoryCard
                            key={item._id}
                            item={item}
                        />
                    ))}
                </div> */}

                <Pagination />

            </div>

        </div>

    );

}