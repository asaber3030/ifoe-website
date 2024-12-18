import { type Metadata } from "next"

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"

export const metadata: Metadata = {
  title: "الرئيسية",
  description: "الرئيسية"
}

export default function Home() {
  return (
    <main>
      <section
        className="relative md:h-screen h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            أهلاً بكم في معرض فرص الامتياز التجاري الدولي
          </h1>
          <p className="text-sm sm:text-lg lg:text-2xl mb-6 leading-relaxed max-w-2xl">
            حلول مبتكرة تلبي احتياجات عملائنا
          </p>
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-sm sm:text-base lg:text-lg transition duration-300 ease-in-out"
          >
            تواصل معنا الآن
          </a>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 text-center lg:text-left flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
        <div className="w-full lg:w-1/2">
          <img src="/bg.jpg" alt="Hero Image" className="rounded-md ml-auto" width={500} />
        </div>

        <div className="max-w-lg md:text-right text-center">
          <h1 className="font-bold text-gray-800">
            <span className="text-blue-600">معرض </span>
            الامتياز التجاري الدولي
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Your ultimate destination for fixing things with ease. Discover our range of services
            tailored just for you.
          </p>
          <div className="mt-6 flex md:justify-start justify-center space-x-4">
            <button className="ml-4 px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
              تعرف علينا أكثر
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        {/* Left Section - Contact Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-6">تواصل معنا</h1>

          <div className="mb-4 flex items-center">
            <span className="text-2xl mr-4">📞</span>
            <p>المملكة العربية السعودية - الدمام - الرياض</p>
          </div>

          <div className="mb-4 flex items-center">
            <span className="text-2xl mr-4">📞</span>
            <p>+966 562 999 007</p>
          </div>

          <div className="mb-4 flex items-center">
            <span className="text-2xl mr-4">📧</span>
            <p>info@nf.com.sa</p>
          </div>

          <h4 className="font-bold mt-6 pb-3">صفحات التواصل الأجتماعي</h4>

          <div className="flex space-x-4 text-blue-700">
            {/* Social Icons */}
            <a href="#" className="text-xl hover:text-gray-300 ml-4">
              <FaFacebook />
            </a>
            <a href="#" className="text-xl hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-xl hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="text-xl hover:text-gray-300">
              <FaLinkedin />
            </a>
            <a href="#" className="text-xl hover:text-gray-300">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="الاسم الأول *"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
              />
              <input
                type="text"
                placeholder="الاسم الأخير *"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="email"
                placeholder="البريد الإلكتروني *"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
              />
              <input
                type="text"
                placeholder="رقم الهاتف *"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
              />
            </div>

            <textarea
              placeholder="ملاحظات"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 mb-4"
            ></textarea>

            <div className="flex items-center mb-4">
              <input type="checkbox" id="subscribe" className="w-5 h-5 ml-2" />
              <label htmlFor="subscribe" className="text-sm">
                الاشتراك للحصول على التحديثات الحصرية
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-teal-800"
            >
              إرسال
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
