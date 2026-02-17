import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

function Location() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      
        <div className="w-full   overflow-hidden shadow-lg">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155155.02907166543!2d76.94531945171848!3d28.377055264942825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d228f446b3881%3A0x9d798b7f0e65fcbc!2sSector%2049%2C%20Gurugram%2C%20Haryana%20122018!5e1!3m2!1sen!2sin!4v1770359225221!5m2!1sen!2sin"  height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='rounded-xl w-full'></iframe>
        </div>

    
        <div>
          <h2 className="text-[35px]  font-semibold text-[#002741] mb-6">
            Get in Touch
          </h2>

          <div className="flex items-start mb-5">
            <img src="/assets/lc.svg" alt="" />
            <p className="pl-4 text-[16px] md:text-[22px] font-medium text-[#002741]">
              Office number 1013, Nandan Probiz, Sai Chowk
Rd, Laxman Nagar, Balewadi, Pune 411045,
Maharashtra, INDIA
            </p>
          </div>

          
          <div className="flex items-center mb-5">
            <img src="/assets/phon.svg" alt="" />
            <a
              href="tel:+91 95453 56767"
              className="pl-4 text-[16px] md:text-[22px] font-medium text-[#002741]"
            >
              +91 95453 56767
            </a>
          </div>

          
          <div className="flex items-center">
            <img src="/assets/email.svg" alt="" />
            <a
              href="mailto:contact@sairameducation.in"
              className="pl-4 text-[16px] md:text-[22px] font-medium text-[#002741]"
            >
              contact@sairameducation.in
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Location
