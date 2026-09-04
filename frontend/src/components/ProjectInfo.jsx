export default function ProjectInfo() {

    return (

        <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">

            {/* =========================
                ABOUT CATTLEEYE
            ========================== */}

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">

                <div className="max-w-3xl">

                    <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
                        About CattleEye
                    </p>

                    <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Intelligent Cattle Breed Identification
                    </h2>

                    <p className="mt-5 text-base leading-7 text-gray-600">
                        CattleEye is an AI-powered cattle intelligence platform
                        designed to identify cattle breeds from images. Simply
                        upload a clear cattle image and let the AI analyze it
                        to provide the most likely breed along with a
                        confidence score.
                    </p>

                    <p className="mt-4 text-base leading-7 text-gray-600">
                        The platform also keeps track of previous predictions,
                        allowing users to review their cattle analysis,
                        confidence scores, and prediction images through the
                        History dashboard.
                    </p>

                </div>


                {/* =========================
                    HOW IT WORKS
                ========================== */}

                <div className="mt-12">

                    <h3 className="text-2xl font-bold text-gray-900">
                        How CattleEye Works
                    </h3>

                    <div className="mt-6 grid gap-4 md:grid-cols-3">

                        {/* Step 1 */}

                        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
                                📷
                            </div>

                            <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-green-700">
                                Step 01
                            </p>

                            <h4 className="mt-1 text-lg font-bold text-gray-900">
                                Upload
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Upload a clear image of the cattle using your
                                device or camera.
                            </p>

                        </div>


                        {/* Step 2 */}

                        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
                                🧠
                            </div>

                            <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-green-700">
                                Step 02
                            </p>

                            <h4 className="mt-1 text-lg font-bold text-gray-900">
                                Analyze
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Our trained AI model analyzes the image and
                                predicts the most likely cattle breed.
                            </p>

                        </div>


                        {/* Step 3 */}

                        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl">
                                📊
                            </div>

                            <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-green-700">
                                Step 03
                            </p>

                            <h4 className="mt-1 text-lg font-bold text-gray-900">
                                Get Results
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                View the predicted breed, confidence score,
                                and analysis image instantly.
                            </p>

                        </div>

                    </div>

                </div>


                {/* =========================
                    FEATURES
                ========================== */}

                <div className="mt-12">

                    <h3 className="text-2xl font-bold text-gray-900">
                        Why Use CattleEye?
                    </h3>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        <div className="rounded-2xl border border-gray-100 p-5">
                            <div className="text-2xl">⚡</div>

                            <h4 className="mt-3 font-bold text-gray-900">
                                Fast Analysis
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Get AI-powered breed predictions without
                                complicated workflows.
                            </p>
                        </div>


                        <div className="rounded-2xl border border-gray-100 p-5">
                            <div className="text-2xl">🧠</div>

                            <h4 className="mt-3 font-bold text-gray-900">
                                AI Powered
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Machine learning helps identify the most
                                likely cattle breed from an image.
                            </p>
                        </div>


                        <div className="rounded-2xl border border-gray-100 p-5">
                            <div className="text-2xl">📋</div>

                            <h4 className="mt-3 font-bold text-gray-900">
                                Prediction History
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Review previous predictions and their
                                confidence scores.
                            </p>
                        </div>


                        <div className="rounded-2xl border border-gray-100 p-5">
                            <div className="text-2xl">📱</div>

                            <h4 className="mt-3 font-bold text-gray-900">
                                Mobile Friendly
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Designed to work smoothly across desktop and
                                mobile devices.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
}