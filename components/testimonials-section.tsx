import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "Switching to the WhatsApp Business API through this platform transformed our support speed. Message delivery is solid, media handling is seamless, and our customers actually enjoy talking to us now. It feels like support finally became personal again.",
    name: "James D.",
    role: "IT Director at Cisco",
    avatar: "/professional-man-glasses.png",
  },
  {
    quote:
      "We integrated WhatsApp API into our operations with zero downtime. The automation of order confirmations and shipping alerts cut manual work in half. The system’s webhook logs and template management made debugging easier than on any dashboard we’ve used before.",
    name: "Rachel G.",
    role: "Manager at HubSpot",
    avatar: "/professional-woman-smiling.png",
  },
  {
    quote:
      "Our campaigns with the WhatsApp API now outperform email. The message delivery score stays consistently high, and broadcast segmentation brings real revenue. Also, their media storage pipeline made sending catalogs and invoices incredibly efficient.",
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
