export interface AIResponse {
  id: string
  text: string
  isLoading?: boolean
}

const nursingGuidanceResponses: Record<string, string> = {
  // OSCE Related
  osce: `The OSCE (Objective Structured Clinical Examination) is a crucial assessment for international nurses registering in the UK. It tests four key areas:

1. **Communication & Professionalism** - Patient interactions, clarity, empathy
2. **Nursing Practice & Care** - Clinical skills and patient safety
3. **Knowledge & Understanding** - Medical knowledge and NHS protocols
4. **Organisation & Evaluation** - Time management and self-reflection

Most candidates take 2-3 months to prepare. I recommend practice stations, recorded mock exams, and studying UK clinical guidelines. Would you like specific OSCE preparation strategies?`,

  nhs: `The NHS (National Health Service) is the UK's public healthcare system. As an international nurse, here's what you need to know:

- **Pay & Benefits**: Starting salary £27,055-£33,384 depending on band and experience
- **Registration**: Must register with NMC (Nursing & Midwifery Council) - takes 6-12 weeks
- **Working Culture**: Evidence-based practice, teamwork, patient-centered care
- **Professional Development**: Access to training, CPD support, and career progression
- **Work-Life Balance**: Usually 37.5 hours/week, shift patterns vary by department

NHS roles offer excellent development opportunities and a supportive healthcare system. Are you interested in specific NHS departments or specialties?`,

  credentials: `International nursing credentials are assessed by the NMC. Here's the registration pathway:

1. **Eligibility Check** - Ensure your qualification meets UK standards
2. **IELTS Exam** - English language requirement (usually IELTS 7.0 minimum)
3. **NMC Application** - Submit your qualification for assessment
4. **OSCE Exam** - Pass the clinical examination
5. **Registration** - Once approved, you receive your NMC PIN

Total timeline: 3-6 months from start to finish. Documentation is crucial - ensure all qualifications are officially verified and translated. Would you like help with your specific credential pathway?`,

  "job hunting": `Finding a nursing job in the UK requires strategy and persistence:

1. **Timing** - Register with NMC first, then job search simultaneously
2. **Key Sites** - NHS Jobs, Indeed, Nursing Step, Reed Health, Specialist Trust websites
3. **CV & Cover Letter** - Highlight UK-relevant experience, use NHS terminology, explain relocation motivation
4. **Applications** - Target hospitals/trusts with OSCE preparation support for international nurses
5. **Interviews** - Prepare for structured interviews, discuss visa sponsorship early
6. **Networking** - Join nursing groups, connect with other international nurses, attend nursing events

Most international nurses secure positions within 2-4 months of registration. London and South East have higher competition but more opportunities. Which region are you targeting?`,

  relocation: `Relocating to the UK involves several key steps:

1. **Visa & Immigration** - Most nurses use Skilled Worker visa (Healthcare Worker fast-track available)
2. **Housing** - Research areas near your hospital, use Rightmove/Zoopla, budget £600-1200/month
3. **Costs** - Budget £3,000-5,000 for visa, registration, travel, initial setup
4. **Settling In** - Open a UK bank account, get National Insurance number, register with GP, join social groups
5. **Support Services** - Many trusts offer buddy systems, accommodation assistance, cultural integration programs

The first 3-6 months involve adjustment, but most international nurses find UK nursing rewarding. Do you have questions about specific relocation aspects?`,

  cost: `Here's a realistic cost breakdown for UK nurse relocation:

**One-time Costs:**
- Visa (Healthcare Worker) £719
- NMC Registration £121
- IELTS Exam £214
- Initial Travel & Setup £1,500-2,000

**Monthly Living Costs:**
- Rent (shared accommodation) £600-900
- Council Tax £100-150
- Utilities £80-120
- Food & Groceries £300-400
- Transport £50-100
- Miscellaneous £200-300

**Total Setup:** £2,500-3,500
**Monthly Budget:** £1,330-2,070

Most nurses break even within 6 months of starting work. Early career support and nursing bursaries may reduce costs. What's your approximate budget for relocation?`,

  "default": `Hello! I'm nurse Joy, an NHS-registered nurse and relocation coach. I'm here to help you with:

- **OSCE Preparation** - Clinical exam guidance and strategies
- **NHS Information** - Understanding the UK healthcare system
- **Credential Registration** - NMC pathway and requirements
- **Job Hunting** - Finding and securing NHS positions
- **Relocation Planning** - Moving to the UK with practical advice
- **Cost Planning** - Budget breakdown and financial planning

What would you like to know about your nursing journey to the UK? Feel free to ask about any of these topics or your specific situation!`
}

export function useAIResponses() {
  const getResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase()

    // Match keywords to response categories
    if (lowerInput.includes('osce') || lowerInput.includes('exam') || lowerInput.includes('clinical')) {
      return nursingGuidanceResponses.osce
    }
    if (lowerInput.includes('nhs') || lowerInput.includes('hospital') || lowerInput.includes('salary')) {
      return nursingGuidanceResponses.nhs
    }
    if (lowerInput.includes('credential') || lowerInput.includes('registration') || lowerInput.includes('nmf') || lowerInput.includes('registered')) {
      return nursingGuidanceResponses.credentials
    }
    if (lowerInput.includes('job') || lowerInput.includes('position') || lowerInput.includes('hire') || lowerInput.includes('employer')) {
      return nursingGuidanceResponses['job hunting']
    }
    if (lowerInput.includes('reloc') || lowerInput.includes('move') || lowerInput.includes('uk') || lowerInput.includes('housing')) {
      return nursingGuidanceResponses.relocation
    }
    if (lowerInput.includes('cost') || lowerInput.includes('price') || lowerInput.includes('budget') || lowerInput.includes('money')) {
      return nursingGuidanceResponses.cost
    }

    return nursingGuidanceResponses.default
  }

  return { getResponse }
}
