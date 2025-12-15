import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative bg-slate-50 py-20 lg:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center rounded-lg bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 w-fit">
              New Patients Welcome
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-900">
              Modern Dentistry for Your <span className="text-blue-600">Perfect Smile</span>
            </h1>
            <p className="max-w-[600px] text-slate-500 md:text-xl">
              Experience state-of-the-art dental care in a comfortable, relaxing environment. 
              Our expert team is dedicated to your oral health and confidence.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="#appointment">
                  Book Your Visit <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#services">
                  View Services
                </Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:ml-auto">
             {/* Placeholder for Hero Image */}
             <div className="relative rounded-xl overflow-hidden shadow-2xl bg-slate-200 aspect-[4/3] w-full max-w-[600px]">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    {/* In a real project, use Next/Image here */}
                    <span className="text-lg">Modern Dental Clinic Photo</span>
                </div>
                {/* 
                <Image
                  src="/images/hero-dentist.jpg"
                  alt="Modern Dental Office"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full"
                  priority
                />
                */}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
