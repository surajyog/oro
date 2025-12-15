import { AppointmentForm } from "@/components/forms/appointment-form";

export function Appointment() {
  return (
    <section id="appointment" className="py-20 bg-blue-50">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-slate-900">
              Book Your Appointment
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Ready to schedule your visit? Fill out the form, and our team will get back to you 
              to confirm your appointment time.
            </p>
            <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-lg mb-2">New Patients</h3>
                    <p className="text-slate-500">Please arrive 15 minutes early to complete necessary paperwork.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-lg mb-2">Cancellations</h3>
                    <p className="text-slate-500">We kindly ask for 24-hour notice for any cancellations or rescheduling.</p>
                </div>
            </div>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
