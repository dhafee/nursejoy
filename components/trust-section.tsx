'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle, Award, Users } from 'lucide-react'

export default function TrustSection() {
  const credentials = [
    {
      icon: Award,
      title: 'Registered Midwife',
      description: 'Evidence-based, compassionate care',
    },
    {
      icon: Users,
      title: 'Clinical Practice',
      description: 'Antenatal • Intrapartum • Postnatal',
    },
    {
      icon: CheckCircle,
      title: 'Verified Coach',
      description: 'Successfully supported 150+ midwives',
    },
  ]

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Midwives
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My credentials and experience speak for themselves
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon
            return (
              <Card key={idx} className="p-6 border-secondary hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground">{cred.title}</h3>
                  <p className="text-sm text-muted-foreground">{cred.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
