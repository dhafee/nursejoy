'use client'

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Navigation */}
          <div className="hidden md:block space-y-6 border-l-2 border-primary/20 pl-6">
            <div>
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">about</h4>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <a href="#journey" className="block hover:text-foreground transition-colors">
                My Journey
              </a>
              <a href="#why-help" className="block hover:text-foreground transition-colors">
                Why I Help
              </a>
              <a href="#approach" className="block hover:text-foreground transition-colors">
                My Approach
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div id="journey" className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">My Journey: Nigeria to UK Nursing</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  I graduated as a nurse in Nigeria in 2015, bringing 6 years of clinical experience. In 2019, I made the brave decision to relocate to the UK to advance my career. What I thought would be straightforward became a challenging journey filled with unexpected hurdles.
                </p>
                <p>
                  The IELTS exam, the NMC registration process, OSCE preparation, and the intense job search left me overwhelmed. I faced rejection letters, struggled with interview anxiety, and questioned if the move was worth it. But I persevered, and in 2020, I became a UK Registered Nurse.
                </p>
              </div>
            </div>

            <div id="why-help" className="space-y-4 pt-4 border-t border-secondary">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Why I Help Other Nurses</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Watching countless nurses struggle through the same challenges I faced motivated me to help. I realized that the knowledge I gained—the exam strategies, the NHS recruitment insights, the relocation logistics—could save others months of frustration and thousands of pounds.
                </p>
                <p>
                  Today, I dedicate my time to coaching international nurses through every step of their relocation journey. My goal is simple: to make your path to UK nursing smoother and faster than mine was.
                </p>
              </div>
            </div>

            <div id="approach" className="space-y-4 pt-4 border-t border-secondary">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">My Approach</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  I don't believe in one-size-fits-all solutions. Every nurse's situation is unique. That's why I provide personalized coaching tailored to your specific needs—whether you're just starting the relocation process or preparing for interviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
