export default function StatsCards({ history }) {

    const total = history.length;

    const avg = total
        ? history.reduce((a, b) => a + b.confidence, 0) / total
        : 0;

    const breeds = {};

    history.forEach(item => {

        breeds[item.breed] = (breeds[item.breed] || 0) + 1;

    });

    const topBreed = Object.keys(breeds).reduce(

        (a, b) => breeds[a] > breeds[b] ? a : b,

        Object.keys(breeds)[0]

    );

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

            <Card title="Total" value={total} />

            <Card title="Average" value={`${avg.toFixed(1)}%`} />

            <Card title="Top Breed" value={topBreed || "-"} />

            <Card title="Today" value="--" />

        </div>

    );

}

function Card({ title, value }) {

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h4 className="text-gray-500">

                {title}

            </h4>

            <h5 className="text-3xl font-bold mt-2">

                {value}

            </h5>

        </div>

    );

}