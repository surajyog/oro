import { CreditCard, Wallet, FileCheck } from "lucide-react";

export function Insurance() {
  return (
    <section id="insurance" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Insurance & Payment</h2>
          <p className="max-w-[700px] mx-auto text-slate-500 md:text-xl">
            We believe quality dental care should be accessible. We accept most major insurance plans and offer flexible payment options.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <FileCheck className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-xl mb-2">Insurance Accepted</h3>
            <p className="text-slate-500 mb-4">
              We work with major providers including Delta Dental, Cigna, Aetna, MetLife, and Blue Cross Blue Shield.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl">
             <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <Wallet className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-xl mb-2">Financing Available</h3>
            <p className="text-slate-500 mb-4">
              0% interest financing options available through CareCredit and LendingClub for qualifying patients.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl">
             <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <CreditCard className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-xl mb-2">Payment Methods</h3>
            <p className="text-slate-500 mb-4">
              We accept cash, checks, and all major credit cards including Visa, MasterCard, Discover, and Amex.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
