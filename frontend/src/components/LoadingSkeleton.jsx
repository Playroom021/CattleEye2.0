export default function LoadingSkeleton() {

    return (

        <div className="space-y-5">

            {

                [...Array(4)].map((_, i) => (

                    <div

                        key={i}

                        className="h-36 bg-gray-200 rounded-xl animate-pulse"

                    />

                ))

            }

        </div>

    );

}