import { assets, testimonials } from 'assets'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { FlipWords } from '@/components/ui/flip-words'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { Download } from 'lucide-react'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
})

const Home = () => {
  return (
    <>
      {/* === HERO === */}
      <section className="relative min-h-screen flex items-center justify-center bg-background">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Stats */}
            <div className="flex gap-10 text-lg font-medium text-muted-foreground">
              <div>
                <p className="text-3xl font-bold text-foreground">+200</p>
                <span>Projects Completed</span>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">+50</p>
                <span>Startups Raised</span>
              </div>
            </div>

            {/* Intro */}
            <h1
              className={`${poppins.className} antialiased text-6xl md:text-9xl font-bold text-foreground`}
            >
              Hello
            </h1>
            <div className="text-3xl text-muted-foreground">
              — I’m <span className="font-semibold">Nova Mei</span>, a
              <br />
              <FlipWords
                words={[
                  'Full-Stack Web Developer',
                  'Software Engineer',
                  'Web Application Developer',
                  'JavaScript Developer',
                ]}
                className="inline-block"
              />
            </div>
            <div className="mt-8 flex justify-center lg:justify-start">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3 font-medium"
              >
                <a
                  href="/resume.pdf"
                  download="NovaMei-Resume.pdf"
                  className="flex items-center gap-2"
                >
                  My Resume <Download size={18} />
                </a>
              </HoverBorderGradient>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={assets.user_image}
              alt="Profile"
              width={700}
              height={1000}
              className=" object-cover  rounded-none shadow-none bg-transparent"
              priority
            />
          </div>
        </div>
      </section>

      {/* === ABOUT SECTION (new) === */}
      <section className="min-h-screen bg-background">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2
              className={`${poppins.className} mt-2 text-5xl md:text-6xl font-semibold text-foreground`}
            >
              About me
            </h2>
          </div>

          {/* Intro paragraph */}
          <p className="mx-auto max-w-3xl text-center text-muted-foreground leading-8">
            I’m a Full Stack Developer with 4+ years of experience building
            scalable applications and efficient solutions. I specialize in
            delivering high-performance systems, collaborating effectively in
            teams, and continuously learning new technologies to drive
            innovation and growth.
          </p>

          <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
