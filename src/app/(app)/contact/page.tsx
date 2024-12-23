import { FaPhoneAlt } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { FaMapPin } from "react-icons/fa"

import { type Metadata } from "next"
import { ContactForm } from "@/components/app/contact/form"

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "نحن هنا للإجابة عن أسئلتك وتقديم الدعم اللازم"
}

export default function ContactPage() {
  return (
    <>
      <main>
        <section
          className="relative bg-cover bg-center py-20"
          style={{
            backgroundImage: "url('/bg.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative container mx-auto text-center md:text-right text-white px-4">
            <h1 className="text-4xl font-bold">تواصل معنا</h1>
            <p className="text-lg mt-2">نحن هنا للإجابة عن أسئلتك وتقديم الدعم اللازم</p>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white flex flex-col justify-center items-center shadow-md rounded-lg text-center p-6">
              <div className="text-blue-600 text-3xl mb-5">
                <FaEnvelope />
              </div>
              <h3 className="text-xl font-semibold mb-2">البريد الإلكتروني</h3>
              <p>info@example.com</p>
            </div>

            {/* Phone Card */}
            <div className="bg-white flex flex-col justify-center items-center shadow-md rounded-lg text-center p-6">
              <div className="text-blue-600 text-3xl mb-5">
                <FaPhoneAlt />
              </div>
              <h3 className="text-xl font-semibold mb-2">رقم الهاتف</h3>
              <p>+966123456789</p>
            </div>

            {/* Address Card */}
            <div className="bg-white flex flex-col justify-center items-center shadow-md rounded-lg text-center p-6">
              <div className="text-blue-600 text-3xl mb-5">
                <FaMapPin />
              </div>
              <h3 className="text-xl font-semibold mb-2">العنوان</h3>
              <p>123 شارع التعاون، الرياض، السعودية</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactForm />

            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387144.0075839904!2d-74.2598756872249!3d40.69767006873312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2450bcb11d15b%3A0x8e89c60d8d71d1b7!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1680436704277!5m2!1sen!2s"
                width="100%"
                height="520"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
