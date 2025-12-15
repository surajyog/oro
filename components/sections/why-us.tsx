import { CheckCircle2 } from "lucide-react";

const features = [
  "Over 15 years of experience",
  "State-of-the-art technology",
  "Comfortable, relaxing environment",
  "Certified & friendly staff",
  "Most insurance plans accepted",
  "Flexible financing options",
  "Weekend appointments available",
  "Emergency services"
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Why Choose Oro Dental?
            </h2>
            <p className="text-slate-500 text-lg mb-8">
              We combine advanced dental technology with a patient-centered approach to ensure 
              you receive the best possible care in a comfortable setting. Your health and satisfaction are our top priorities.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
             <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                <span className="text-lg">Clinic Interior / Technology Photo</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
