import { Locate, Mail, PhoneIcon } from "lucide-react"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"

export const HomeSocialDetails = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-3xl font-bold mb-6">تواصل معنا</h1>

      <div className="mb-4 flex gap-2 items-center">
        <Locate className="size-4" />
        <p>المملكة العربية السعودية - الدمام - الرياض</p>
      </div>

      <div className="mb-4 flex gap-2 items-center">
        <PhoneIcon className="size-4" />
        <p>+966 562 999 007</p>
      </div>

      <div className="mb-4 flex gap-2 items-center">
        <Mail className="size-4" />
        <p>info@nf.com.sa</p>
      </div>

      <h4 className="font-bold mt-6 pb-3">صفحات التواصل الأجتماعي</h4>

      <div className="flex space-x-4 text-blue-700">
        <a href="#" className="text-xl hover:text-blue-500 ml-4">
          <FaFacebook />
        </a>
        <a href="#" className="text-xl hover:text-blue-500">
          <FaTwitter />
        </a>
        <a href="#" className="text-xl hover:text-blue-500">
          <FaInstagram />
        </a>
        <a href="#" className="text-xl hover:text-blue-500">
          <FaLinkedin />
        </a>
        <a href="#" className="text-xl hover:text-blue-500">
          <FaYoutube />
        </a>
      </div>
    </div>
  )
}
