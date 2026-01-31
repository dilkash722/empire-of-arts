import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const items = [
    {
      icon: MapPin,
      label: "Visit Our Institute",
      value: "Rahman Chowk, Purnia, Bihar 854301",
    },
    {
      icon: Phone,
      label: "Call For Admission",
      value: "087098 89091",
      link: "tel:08709889091",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp Enquiry",
      value: "087098 89091",
      link: "https://wa.me/918709889091",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "empireofarts@email.com",
      link: "mailto:empireofarts@email.com",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-blue-800 text-white text-center py-28 px-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Admission & Contact
        </h1>
        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
          For admission, course details or any enquiry, feel free to visit our
          institute or contact us directly.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="-mt-16 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            const Wrapper = item.link ? "a" : "div";

            return (
              <Wrapper
                key={i}
                href={item.link}
                className="bg-white rounded-xl shadow-lg border p-8 text-center hover:shadow-2xl transition block"
              >
                <div className="flex justify-center">
                  <div className="bg-blue-800 text-white p-3 rounded-md">
                    <Icon size={22} />
                  </div>
                </div>
                <p className="mt-5 font-semibold text-slate-900">
                  {item.label}
                </p>
                <p className="text-slate-600 text-sm mt-2">{item.value}</p>
              </Wrapper>
            );
          })}
        </div>
      </section>

      {/* Admission Enquiry Form */}
      <section className="max-w-4xl mx-auto px-6 py-28">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-14">
          Admission Enquiry Form
        </h2>

        <form className="grid md:grid-cols-2 gap-8">
          <input
            type="text"
            placeholder="Student Name"
            className="border rounded-md p-4 text-lg outline-none focus:ring-2 focus:ring-blue-800"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="border rounded-md p-4 text-lg outline-none focus:ring-2 focus:ring-blue-800"
          />

          <input
            type="text"
            placeholder="Class (11th / 12th)"
            className="border rounded-md p-4 text-lg outline-none focus:ring-2 focus:ring-blue-800"
          />

          <input
            type="text"
            placeholder="Course / Subject"
            className="border rounded-md p-4 text-lg outline-none focus:ring-2 focus:ring-blue-800"
          />

          <textarea
            rows="4"
            placeholder="Write your enquiry..."
            className="md:col-span-2 border rounded-md p-4 text-lg outline-none focus:ring-2 focus:ring-blue-800 resize-none"
          />

          <Button className="md:col-span-2 bg-blue-800 hover:bg-blue-900 text-white h-14 text-lg font-semibold">
            Submit Enquiry
          </Button>
        </form>
      </section>
    </div>
  );
}
