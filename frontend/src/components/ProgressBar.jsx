export default function ProgressBar({ value }) {
    const safeValue = Math.min(100, Math.max(0, value || 0));
    return (
        <div className="mt-2">
            <div className="flex justify-between text-sm mb-1">
                <span>Confidence</span>
                <span>{safeValue.toFixed(2)}%</span>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-green-500 transition-all duration-500"
                    style={{ width: `${value}%` }}
                ></div>
            </div>
        </div>
    );
}
