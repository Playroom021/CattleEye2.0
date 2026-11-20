import { useEffect, useMemo, useState } from "react";
import api from "../services/api";

import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import StatsCards from "../components/StatsCards";
import HistoryCard from "../components/HistoryCard";
import EmptyState from "../components/EmptyState";
import Pagination from "../components/Pagination";
import LoadingSkeleton from "../components/LoadingSkeleton";
import NavBar from "../components/NavBar";

export default function History() {

    const [history, setHistory] = useState([]);

    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");

    const [selectedDate, setSelectedDate] = useState("");

    const [currentPage, setCurrentPage] = useState(1);

    const ITEMS_PER_PAGE = 6;


    /*
     * Load prediction history
     */

    useEffect(() => {

        loadHistory();

    }, []);


    async function loadHistory() {

        try {

            setLoading(true);

            const res = await api.get("/history");

            setHistory(
                Array.isArray(res.data)
                    ? res.data
                    : []
            );

        } catch (err) {

            console.error(
                "History loading error:",
                err.response?.data || err.message
            );

            setHistory([]);

        } finally {

            setLoading(false);

        }
    }


    /*
     * Filter history
     */

    const filteredHistory = useMemo(() => {

        return history.filter((item) => {

            const breed = item.breed || "";

            const matchesSearch =
                breed
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());


            const matchesDate =
                !selectedDate ||
                (
                    item.createdAt &&
                    new Date(item.createdAt)
                        .toISOString()
                        .split("T")[0] === selectedDate
                );


            return matchesSearch && matchesDate;

        });

    }, [
        history,
        searchTerm,
        selectedDate
    ]);


    /*
     * Reset page when filters change
     */

    useEffect(() => {

        setCurrentPage(1);

    }, [
        searchTerm,
        selectedDate
    ]);


    /*
     * Pagination
     */

    const totalPages = Math.ceil(
        filteredHistory.length / ITEMS_PER_PAGE
    );


    const startIndex =
        (currentPage - 1) * ITEMS_PER_PAGE;


    const paginatedHistory =
        filteredHistory.slice(
            startIndex,
            startIndex + ITEMS_PER_PAGE
        );


    return (

        <div className="min-h-screen page-bg">

            <NavBar />


            <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">


                {/* =========================
                    HEADER
                ========================== */}

                <div className="mb-8">

                    <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
                        CattleEye Dashboard
                    </p>

                    <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">

                        <div>

                            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Prediction History
                            </h1>

                            <p className="mt-2 max-w-2xl text-sm text-gray-500 sm:text-base">
                                Review your previous cattle breed predictions,
                                confidence scores, and analysis images.
                            </p>

                        </div>


                        <div className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">

                            {history.length}{" "}

                            {history.length === 1
                                ? "prediction"
                                : "predictions"
                            }

                        </div>

                    </div>

                </div>


                {/* =========================
                    STATISTICS
                ========================== */}

                <StatsCards
                    history={history}
                />


                {/* =========================
                    SEARCH / FILTER
                ========================== */}

                <div className="my-7 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">

                    <div className="flex flex-col gap-4 md:flex-row">

                        <div className="flex-1">

                            <SearchBar
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                            />

                        </div>


                        <FilterBar
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                        />

                    </div>

                </div>


                {/* =========================
                    CONTENT
                ========================== */}

                {loading ? (

                    <LoadingSkeleton />

                ) : filteredHistory.length === 0 ? (

                    <EmptyState />

                ) : (

                    <>

                        <div className="grid gap-5">

                            {paginatedHistory.map((item) => (

                                <HistoryCard
                                    key={item._id}
                                    item={item}
                                />

                            ))}

                        </div>


                        {/* Pagination */}

                        {totalPages > 1 && (

                            <div className="mt-8">

                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    setCurrentPage={setCurrentPage}
                                />

                            </div>

                        )}

                    </>

                )}

            </main>

        </div>

    );
}