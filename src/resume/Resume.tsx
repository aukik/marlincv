'use client'

import AchievementsSection from './Achievement'
import EducationSection from './Education'
import EducationSection2 from './EducationNew'
import ExperienceSection from './Experience'
import ProfileSection from './Profile'


export default function ResumePage() {
  
  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Resume Builder</h1>
      <ProfileSection />
      {/* <EducationSection /> */}
      <EducationSection2 />
      <ExperienceSection />
      {/* <ExperienceSection /> */}
      <AchievementsSection />
      
    </div>
  )
}