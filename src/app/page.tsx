'use client'

import { useState } from 'react'
import { ChevronRight, Check } from 'lucide-react'

import { FieldSelector } from '@/components/field-selector';
import ExperienceForm from '@/components/experience-form';
import { CountrySelect } from '@/components/country-select';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea';
import { PositionSelect } from '@/components/PositionSelect';
import { CountryPhoneSelect } from '@/components/CountryPhoneSelect';
import { ReferralSourceSelect } from '@/components/RefferalSourceSelect';

const countryCodes = [
  { code: "SA", dial_code: "+966" },  // Saudi Arabia
  { code: "AE", dial_code: "+971" },  // United Arab Emirates
  { code: "EG", dial_code: "+20" },   // Egypt
  { code: "IQ", dial_code: "+964" },  // Iraq
  { code: "JO", dial_code: "+962" },  // Jordan
  { code: "LB", dial_code: "+961" },  // Lebanon
  { code: "KW", dial_code: "+965" },  // Kuwait
  { code: "QA", dial_code: "+974" },  // Qatar
  { code: "BH", dial_code: "+973" },  // Bahrain
  { code: "OM", dial_code: "+968" },  // Oman
  { code: "SY", dial_code: "+963" },  // Syria
  { code: "YE", dial_code: "+967" },  // Yemen
  { code: "PS", dial_code: "+970" },  // Palestine
  { code: "MA", dial_code: "+212" },  // Morocco
  { code: "DZ", dial_code: "+213" },  // Algeria
  { code: "TN", dial_code: "+216" },  // Tunisia
  { code: "LY", dial_code: "+218" },  // Libya
  { code: "SD", dial_code: "+249" },  // Sudan
  { code: "SO", dial_code: "+252" },  // Somalia
  { code: "MR", dial_code: "+222" },  // Mauritania
  { code: "DJ", dial_code: "+253" },  // Djibouti
  { code: "KM", dial_code: "+269" },  // Comoros
]

const steps = [
  { id: 1, title: 'Basic Info', description: 'Your personal details' },
  { id: 2, title: 'Account Setup', description: 'Create your account' },
  { id: 3, title: 'Experience', description: 'Your background' },
  { id: 4, title: 'About Me', description: 'General Infromation' },
  { id: 5, title: 'Documents', description: 'Upload files' },
  { id: 6, title: 'Review', description: 'Confirm details' },
]

export default function WizardForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedPosition, setSelectedPosition] = useState<string>("");
  const [selectedFields, setSelectedFields] = useState<string[]>(['']);
  const [referralSource,setReferralSource]=useState<string>("");

  const [selectedExperience, setSelectedExperience] = useState<string>('');
  
  const [countryCode, setCountryCode] = useState("+966");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const handleBack = () => { }
  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderFormContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="block font-medium text-sm text-primary-text transition-colors duration-200">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-primary-text 
              placeholder:text-gray-400 placeholder:text-sm
              focus:outline-none focus:ring-2 focus:ring-gray-500/20 focus:border-gray-500
              hover:border-gray-400 transition-all duration-200 ease-in-out
              shadow-sm hover:shadow-md focus:shadow-lg"
                />
                <div className="absolute inset-0 rounded-lg ring-0 ring-gray-500/20 pointer-events-none transition-all duration-200" />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block font-medium text-sm text-primary-text transition-colors duration-200">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-primary-text 
              placeholder:text-gray-400 placeholder:text-sm
              focus:outline-none focus:ring-2 focus:ring-gray-500/20 focus:border-gray-500
              hover:border-gray-400 transition-all duration-200 ease-in-out
              shadow-sm hover:shadow-md focus:shadow-lg"
                />
                <div className="absolute inset-0 rounded-lg ring-0 ring-gray-500/20 pointer-events-none transition-all duration-200" />
              </div>
            </div>
            
<ReferralSourceSelect
  value={referralSource}
  onChange={setReferralSource}
  placeholder="Select how you heard about us"
/>
            
<div className="space-y-2">
  <label className="block font-medium text-sm text-primary-text transition-colors duration-200">
    Phone Number
  </label>
  <CountryPhoneSelect
    value={countryCode}
    onChange={setCountryCode}
    phoneValue={phoneNumber}
    onPhoneChange={setPhoneNumber}
    placeholder="1551172132"
  />
  <p className="text-xs text-gray-500 pt-1">
    We'll only contact you about your inquiry
  </p>
</div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block font-medium mb-2 text-small text-primary-text">
                Username
              </label>
              <input
                type="text"
                placeholder="Choose a username"
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent border border-cyan-bluish-gray bg-white text-primary-text"
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(155, 81, 224, 0.1)'}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              />
            </div>
            <div>
              <label className="block font-medium mb-2 text-small text-primary-text">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent border border-cyan-bluish-gray bg-white text-primary-text"
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(155, 81, 224, 0.1)'}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              />
            </div>
            <div>
              <label className="block font-medium mb-2 text-small text-primary-text">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent border border-cyan-bluish-gray bg-white text-primary-text"
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(155, 81, 224, 0.1)'}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              />
            </div>
          </div>
        )

      case 3:

        return (
          <div className="space-y-6">
            {/* Years of Experience Section */}
            <div className="space-y-2">
              <label className="block font-medium text-sm text-primary-text">
                Years of Experience
              </label>
              <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                <SelectTrigger className="w-full h-[50px] px-4 rounded-lg border border-gray-300 bg-white text-primary-text 
            focus:ring-2 focus:ring-kaizen-red/20 focus:border-kaizen-red
            hover:border-kaizen-red/60 transition-all duration-200
            data-[state=open]:border-kaizen-red data-[state=open]:ring-2 data-[state=open]:ring-kaizen-red/20">
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent className="rounded-lg border border-gray-200 bg-white shadow-lg py-1 
            animate-in fade-in-80 zoom-in-95">
                  <SelectItem
                    value="0-5"
                    className="py-2.5 px-3 rounded-md cursor-pointer transition-colors duration-150
                hover:bg-red-50 hover:text-kaizen-red
                focus:bg-red-50 focus:text-kaizen-red
                data-[state=checked]:bg-red-50 data-[state=checked]:text-kaizen-red
                data-[state=checked]:font-medium"
                  >
                    0-5 years
                  </SelectItem>
                  <SelectItem
                    value="5-10"
                    className="py-2.5 px-3 rounded-md cursor-pointer transition-colors duration-150
                hover:bg-red-50 hover:text-kaizen-red
                focus:bg-red-50 focus:text-kaizen-red
                data-[state=checked]:bg-red-50 data-[state=checked]:text-kaizen-red
                data-[state=checked]:font-medium"
                  >
                    5-10 years
                  </SelectItem>
                  <SelectItem
                    value="10+"
                    className="py-2.5 px-3 rounded-md cursor-pointer transition-colors duration-150
                hover:bg-red-50 hover:text-kaizen-red
                focus:bg-red-50 focus:text-kaizen-red
                data-[state=checked]:bg-red-50 data-[state=checked]:text-kaizen-red
                data-[state=checked]:font-medium"
                  >
                    10+ years
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Field Selection Section */}
            <FieldSelector
              selectedFields={selectedFields}
              onFieldsChange={setSelectedFields}
            />


          </div>
        )


      case 4:
        return (
          <>
            <div>
              <label className="block font-medium mb-2 text-sm text-primary-text">
                Position Applied to
              </label>
              
                <PositionSelect
                  value={selectedPosition}
                  onChange={setSelectedPosition}
                  placeholder="Choose Position..."
                />
            </div>


            <div>
              <label className="block font-medium mb-2 text-sm text-primary-text">
                Last Company You Worked in
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Enter your company name"
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent 
            border border-gray-300 bg-white text-primary-text
            focus:ring-kaizen-red/20 focus:border-kaizen-red
            hover:border-kaizen-red/60 transition-all duration-200"
              />
            </div>

            <div className="space-y-4">
              <div>
                <label className="block font-medium text-sm text-primary-text mb-2">
                  Select Countries You Worked In
                </label>
                <CountrySelect
                  value={selectedCountries}
                  onChange={setSelectedCountries}
                  placeholder="Choose countries..."
                />
              </div>
              {selectedCountries.length > 0 && (
                <div className="text-sm text-gray-600">
                  Selected: {selectedCountries.length} country(ies)
                </div>
              )}
            </div>

            <div>

              <label className="block font-medium mb-2 text-sm text-primary-text">
                Share Your Achievements, Projects , Experience here
              </label>
              <Textarea />
            </div>

          </>

        )
      case 5:
        return (
          <div className="space-y-6">
            <div className="border-2 border-dashed rounded-lg p-8 text-center border-secondary-grey">
              <svg
                className="mx-auto h-12 w-12 mb-2 text-secondary-grey"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-6"
                />
              </svg>
              <p className="font-medium mt-2 text-small text-primary-text">Upload your documents</p>
              <p className="mt-1 text-small text-secondary-grey">
                PDF, DOC, or DOCX (Max 10MB each)
              </p>
              <input
                type="file"
                multiple
                className="mt-4 w-full"
              />
            </div>
            <div>
              <label className="block font-medium mb-2 text-small text-primary-text">
                Document Type
              </label>
              <select className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent border border-cyan-bluish-gray bg-white text-primary-text"
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(155, 81, 224, 0.1)'}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              >
                <option>Resume / CV</option>
                <option>Cover Letter</option>
                <option>Portfolio</option>
                <option>Certifications</option>
              </select>
            </div>
          </div>
        )
      case 6:
        return (
          <div className="space-y-6">
            <div className="rounded-lg p-6 bg-[#f9f9f9] border border-secondary-grey">
              <h3 className="font-semibold mb-4 text-small text-primary-text">Review Your Information</h3>
              <div className="space-y-3">
                <p className="text-small text-primary-text"><span className="font-medium">Full Name:</span> <span className="text-secondary-grey">Ali Tarek</span></p>
                <p className="text-small text-primary-text"><span className="font-medium">Email:</span> <span className="text-secondary-grey">Ali@gmial.com</span></p>
                <p className="text-small text-primary-text"><span className="font-medium">Experience:</span> <span className="text-secondary-grey">5-10 years</span></p>
                <p className="text-small text-primary-text"><span className="font-medium">Regions I Worked In:</span> <span className="text-secondary-grey">Jordan, Yemen, Egypt</span></p>
                <p className="text-small text-primary-text"><span className="font-medium">Job Title:</span> <span className="text-secondary-grey">Marketing Manager</span></p>
                <p className="text-small text-primary-text"><span className="font-medium">Last Company:</span> <span className="text-secondary-grey">Tech Corp</span></p>
              </div>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded accent-kaizen-red" />
              <span className="text-small text-primary-text">I confirm that all information is correct</span>
            </label>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-kaizen-red flex items-center justify-center">
                <span className="text-white font-semibold text-lg">📝</span>
              </div>
              <div>
                <h1 className="font-bold text-xlarge text-primary-text">Application Form</h1>
                <p className="text-small text-secondary-grey">Complete all steps to finish</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-small text-kaizen-red">
                Step {currentStep} of {steps.length}
              </p>
            </div>
          </div>

          {/* Horizontal Progress */}
          <div className="relative">
            {/* Progress Line Layer */}
            <div className="absolute top-5 left-0 w-full h-1 flex px-[8.33%] z-0">
              <div className="w-full flex">
                {steps.slice(0, -1).map((step) => (
                  <div
                    key={`line-${step.id}`}
                    className={`flex-1 h-1 transition-colors ${currentStep > step.id ? 'bg-black' : 'bg-kaizen-red/20'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Buttons and Labels Layer */}
            <div className="relative z-10">
              <div className="grid grid-cols-6 gap-2">
                {steps.map((step) => (
                  <div key={step.id} className="flex flex-col items-center">
                    <button
                      onClick={() => setCurrentStep(step.id)}
                      className={`relative w-10 h-10 rounded-full font-semibold text-sm transition-all mb-3 ${currentStep > step.id
                        ? 'bg-kaizen-red text-white shadow-lg'
                        : currentStep === step.id
                          ? 'bg-kaizen-red text-white shadow-lg ring-4 ring-kaizen-red/30'
                          : 'bg-white text-muted-foreground border-2 border-secondary-grey'
                        }`}
                    >
                      {currentStep > step.id ? (
                        <Check className="w-5 h-5 mx-auto" />
                      ) : (
                        step.id
                      )}
                    </button>
                    <div className="text-center px-1">
                      <p className="font-semibold text-small text-primary-text leading-tight">{step.title}</p>
                      <p className="hidden sm:block text-[11px] text-secondary-grey mt-1 leading-tight">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Form Content */}
        <div className="rounded-2xl shadow-lg p-8 bg-white border border-secondary-grey">
          {/* <div className="mb-8">
            <h2 className="font-bold text-balance text-large text-primary-text">
              {steps[currentStep - 1].title}
            </h2> 
             <p className="mt-2 text-small text-secondary-grey">
              {steps[currentStep - 1].description}
            </p> 
          </div> */}

          {renderFormContent()}

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-between mt-10">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-all border ${currentStep === 1
                ? 'bg-secondary-grey text-white border-transparent cursor-not-allowed'
                : 'bg-white text-primary-text border-secondary-grey cursor-pointer'
                }`}
            >
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={currentStep === steps.length}
              className={`px-6 py-3 rounded-lg font-semibold text-white transition-all flex items-center gap-2 ${currentStep === steps.length
                ? 'bg-secondary-grey cursor-not-allowed'
                : 'bg-kaizen-red cursor-pointer'
                }`}
            >
              {currentStep === steps.length ? 'Complete' : 'Next'}
              {currentStep < steps.length && <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}