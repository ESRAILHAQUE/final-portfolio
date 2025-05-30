import { Code, Bug, BarChart3, Zap, Brain, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack web development using modern technologies like Next.js, React, Node.js, and MongoDB.",
      features: ["Frontend Development", "Backend Development", "Database Design", "API Integration"],
    },
    {
      icon: Bug,
      title: "Bug Fixing",
      description: "Quick and efficient debugging and fixing of existing applications with detailed documentation.",
      features: ["Code Review", "Performance Optimization", "Security Fixes", "Legacy Code Updates"],
    },
    {
      icon: BarChart3,
      title: "Dashboard Development",
      description: "Custom dashboard solutions with data visualization and real-time analytics.",
      features: ["Data Visualization", "Real-time Updates", "Custom Charts", "User Management"],
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Seamless integration of third-party APIs and development of custom REST APIs.",
      features: ["REST API Development", "Third-party Integrations", "API Documentation", "Authentication"],
    },
    {
      icon: Brain,
      title: "AI Tool Integration",
      description: "Integration of AI and machine learning tools to enhance your applications.",
      features: ["ChatGPT Integration", "Image Processing", "Natural Language Processing", "Automation"],
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Ongoing maintenance and support for your web applications and websites.",
      features: ["Regular Updates", "Performance Monitoring", "Security Updates", "24/7 Support"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I offer a comprehensive range of web development services to help bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow h-full">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-center">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
