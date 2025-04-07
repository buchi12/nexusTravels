import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      quote: "The trip to Bali was absolutely perfect! Every detail was taken care of, and the local guides were exceptional. The accommodations were luxurious yet authentic, and the itinerary allowed us to experience both popular attractions and hidden gems. Can't wait to book my next adventure with Wanderlust!",
      destination: "Bali, Indonesia",
      rating: 5
    },
    {
      name: "Michael Chen",
      location: "Toronto, Canada",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      quote: "Our family vacation to Greece exceeded all expectations. The accommodations were superb, and the itinerary allowed us to experience both popular attractions and hidden gems. The kids especially loved the boat tour around Santorini. The Wanderlust team was responsive and helpful throughout the entire process.",
      destination: "Santorini, Greece",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      location: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
      quote: "The Japan tour was a perfect blend of culture, cuisine, and adventure. The team at Wanderlust made sure everything ran smoothly from start to finish. I particularly appreciated the personalized recommendations for restaurants and shopping areas. The traditional ryokan experience they arranged was a highlight of my trip.",
      destination: "Tokyo, Japan",
      rating: 4
    },
    {
      name: "James Wilson",
      location: "Sydney, Australia",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      quote: "My wife and I celebrated our anniversary in Paris with a package from Wanderlust, and it was truly magical. The boutique hotel they selected had an amazing view of the Eiffel Tower, and the private dinner cruise on the Seine was unforgettable. Every detail was thoughtfully arranged to make our special occasion perfect.",
      destination: "Paris, France",
      rating: 5
    },
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
      quote: "The safari experience in Tanzania was beyond words. Wanderlust arranged everything perfectly - from the luxury tented camps to the knowledgeable guides who helped us spot the Big Five. The hot air balloon ride over the Serengeti at sunrise was a once-in-a-lifetime experience that I'll never forget.",
      destination: "Serengeti, Tanzania",
      rating: 5
    },
    {
      name: "Robert Garcia",
      location: "Chicago, USA",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      quote: "I was hesitant about booking an organized tour for my trip to Peru, but Wanderlust changed my mind completely. The small group size made it feel personal, and our guide's knowledge of Machu Picchu and Inca history added so much depth to the experience. The accommodations in Cusco were charming and comfortable.",
      destination: "Machu Picchu, Peru",
      rating: 4
    },
    {
      name: "Olivia Kim",
      location: "Seoul, South Korea",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80",
      quote: "My solo trip to Italy was made so much easier and more enjoyable with Wanderlust's help. They arranged skip-the-line tickets for major attractions and suggested wonderful local restaurants in each city. The cooking class they booked in Florence was a highlight - I still make that pasta recipe at home!",
      destination: "Florence, Italy",
      rating: 5
    },
    {
      name: "David Thompson",
      location: "Melbourne, Australia",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      quote: "The Maldives honeymoon package exceeded our expectations. The overwater bungalow was stunning, and the private dining experiences on the beach were incredibly romantic. Wanderlust thought of every detail to make our honeymoon special, from the champagne welcome to the couple's spa treatments.",
      destination: "Maldives",
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Traveler Testimonials</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Read what our clients have to say about their experiences with Wanderlust
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                      <p className="text-sm text-primary">{testimonial.destination}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Travelers Choose Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our commitment to excellence has earned us the trust of thousands of travelers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "15,000+", label: "Happy Travelers" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "98%", label: "Would Recommend" },
              { number: "92%", label: "Return Customers" }
            ].map((stat, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-lg text-gray-600 dark:text-gray-400">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}