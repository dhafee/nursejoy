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
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">My Journey in Midwifery</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Midwifery taught me that presence, skill, and confidence matter—especially in high‑pressure moments. Over time, I learned how to stay grounded, communicate clearly, and lead with calm while supporting women and families through pregnancy, birth, and postpartum care.
                </p>
                <p>
                  I also learned the hard way that burnout can sneak in when you’re always giving. Building simple systems—how I plan my shifts, document efficiently, and protect my energy—helped me thrive and become more effective in my practice.
                </p>
              </div>
            </div>

            <div id="why-help" className="space-y-4 pt-4 border-t border-secondary">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Why I Help Other Midwives</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  I’ve seen so many midwives carry the weight of responsibility alone—questioning themselves, overworking, and feeling stuck. I believe you deserve support that’s practical, compassionate, and built for real life.
                </p>
                <p>
                  Today, I mentor midwives with tools, coaching, and step‑by‑step guidance—so you can grow your confidence, strengthen your skills, and build a career you’re proud of.
                </p>
              </div>
            </div>

            <div id="approach" className="space-y-4 pt-4 border-t border-secondary">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">My Approach</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  I don’t believe in one-size-fits-all solutions. Every midwife’s situation is unique. That’s why my support is personalized—whether you’re building confidence on shift, preparing for interviews, or creating a clear plan for your next career move.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
