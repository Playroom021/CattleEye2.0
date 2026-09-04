import { useState } from "react";

import api from "../services/api";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import UploadCard from "../components/UploadCard";
import ImagePreview from "../components/ImagePreview";
import Spinner from "../components/Spinner";
import Toast from "../components/Toast";
import ProjectInfo from "../components/ProjectInfo";
import Footer from "../components/Footer";

export default function Home() {

    const [file, setFile] = useState(null);

    const [result, setResult] = useState(() => {

        try {

            const savedResult =
                localStorage.getItem(
                    "cattleeye_last_prediction"
                );

            return savedResult
                ? JSON.parse(savedResult)
                : null;

        } catch (error) {

            console.error(
                "Could not restore prediction:",
                error
            );

            localStorage.removeItem(
                "cattleeye_last_prediction"
            );

            return null;
        }

    });

    const [loading, setLoading] = useState(false);

    const [toast, setToast] = useState({
        show: false,
        message: "",
        type: "success",
    });


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


    async function predict() {

        if (!file) {

            showToast(
                "Please select a cattle image",
                "error"
            );

            return;
        }


        setLoading(true);

        setResult(null);


        const fd = new FormData();

        fd.append("file", file);


        try {

            const res = await api.post(
                "/predict",
                fd
            );


            console.log("Prediction response:", res.data);

            setResult(res.data);

            localStorage.setItem(
                "cattleeye_last_prediction",
                JSON.stringify(res.data)
            );

            showToast(
                "Prediction completed successfully"
            );

        }

        catch (err) {

            console.error(
                "Prediction error:",
                err.response?.data || err.message
            );

            showToast(
                "Prediction failed. Please try again.",
                "error"
            );

        }

        finally {

            setLoading(false);

        }
    }


    function resetPrediction() {

        setFile(null);

        setResult(null);

        localStorage.removeItem(
            "cattleeye_last_prediction"
        );

    }


    return (

        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">

            <NavBar />

            <main>

                <Hero />


                {/* =========================
                    UPLOAD / ANALYSIS SECTION
                ========================== */}

                <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">

                    <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">

                         {!file && !result ? (
                            /* =========================
                               EMPTY STATE
                            ========================== */

                            <>

                                <div className="mb-6">

                                    <h2 className="text-2xl font-bold text-gray-900">
                                        Analyze a Cattle Image
                                    </h2>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Upload a clear cattle image to identify its breed.
                                    </p>

                                </div>


                                <UploadCard
                                    file={file}
                                    setFile={setFile}
                                />

                            </>

                        ) :  file && !result ? (

                            /* =========================
                               IMAGE SELECTED
                            ========================== */

                            <>

                                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

                                    <div>

                                        <p className="text-sm font-medium uppercase tracking-wider text-green-700">
                                            Image Selected
                                        </p>

                                        <h2 className="mt-1 text-2xl font-bold text-gray-900">
                                            Ready for Analysis
                                        </h2>

                                    </div>

                                    <p className="text-sm text-gray-500">
                                        Review the image and start prediction.
                                    </p>

                                </div>


                                {/* Preview + Action */}

                                <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">


                                    {/* Image */}

                                    <ImagePreview
                                        file={file}
                                        setFile={setFile}
                                    />


                                    {/* Action panel */}

                                    <div className="flex flex-col justify-between rounded-3xl border border-green-100 bg-green-50/60 p-6">

                                        <div>

                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-700 text-xl text-white shadow-sm">
                                                🧠
                                            </div>


                                            <h3 className="mt-5 text-xl font-bold text-gray-900">
                                                AI Breed Detection
                                            </h3>


                                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                                CattleEye will analyze the uploaded image
                                                and predict the most likely cattle breed.
                                            </p>


                                            <div className="mt-6 space-y-3">

                                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">
                                                        ✓
                                                    </span>
                                                    Image validated
                                                </div>

                                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">
                                                        ✓
                                                    </span>
                                                    AI analysis ready
                                                </div>

                                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">
                                                        ✓
                                                    </span>
                                                    Confidence score included
                                                </div>

                                            </div>

                                        </div>


                                        {/* Desktop button */}

                                        <button
                                            onClick={predict}
                                            disabled={loading}
                                            className={`
                                                mt-8
                                                hidden
                                                w-full
                                                items-center
                                                justify-center
                                                gap-2
                                                rounded-xl
                                                px-5
                                                py-3.5
                                                font-semibold
                                                text-white
                                                shadow-sm
                                                transition
                                                lg:flex
                                                ${
                                                    loading
                                                        ? "cursor-not-allowed bg-gray-400"
                                                        : "bg-green-700 hover:bg-green-800 hover:shadow-md"
                                                }
                                            `}
                                        >

                                            {loading ? (

                                                <>
                                                    <Spinner />
                                                    Predicting...
                                                </>

                                            ) : (

                                                <>
                                                    🔍
                                                    Predict Breed
                                                </>

                                            )}

                                        </button>

                                    </div>

                                </div>

                            </>

                        ):null}

                    </div>

                </section>


                {/* =========================
                    PREDICTION RESULT
                ========================== */}

                {result && (

                    <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">

                        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

                            {/* Result header */}

                            <div className="border-b border-gray-100 px-6 py-6 sm:px-8">

                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                    <div>

                                        <div className="flex items-center gap-2">

                                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                                                ✓
                                            </span>

                                            <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
                                                AI Analysis Complete
                                            </span>

                                        </div>

                                        <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
                                            Prediction Result
                                        </h2>

                                    </div>


                                    <div className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                                        Prediction Successful
                                    </div>

                                </div>

                            </div>


                            {/* Result body */}

                            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">


                                {/* Image */}

                                <div className="overflow-hidden rounded-3xl bg-gray-100">

                                    {result.imageUrl ? (

                                        <img
                                            src={result.imageUrl}
                                            alt="Analyzed cattle"
                                            className="h-[360px] w-full object-cover"
                                        />

                                    ) : (

                                        <div className="flex h-[360px] items-center justify-center text-gray-400">
                                            Cattle image
                                        </div>

                                    )}

                                </div>


                                {/* Result information */}

                                <div className="flex flex-col justify-center">

                                    <p className="text-sm font-medium uppercase tracking-wider text-gray-400">
                                        Predicted Breed
                                    </p>


                                    <h3 className="mt-2 text-5xl font-extrabold tracking-tight text-gray-900">
                                        {result.breed || "Unknown"}
                                    </h3>


                                    {/* Confidence card */}

                                    <div className="mt-8 rounded-2xl border border-green-100 bg-green-50 p-5">

                                        <div className="flex items-end justify-between">

                                            <div>

                                                <p className="text-sm font-medium text-gray-600">
                                                    Confidence Score
                                                </p>

                                                <p className="mt-1 text-sm text-gray-400">
                                                    AI prediction confidence
                                                </p>

                                            </div>


                                            <span className="text-3xl font-extrabold text-green-700">

                                                {typeof result.confidence === "number"
                                                    ? `${result.confidence.toFixed(2)}%`
                                                    : `${result.confidence || 0}%`
                                                }

                                            </span>

                                        </div>


                                        <div className="mt-5 h-3 overflow-hidden rounded-full bg-white">

                                            <div
                                                className="h-full rounded-full bg-green-600 transition-all duration-1000"
                                                style={{
                                                    width: `${Math.min(
                                                        Number(result.confidence) || 0,
                                                        100
                                                    )}%`,
                                                }}
                                            />

                                        </div>

                                    </div>


                                    {/* Info cards */}

                                    <div className="mt-5 grid grid-cols-2 gap-3">

                                        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">

                                            <p className="text-xs uppercase tracking-wider text-gray-400">
                                                Status
                                            </p>

                                            <p className="mt-1 font-semibold text-green-700">
                                                Verified
                                            </p>

                                        </div>


                                        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">

                                            <p className="text-xs uppercase tracking-wider text-gray-400">
                                                Analysis
                                            </p>

                                            <p className="mt-1 font-semibold text-gray-800">
                                                AI Powered
                                            </p>

                                        </div>

                                    </div>


                                    {/* New prediction */}

                                    <button
                                        onClick={resetPrediction}
                                        className="mt-6 w-full rounded-xl border border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-700 transition hover:border-green-300 hover:bg-green-50 hover:text-green-700"
                                    >
                                        + Analyze Another Image
                                    </button>

                                </div>

                            </div>

                        </div>

                    </section>

                )}

            </main>


            {/* =========================
                MOBILE STICKY PREDICT BAR
            ========================== */}
            

            <ProjectInfo />

            <Footer />



            {file && !result && (

                <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md lg:hidden">

                    <div className="mx-auto max-w-6xl">

                        <button
                            onClick={predict}
                            disabled={loading}
                            className={`
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                px-6
                                py-3.5
                                font-semibold
                                text-white
                                shadow-sm
                                transition
                                ${
                                    loading
                                        ? "cursor-not-allowed bg-gray-400"
                                        : "bg-green-700 active:scale-[0.98]"
                                }
                            `}
                        >

                            {loading ? (

                                <>
                                    <Spinner />
                                    Predicting...
                                </>

                            ) : (

                                <>
                                    🔍
                                    Predict Breed
                                </>

                            )}

                        </button>

                    </div>

                </div>

            )}


            <Toast
                show={toast.show}
                message={toast.message}
                type={toast.type}
            />

        </div>

    );
}