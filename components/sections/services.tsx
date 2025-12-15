import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Activity, Shield, Smile, Zap, HeartPulse } from "lucide-react";

const services = [
  {
    title: "General Dentistry",
    description: "Comprehensive exams, cleanings, and preventative care to keep your smile healthy.",
    icon: Shield,
  },
  {
    title: "Cosmetic Dentistry",
    description: "Veneers, bonding, and smile makeovers to help you achieve the look you want.",
    icon: Sparkles,
  },
  {
    title: "Orthodontics",
    description: "Straighten your teeth with modern braces or clear aligners for a perfect bite.",
    icon: Smile,
  },
  {
    title: "Dental Implants",
    description: "Permanent, natural-looking solutions for replacing missing teeth.",
    icon: Activity,
  },
  {
    title: "Teeth Whitening",
    description: "Professional whitening treatments to brighten your smile safely and effectively.",
    icon: Zap,
  },
  {
    title: "Emergency Care",
    description: "Immediate attention for dental emergencies when you need it most.",
    icon: HeartPulse,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We provide a comprehensive range of dental treatments using the latest technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-4 inline-block rounded-lg bg-blue-100 p-3 w-fit">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
