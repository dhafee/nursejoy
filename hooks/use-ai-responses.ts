export interface AIResponse {
  id: string
  text: string
  isLoading?: boolean
}

const midwiferyGuidanceResponses: Record<string, string> = {
  antenatal: `Antenatal care is about building safety, trust, and early detection. A simple structure that helps on busy days:

1. **Observe & ask**: wellbeing, movement, pain, bleeding, headaches/visual changes, swelling.
2. **Vitals**: BP, pulse, temp (as needed) and escalate abnormal findings early.
3. **History updates**: risks, meds, allergies, previous births, safeguarding concerns.
4. **Focused assessment**: fundal height (if appropriate), symptoms review, education and reassurance.
5. **Plan & documentation**: clear next steps, safety-net advice, and concise notes.

Tell me the scenario (routine visit vs concerns) and I’ll tailor a quick checklist.`,

  intrapartum: `For intrapartum support, think: **safety + communication + priorities**.

- **First 2 minutes**: identify the reason for concern, check vitals, fetal wellbeing (per local protocol), and pain.
- **Prioritize**: what must happen now vs what can wait.
- **Communicate clearly**: SBAR-style updates to your team.
- **Support the birthing person**: positioning, coping strategies, informed choices.
- **Document as you go**: short, objective notes that capture decisions and actions.

What stage of labor and what’s happening right now?`,

  postnatal: `Postnatal care is a balance of reassurance and vigilance. Key areas to check:

- **Bleeding & uterus**: lochia, tone, pain; escalate heavy bleeding or concerning symptoms.
- **Vitals & wellbeing**: fever, dizziness, severe headache/visual changes, chest pain/SOB.
- **Feeding**: latch/support, hydration, realistic plans, and follow-up.
- **Mental health**: mood, sleep, intrusive thoughts; gentle screening and signposting.
- **Newborn**: feeding, output, jaundice concerns, temperature, parent confidence.

If you share the context (home/ward, day postpartum), I’ll suggest a focused plan.`,

  documentation: `A quick documentation + handover framework:

1. **Situation**: who, gestation/postpartum day, why seen.
2. **Assessment**: key vitals, symptoms, findings (objective).
3. **Actions**: interventions, advice, medications, referrals.
4. **Escalation**: who informed, time, response, plan.
5. **Safety-net**: what to watch for + when to seek urgent help.

Want a template you can copy into your notes?`,

  career: `For midwifery career growth, start here:

- **Define your direction**: ward/community, high-risk, education, leadership, research.
- **Strengths inventory**: 3 clinical strengths + 3 soft skills + 2 wins you can prove.
- **Your story**: a clear 30-second intro (who you are, what you do, what you’re growing).
- **Interview prep**: practice scenario questions, reflection, escalation, and team communication.

Tell me your goal (new role, promotion, confidence, brand) and I’ll map next steps.`,

  default: `Hi! I’m Midwife Joy. I’m here to help you with:

- **Antenatal care**: assessments, education, communication
- **Labor support**: prioritization, calm decision-making
- **Postnatal care**: support, red flags, escalation
- **Documentation**: notes, handover, organization
- **Career growth**: confidence, interviews, personal brand

What would you like help with today?`
}

export function useAIResponses() {
  const getResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase()

    // Match keywords to response categories
    if (lowerInput.includes('antenatal') || lowerInput.includes('pregnan') || lowerInput.includes('booking')) {
      return midwiferyGuidanceResponses.antenatal
    }
    if (lowerInput.includes('labor') || lowerInput.includes('labour') || lowerInput.includes('intrapart') || lowerInput.includes('delivery') || lowerInput.includes('birth')) {
      return midwiferyGuidanceResponses.intrapartum
    }
    if (lowerInput.includes('postnatal') || lowerInput.includes('postpartum') || lowerInput.includes('after birth') || lowerInput.includes('newborn') || lowerInput.includes('breastfeed')) {
      return midwiferyGuidanceResponses.postnatal
    }
    if (lowerInput.includes('document') || lowerInput.includes('handover') || lowerInput.includes('notes') || lowerInput.includes('chart')) {
      return midwiferyGuidanceResponses.documentation
    }
    if (lowerInput.includes('career') || lowerInput.includes('interview') || lowerInput.includes('cv') || lowerInput.includes('resume') || lowerInput.includes('brand')) {
      return midwiferyGuidanceResponses.career
    }

    return midwiferyGuidanceResponses.default
  }

  return { getResponse }
}
