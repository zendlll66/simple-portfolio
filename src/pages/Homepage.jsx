import React from 'react';
import CustomButton from '../components/common/CustomButton';
import CompanyLogo from '../components/common/CompanyLogo';
import HeadingCompo from '../components/common/HeadingCompo';
import Servicesblock from '../components/HomeSection/Servicesblock';
import CtaBlock from '../components/HomeSection/CtaBlock';
import CaseStudies from '../components/HomeSection/CaseStudies';
import Processblock from '../components/HomeSection/Processblock';
import Teamblock from '../components/HomeSection/Teamblock';
import Testimonials from '../components/HomeSection/Testimonials';
import ContactUs from '../components/common/ContactUs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // 1 วิ
      once: true,      // เล่นแค่รอบแรก ไม่เล่นซ้ำตอน scroll กลับขึ้นมา
    });
  }, []);
  return (
    <div className="space-y-20 px-4 md:px-10">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-10 pt-10">
        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
          <h1 data-aos="fade-up" className="text-3xl md:text-6xl font-light font-positivus">
            Navigating the digital landscape for success
          </h1>
          <div data-aos="fade-up" className="md:hidden">
            <img src="/assets/images/headerImg.svg" alt="Header" className="w-full h-auto max-w-md mx-auto" />
          </div>
          <p data-aos="fade-up" className="text-base md:text-lg text-gray-600">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <div data-aos="fade-up" className="flex justify-center md:justify-start">
            <CustomButton label="Book a consultation" variant="primary" />
          </div>
        </div>
        <div data-aos="fade-up" className="hidden md:flex w-full md:w-1/2 justify-center">
          <img src="/assets/images/headerImg.svg" alt="Header" className="w-full h-auto max-w-md" />
        </div>
      </section>

      {/* Company Logo */}
      <CompanyLogo />

      {/* Services Section */}
      <section className="space-y-8">
        <div className="text-center md:text-left  flex flex-col  md:justify-start md:items-start items-center">
          <HeadingCompo data-aos="fade-up" label="Services" variant="default" className="text-2xl mb-2 w-fit" />
          <p data-aos="fade-up" className="text-sm md:text-base max-w-3xl">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>
        <Servicesblock />
      </section>

      {/* Call to Action */}
      <CtaBlock />

      {/* Case Studies */}
      <section className="space-y-8">
        <div className="text-center md:text-left flex flex-col  md:justify-start md:items-start items-center">
          <HeadingCompo label="Case Studies" variant="default" className="text-2xl mb-2 w-fit" />
          <p data-aos="fade-up">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
        </div>
        <CaseStudies />
      </section>

      {/* Working Process */}
      <section className="space-y-8">
        <div className="text-center md:text-left flex flex-col  md:justify-start md:items-start items-center">
          <HeadingCompo label="Our Working Process" variant="default" className="text-2xl mb-2 w-fit" />
          <p data-aos="fade-up">Step-by-Step Guide to Achieving Your Business Goals</p>
        </div>
        <Processblock />
      </section>

      {/* Team Section */}
      <section className="space-y-8">
        <div className="text-center md:text-left flex flex-col  md:justify-start md:items-start items-center">
          <HeadingCompo label="Team" variant="default" className="text-2xl mb-2 w-fit" />
          <p data-aos="fade-up" >Meet the skilled and experienced team behind our successful digital marketing strategies</p>
        </div>
        <Teamblock />
        <div className="flex justify-center md:justify-end">
          <CustomButton label="Book a consultation" variant="primary" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-8">
        <div className="text-center md:text-left flex flex-col  md:justify-start md:items-start items-center">
          <HeadingCompo label="Testimonials" variant="default" className="text-2xl mb-2 w-fit" />
          <p data-aos="fade-up">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
        </div>
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section className="space-y-8">
        <div className="text-center md:text-left flex flex-col  md:justify-start md:items-start items-center">
          <HeadingCompo label="Contact Us" variant="default" className="text-2xl mb-2 w-fit" />
          <p data-aos="fade-up">Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
        </div>
        <ContactUs />
      </section>


    </div>
  )
}

export default Homepage;
