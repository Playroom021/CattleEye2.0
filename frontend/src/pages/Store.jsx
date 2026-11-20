import NavBar from "../components/NavBar";
import FeatureCards, { DailyTip } from "../components/FeatureCards";
import Footer from "../components/Footer";

export default function Store() {
  return (
    <div className="page-bg min-h-screen">
      <NavBar />
      <main>
        <div className="px-5 pt-12 text-center sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
            CattleEye Marketplace
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Market, Diseases & Breeding
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-gray-500">
            These tools are coming soon. Here is what we are building for farmers.
          </p>
        </div>
        <FeatureCards />
        <DailyTip />
      </main>
      <Footer />
    </div>
  );
}
