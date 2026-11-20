import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Stethoscope } from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "🛒 Market / Shop",
    description:
      "Buy and sell cattle, fodder, medicines, and dairy products. Connect with local markets and mandis.",
    color: "text-primary",
    bg: "bg-primary/10",
    to: "/store",
  },
  {
    icon: Stethoscope,
    title: "⚕️ Common Diseases & Cure",
    description:
      "Learn about cattle diseases like Foot-and-Mouth, Mastitis, and more. Get prevention tips and treatment guides.",
    color: "text-accent",
    bg: "bg-accent/10",
    to: "/store",
  },
  {
    icon: Heart,
    title: "❤️ Finding Mate",
    description:
      "Find ideal breeding partners for your cattle based on breed and region. Improve your herd genetics.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    to: "/store",
  },
];

function StatCard({ value, label }) {
  return (
    <div className="rounded-xl bg-card p-6 text-center shadow-md transition-shadow hover:shadow-lg">
      <div className="mb-2 text-3xl font-bold text-primary md:text-4xl">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export default function FeatureCards() {
  return (
    <section className="bg-gradient-to-b from-background to-muted/30 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 animate-fade-in text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">Everything Farmers Need</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Complete toolkit for modern cattle farming
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                style={{ animationDelay: `${i * 100}ms` }}
                className="animate-scale-in rounded-2xl border-2 bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-hover"
              >
                <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${f.bg} ${f.color}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold">{f.title}</h3>
                <p className="mb-6 mt-2 text-base text-muted-foreground">{f.description}</p>
                <Link
                  to={f.to}
                  className="block w-full rounded-xl border-2 border-primary/30 px-4 py-2.5 text-center font-medium text-primary transition hover:bg-primary hover:text-white"
                >
                  Explore
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          <StatCard value="50+" label="Cattle Breeds" />
          <StatCard value="100+" label="Disease Guides" />
          <StatCard value="1000+" label="Active Farmers" />
          <StatCard value="24/7" label="Support" />
        </div>
      </div>
    </section>
  );
}

export function DailyTip() {
  return (
    <section className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-4xl rounded-2xl border-2 border-primary/20 bg-card p-6 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="mb-2 text-xl font-bold">Daily Farming Tip</h3>
            <p className="text-muted-foreground">
              Did you know? Gir cows produce A2 milk which is highly nutritious and easier to digest
              than regular milk. This makes them one of the most valuable indigenous breeds in India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
