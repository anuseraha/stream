import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "The security and compliance features have given us complete peace of mind. We can trust that our data is always safe and secure.",
    name: "James D.",
    role: "IT Director at Cisco",
    avatar: "/professional-man-glasses.png",
  },
  {
    quote:
      "The automated reporting features have saved me hours of time each week. I can focus on strategy and growth instead of data entry.",
    name: "Rachel G.",
    role: "Manager at HubSpot",
    avatar: "/professional-woman-smiling.png",
  },
  {
    quote:
      "We've seen a significant reduction in manual errors and an increase in team collaboration. This platform has been a strategic advantage for our business.",
    name: "Michael T.",
    role: "CEO at Salesforce",
    avatar: "/professional-man-suit.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
