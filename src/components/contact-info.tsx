import { Card } from "./ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { IntersectionAnimation } from "./animations";

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@youandai.co",
    description: "Typical response within 1 business day",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (415) 555-0123",
    description: "Monday to Friday, 8am – 6pm PT",
  },
  {
    icon: MapPin,
    title: "Global offices",
    value: "San Francisco · London · Singapore",
    description: "Hybrid delivery across US, EMEA, and APAC",
  },
];

export function ContactInfoCards() {
  return (
    <div className="space-y-4">
      {contactDetails.map((item, index) => (
        <IntersectionAnimation key={item.title} animation="fade-in-up" delay={0.15 * index}>
          <Card className="border-primary/10 bg-white/95 p-6">
            <item.icon className="h-8 w-8 text-accent" />
            <h3 className="mt-4 text-lg font-semibold text-primary">{item.title}</h3>
            <p className="mt-2 text-sm text-primary">{item.value}</p>
            <p className="text-xs text-slate-500">{item.description}</p>
          </Card>
        </IntersectionAnimation>
      ))}
    </div>
  );
}

