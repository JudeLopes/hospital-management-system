import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Statistics from './components/Statistics'
import Departments from './components/Departments'
import CareExperience from './components/CareExperience'
import Specialists from './components/Specialists'
import PatientStory from './components/PatientStory'
import Appointment from './components/Appointment'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './styles.css'

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => { document.documentElement.style.scrollBehavior = 'auto' }
  }, [])

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Statistics />
        <Departments />
        <CareExperience />
        <Specialists />
        <PatientStory />
        <Appointment />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
