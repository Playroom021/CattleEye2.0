export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-12 pt-16 sm:px-8 sm:pt-20">

      {/* Decorative background */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-green-100/70 blur-3xl" />

      <div className="mx-auto max-w-4xl text-center">

        {/* Small badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-green-600" />
          AI-Powered Cattle Intelligence
        </div>

        {/* Main heading */}
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Identify Cattle Breeds
          <span className="block text-green-700">
            with Artificial Intelligence
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
          Upload a clear cattle image and let CattleEye analyze it
          using artificial intelligence to predict the breed with
          confidence.
        </p>

        {/* Feature indicators */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

          <div className="rounded-full bg-white px-4 py-2 text-sm text-gray-600 shadow-sm ring-1 ring-gray-200">
             AI Prediction
          </div>

          <div className="rounded-full bg-white px-4 py-2 text-sm text-gray-600 shadow-sm ring-1 ring-gray-200">
            Confidence Score
          </div>

          <div className="rounded-full bg-white px-4 py-2 text-sm text-gray-600 shadow-sm ring-1 ring-gray-200">
            Prediction History
          </div>

        </div>

      </div>
    </section>
  );
}


// export default function Hero() {
//   return (
//     <section className="max-w-5xl mx-auto text-center pt-24 pb-20 px-6">
        
//       <div className="text-6xl">
//         🐄
//       </div>

//       <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-gray-900 leading-snug">
//         Identify Cattle Breeds
//         <br />
//         with Artificial Intelligence
//       </h1>

//       <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
//         Upload a cattle image and let our AI predict its breed
//         in just a few seconds with high confidence.
//       </p>

//       {/* <button
//         className="
//           mt-10
//           bg-green-600
//           hover:bg-green-700
//           text-white
//           px-8
//           py-3
//           rounded-xl
//           font-semibold
//           shadow-lg
//           transition
//         "
//       >
//         Get Started
//       </button> */}

//     </section>
//   );
// }