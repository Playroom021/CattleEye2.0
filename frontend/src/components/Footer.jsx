import { Link } from "react-router-dom";

export default function Footer() {

    return (

        <footer className="border-t border-gray-200 bg-gray-950 text-gray-300">

            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">

                <div className="grid gap-10 md:grid-cols-4">

                    {/* Brand */}

                    <div className="md:col-span-2">

                        <Link
                            to="/"
                            className="inline-flex items-center gap-3"
                        >

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-700 text-xl text-white">
                                🐄
                            </div>

                            <div>

                                <h2 className="text-lg font-bold text-white">
                                    CattleEye
                                </h2>

                                <p className="text-[10px] uppercase tracking-widest text-gray-500">
                                    AI Cattle Intelligence
                                </p>

                            </div>

                        </Link>


                        <p className="mt-5 max-w-md text-sm leading-6 text-gray-400">
                            An AI-powered platform for cattle breed
                            identification, prediction analysis, and
                            intelligent cattle insights.
                        </p>

                    </div>


                    {/* Navigation */}

                    <div>

                        <h3 className="font-semibold text-white">
                            Navigation
                        </h3>

                        <div className="mt-4 flex flex-col gap-3 text-sm">

                            <Link
                                to="/"
                                className="transition hover:text-green-400"
                            >
                                Home
                            </Link>

                            <Link
                                to="/history"
                                className="transition hover:text-green-400"
                            >
                                History
                            </Link>

                            <Link
                                to="/analytics"
                                className="transition hover:text-green-400"
                            >
                                Analytics
                            </Link>

                        </div>

                    </div>


                    {/* Platform */}

                    <div>

                        <h3 className="font-semibold text-white">
                            Platform
                        </h3>

                        <div className="mt-4 space-y-3 text-sm text-gray-400">

                            <p>AI Breed Detection</p>

                            <p>Prediction History</p>

                            <p>Confidence Analysis</p>

                            <p>Mobile Support</p>

                        </div>

                    </div>

                </div>


                {/* Bottom */}

                <div className="mt-10 flex flex-col gap-3 border-t border-gray-800 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">

                    <p>
                        © {new Date().getFullYear()} CattleEye. All rights reserved.
                    </p>

                    <p>
                        Built with AI • FastAPI • React
                    </p>

                </div>

            </div>

        </footer>

    );
}