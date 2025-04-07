import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Globe, 
  Users, 
  ThumbsUp, 
  Award, 
  Heart, 
  Leaf 
} from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "Emma Rodriguez",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
      bio: "With over 15 years in the travel industry, Emma founded Wanderlust to share her passion for authentic travel experiences."
    },
    {
      name: "David Chen",
      position: "Head of Operations",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      bio: "David ensures that every journey runs smoothly, from the initial planning stages to your return home."
    },
    {
      name: "Sophia Patel",
      position: "Lead Travel Consultant",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80",
      bio: "Having visited over 50 countries, Sophia specializes in creating unique itineraries tailored to each client's preferences."
    },
    {
      name: "Michael Johnson",
      position: "Adventure Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      bio: "A former wilderness guide, Michael brings his expertise to designing thrilling yet safe adventure experiences."
    }
  ];

  const values = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Perspective",
      description: "We embrace cultural diversity and promote understanding through travel."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer-Centric",
      description: "Your satisfaction and experiences are at the heart of everything we do."
    },
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for the highest standards in service and travel experiences."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Integrity",
      description: "Honesty and transparency guide all our business practices and relationships."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      description: "We're genuinely passionate about travel and sharing amazing destinations."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability",
      description: "We're committed to responsible travel that respects local communities and environments."
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About Nexus Air Travels</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Creating unforgettable travel experiences since 2024
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                Wanderlust was founded in 2010 by Emma Rodriguez, a passionate traveler who believed that travel should be transformative, authentic, and accessible to everyone.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                What began as a small operation helping friends and family plan their dream vacations has grown into a full-service travel company with a team of dedicated experts who share Emma's vision and passion.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Today, we've helped thousands of travelers explore over 100 countries across six continents. Our mission remains the same: to create meaningful travel experiences that broaden perspectives, foster connections, and create lasting memories.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="Wanderlust office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These core principles guide everything we do at Wanderlust
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary inline-flex p-3 rounded-full bg-primary/10">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team 
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our experienced travel experts are passionate about creating unforgettable journeys
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Years of Experience" },
              { number: "100+", label: "Countries Covered" },
              { number: "15,000+", label: "Happy Travelers" },
              { number: "4.9/5", label: "Customer Rating" }
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}