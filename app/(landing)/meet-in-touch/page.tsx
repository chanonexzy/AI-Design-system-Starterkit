import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const imgLogo = 'https://www.figma.com/api/mcp/asset/7703bb0d-5e0d-4edd-96f2-b96bc04647a9'
const imgBanner = 'https://www.figma.com/api/mcp/asset/64d49985-4b0d-4d57-91f1-8726d4492e6c'
const imgMeetInTouchLogo = 'https://www.figma.com/api/mcp/asset/2d3d6b6a-eede-44ef-bfc8-ce44edc3eea0'
const imgFeature1 = 'https://www.figma.com/api/mcp/asset/adf96457-e5d4-4ed7-b254-92ae68dbe3bb'
const imgFeature2 = 'https://www.figma.com/api/mcp/asset/87f0a473-3add-47e5-8707-e8e4f1ed69e9'
const imgFeature3 = 'https://www.figma.com/api/mcp/asset/c21afbb2-30bf-40eb-81ba-69a8ce0955de'

const navItems = [
  { label: 'Home', hasChevron: true },
  { label: 'Product', hasChevron: true },
  { label: 'FAQ', hasChevron: false },
  { label: 'Product', hasChevron: true },
]

const features = [
  {
    image: imgFeature1,
    imageAlt: 'Email Integration',
    title: 'เชื่อมต่อกับระบบอีเมลองค์กรมาตรฐาน',
    description:
      'ระบบจองห้องประชุมสามารถทำงานเชื่อมต่อกับ Calendar Email ชั้นนำไม่ว่าจะเป็น Exchange, O365 หรือ Google Calendar ช่วยให้คุณสามารถไม่พลาดทุกการประชุม',
    imageLeft: true,
  },
  {
    image: imgFeature2,
    imageAlt: 'Multi-device',
    title: 'ใช้งานได้จากทุกที่ ทุกเวลา',
    description:
      'ระบบจองห้องประชุมรองรับการใช้งานได้จากอุปกรณ์ที่หลากหลายไม่ว่าจะเป็น Desktop / Tablet / Mobile ช่วยให้คุณสามารถจองห้องประชุมได้จากทุกที่ ทุกเวลา สะดวก รวดเร็ว มากยิ่งขึ้น',
    imageLeft: false,
  },
  {
    image: imgFeature3,
    imageAlt: 'Hybrid Working',
    title: 'ตอบโจทย์ Hybrid Working',
    description:
      'ระบบจองห้องประชุมสามารถเชื่อมต่อเข้ากับระบบ VDO Conference ชั้นนำได้อย่างลงตัว ช่วยให้คุณสามารถจองห้องประชุมและจอง Online Meeting ได้จากที่เดียว ตอบโจทย์การทำงานในยุค Hybrid Working',
    imageLeft: true,
  },
]

const faqs = [
  {
    value: 'product-info',
    question: 'Product Information',
    answer:
      'Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability. Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.',
  },
  {
    value: 'shipping',
    question: 'Shipping Details',
    answer:
      'We offer fast and reliable shipping to all major destinations. Standard shipping takes 3-5 business days, while express options are available for urgent orders.',
  },
  {
    value: 'returns',
    question: 'Return Policy',
    answer:
      'We have a 30-day return policy for all products. Items must be in original condition and packaging. Contact our support team to initiate a return.',
  },
]

const footerCompany = ['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials']
const footerSupport = ['Help center', 'Terms of service', 'Legal', 'Privacy policy', 'Status']

export default function MeetInTouchPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* NavBar */}
      <header className="h-16 flex items-center justify-between px-9 lg:px-36 border-b bg-white">
        <div className="relative h-[33px] w-[184px] shrink-0">
          <Image src={imgLogo} alt="Exzy Smart Office" fill className="object-contain" unoptimized />
        </div>
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item, i) => (
            <button
              key={i}
              className="flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent transition-colors"
            >
              {item.label}
              {item.hasChevron && <ChevronDown className="h-4 w-4" />}
            </button>
          ))}
        </nav>
      </header>

      {/* Banner */}
      <section className="relative h-[600px] flex items-center px-9 lg:px-36">
        <Image src={imgBanner} alt="Banner" fill className="object-cover" unoptimized />
        <div className="relative z-10 flex flex-col gap-4 max-w-[601px]">
          <div className="relative h-[72px] w-[290px]">
            <Image src={imgMeetInTouchLogo} alt="Meet in Touch" fill className="object-contain object-left" unoptimized />
          </div>
          <h1 className="text-[36px] font-semibold leading-[44px] text-[#202020]">
            ระบบจองห้องประชุม
            <br />
            (Meeting Room Booking System)
          </h1>
          <p className="text-lg text-muted-foreground">
            ระบบจองห้องประชุมสำหรับองค์กรอันดับ 1 ช่วยแก้ปัญหาการจองห้องประชุมต่างๆ รวมถึงช่วยให้การใช้ห้องประชุมมีประสิทธิภาพมากยิ่งขึ้น
          </p>
          <Button className="w-fit bg-[#4caf4f] hover:bg-[#43a047] text-white rounded px-8 py-3.5 text-base">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="flex flex-col gap-9 py-9">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-24 px-9 lg:px-36">
            {feature.imageLeft ? (
              <>
                <div className="relative h-[253px] w-[450px] shrink-0">
                  <Image src={feature.image} alt={feature.imageAlt} fill className="object-cover" unoptimized />
                </div>
                <FeatureContent title={feature.title} description={feature.description} />
              </>
            ) : (
              <>
                <FeatureContent title={feature.title} description={feature.description} />
                <div className="relative h-[253px] w-[450px] shrink-0">
                  <Image src={feature.image} alt={feature.imageAlt} fill className="object-cover" unoptimized />
                </div>
              </>
            )}
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="flex flex-col items-center gap-3 py-6 bg-background">
        <p className="text-xl text-foreground">คำถามที่พบบ่อย (FAQs)</p>
        <Accordion type="single" collapsible defaultValue="product-info" className="w-full max-w-[503px]">
          {faqs.map((faq) => (
            <AccordionItem key={faq.value} value={faq.value}>
              <AccordionTrigger className="text-sm font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm text-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="bg-black flex gap-32 px-[165px] py-16">
        {/* Company Info */}
        <div className="flex flex-col gap-8 shrink-0">
          <div className="flex flex-col gap-2 text-[#f5f7fa] text-sm w-[350px]">
            <p>Copyright © 2020 xxx ltd.</p>
            <p>All rights reserved</p>
          </div>
          <div className="flex items-center gap-4">
            {['Instagram', 'Dribbble', 'Twitter', 'Youtube'].map((social) => (
              <div key={social} className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="sr-only">{social}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-9">
          <FooterColumn title="Company" items={footerCompany} />
          <FooterColumn title="Support" items={footerSupport} />
          <div className="flex flex-col gap-6 shrink-0">
            <p className="text-xl font-semibold text-white w-40">Stay up to date</p>
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-foreground text-white">Email</label>
              <Input
                placeholder="Email"
                className="w-[320px] bg-white text-black"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureContent({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-6 max-w-[601px]">
      <div className="flex flex-col gap-4">
        <h2 className="text-[36px] font-semibold leading-[44px] text-[#202020]">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Button className="w-fit bg-[#4caf4f] hover:bg-[#43a047] text-white rounded px-8 py-3.5 text-base">
        Learn More
      </Button>
    </div>
  )
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-6 shrink-0">
      <p className="text-xl font-semibold text-white w-40">{title}</p>
      <ul className="flex flex-col gap-2 text-[#f5f7fa] text-sm">
        {items.map((item) => (
          <li key={item} className="w-40 cursor-pointer hover:text-white transition-colors">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
