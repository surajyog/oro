import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const team = [
  {
    name: "Dr. Sarah Johnson",
    role: "Lead Dentist",
    specialty: "Cosmetic Dentistry",
    experience: "15+ Years",
    image: "bg-slate-300" // Placeholder
  },
  {
    name: "Dr. Michael Chen",
    role: "Orthodontist",
    specialty: "Braces & Aligners",
    experience: "10+ Years",
    image: "bg-slate-300"
  },
  {
    name: "Dr. Emily Davis",
    role: "Pediatric Dentist",
    specialty: "Children's Dentistry",
    experience: "8+ Years",
    image: "bg-slate-300"
  },
  {
    name: "James Wilson",
    role: "Hygienist",
    specialty: "Preventative Care",
    experience: "12+ Years",
    image: "bg-slate-300"
  }
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Meet Our Team</h2>
          <p className="max-w-[700px] mx-auto text-slate-500 md:text-xl">
            Our team of experienced professionals is passionate about helping you achieve optimal oral health.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-none text-center">
              <div className={`aspect-square w-full ${member.image} rounded-xl mb-4 relative overflow-hidden group`}>
                <div className="absolute inset-0 flex items-center justify-center text-slate-500 bg-slate-100">
                    <span>{member.name} Photo</span>
                </div>
              </div>
              <CardHeader className="p-0">
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-blue-600 font-medium">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="p-2">
                <p className="text-sm text-slate-500">{member.specialty}</p>
                <p className="text-xs text-slate-400 mt-1">Exp: {member.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
