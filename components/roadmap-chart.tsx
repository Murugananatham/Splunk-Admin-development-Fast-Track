"use client"
import { ChevronRight } from "lucide-react"

export default function RoadmapChart() {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
        {/* Start Node */}
        <div className="flex flex-col items-center">
          <div className="w-full md:w-48 p-4 bg-green-700 text-white rounded-lg text-center font-bold">
            Course Start
          </div>
          <div className="h-8 w-1 bg-green-700 md:hidden"></div>
        </div>

        {/* Hidden on mobile, visible on desktop */}
        <div className="hidden md:block w-8 h-1 bg-green-700"></div>

        {/* Splunk Admin */}
        <div className="flex flex-col items-center relative">
          <div className="w-full md:w-64 p-4 bg-green-100 rounded-lg">
            <h4 className="font-bold text-green-700 mb-2">Splunk Admin</h4>
            <p className="text-sm text-gray-700">Architecture, Data Onboarding, Clustering</p>
          </div>
          <div className="h-8 w-1 bg-green-700 md:hidden"></div>
          <ChevronRight className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-green-700 h-6 w-6 hidden md:block" />
        </div>

        {/* Hidden on mobile, visible on desktop */}
        <div className="hidden md:block h-1 bg-green-700"></div>

        {/* Splunk Developer */}
        <div className="flex flex-col items-center relative">
          <div className="w-full md:w-64 p-4 bg-green-100 rounded-lg">
            <h4 className="font-bold text-green-700 mb-2">Splunk Developer</h4>
            <p className="text-sm text-gray-700">Knowledge Objects, CIM Mapping, Dashboarding</p>
          </div>
          <div className="h-8 w-1 bg-green-700 md:hidden"></div>
          <ChevronRight className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-green-700 h-6 w-6 hidden md:block" />
        </div>

        {/* Hidden on mobile, visible on desktop */}
        <div className="hidden md:block h-1 bg-green-700"></div>

        {/* End Node */}
        <div className="flex flex-col items-center">
          <div className="w-full md:w-48 p-4 bg-green-700 text-white rounded-lg text-center font-bold">
            Project Completed
          </div>
        </div>
      </div>

      {/* Mobile Timeline Dots */}
      <div className="flex flex-col items-center md:hidden absolute left-1/2 transform -translate-x-1/2 top-0 h-full">
        <div className="w-4 h-4 rounded-full bg-green-700 mt-[48px]"></div>
        <div className="w-1 h-[140px] bg-green-700"></div>
        <div className="w-4 h-4 rounded-full bg-green-700"></div>
        <div className="w-1 h-[140px] bg-green-700"></div>
        <div className="w-4 h-4 rounded-full bg-green-700"></div>
        <div className="w-1 h-[140px] bg-green-700"></div>
        <div className="w-4 h-4 rounded-full bg-green-700"></div>
      </div>
    </div>
  )
}

