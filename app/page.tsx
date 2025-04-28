import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { 
  Plane, 
  Hotel, 
  Map, 
  Compass, 
  Shield, 
  Users, 
  Star, 
  ArrowRight 
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0"><video className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2" autoPlay loop muted>
        <source src="/web.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
       
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            50,000+ happy travelers, 10+ destinations, and 24/7 support. Your adventure starts here!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/destinations">Explore Destinations</Link>
            </Button>
            <Button size="lg" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section 
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We offer a wide range of travel services to make your journey memorable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Plane className="h-10 w-10" />, 
                title: "Flight Booking", 
                description: "Get the best deals on flights to destinations worldwide." 
              },
              { 
                icon: <Hotel className="h-10 w-10" />, 
                title: "Hotel Reservations", 
                description: "Find perfect accommodations from luxury to budget-friendly options." 
              },
              { 
                icon: <Map className="h-10 w-10" />, 
                title: "Tour Packages", 
                description: "All-inclusive packages for hassle-free travel experiences." 
              },
              { 
                icon: <Compass className="h-10 w-10" />, 
                title: "Adventure Tours", 
                description: "Exciting adventures for thrill-seekers and nature lovers." 
              },
              { 
                icon: <Shield className="h-10 w-10" />, 
                title: "Travel Insurance", 
                description: "Comprehensive coverage for peace of mind during your travels." 
              },
              { 
                icon: <Users className="h-10 w-10" />, 
                title: "Group Travel", 
                description: "Special arrangements for family reunions, corporate retreats, and more." 
              }
            ].map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 text-primary inline-flex p-3 rounded-full bg-primary/10">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>*/}
      {/* About Us */}
      <div>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
      
      {/* Left Content */}
   

      {/* Right Image */}
      <div className="lg:w-1/2 flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="About Us"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">NEXUS AIR TRAVELS</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
        Nexus Air Travels is your trusted travel partner, specializing in group flight bookings, customized trips, and exclusive travel experiences. We are committed to making your journey smooth, stress-free, and affordable. Whether you're planning a family vacation, corporate retreat, honeymoon, or a spiritual pilgrimage, we offer the best deals with 24/7 customer support and expert guidance.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition"
        >
          ABOUT US
        </Link>
      </div>
    </div>
  </div>
</div>

   {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We offer a wide range of travel services to make your journey memorable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Plane className="h-10 w-10" />, 
                title: "Flight Group Bookings", 
                description: "Get the best deals on flights to destinations worldwide." 
              },
              { 
                icon: <Hotel className="h-10 w-10" />, 
                title: "Hotel Reservations", 
                description: "Find perfect accommodations from luxury to budget-friendly options." 
              },
              { 
                icon: <Map className="h-10 w-10" />, 
                title: "Tour Packages", 
                description: "All-inclusive packages for hassle-free travel experiences." 
              },
              { 
                icon: <Compass className="h-10 w-10" />, 
                title: "Adventure Tours", 
                description: "Exciting adventures for thrill-seekers and nature lovers." 
              },
              { 
                icon: <Shield className="h-10 w-10" />, 
                title: "Travel Insurance", 
                description: "Comprehensive coverage for peace of mind during your travels." 
              },
              { 
                icon: <Users className="h-10 w-10" />, 
                title: "Group Travel", 
                description: "Special arrangements for family reunions, corporate retreats, and more." 
              }
            ].map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 text-primary inline-flex p-3 rounded-full bg-primary/10">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Featured Destinations */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our handpicked destinations for your next adventure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=2400&h=1000&s=1",
                title: "Travel to Goa ",
                description: "Unwind in Goa, India’s ultimate beach paradise, where golden shores, vibrant nightlife, and rich Portuguese heritage come together for a perfect escape. Whether you’re looking for adventure, relaxation, or a party-filled getaway, Goa has something for everyone."
              },
              {
                image: "https://shreehariyoga.com/wp-content/uploads/2018/07/gokarna-statue.jpg",
                title: "Travel to Gokarna",
                description: "Discover the unspoiled beauty of Gokarna, a serene coastal town in Karnataka, India, known for its pristine beaches, ancient temples, and laid-back atmosphere. Whether you seek spiritual solace, adventure, or a peaceful escape, Gokarna offers a unique blend of experiences."
              },
              {
                image: "https://t3.ftcdn.net/jpg/03/34/77/78/360_F_334777839_Y7Y5P8FFY5WFo7sTwjeT0vxDbTGxhIo5.jpg",
                title: "Travel to the Maldives 🏝️🌊🐠",
                description: "Escape to the Maldives, a paradise of crystal-clear waters, white sandy beaches, and luxurious overwater villas. Whether you seek romance, adventure, or pure relaxation, this tropical haven offers an unforgettable experience."
              },
              {
                image: "https://media.worldnomads.com/Explore/india/kerala-backwaters-canoe-istock.jpg",
                title: "Travel to Kerala 🌿🚤🏞️",
                description: "Experience the magic of Kerala, known as “God’s Own Country,” where lush backwaters, misty hill stations, and sun-kissed beaches create an unforgettable escape. Whether you seek relaxation, adventure, or cultural immersion, Kerala offers a perfect blend of nature, tradition, and tranquility."
              },
              {
                image: "https://travelmax.in/wp-content/uploads/2023/09/Feature_Image_French_Colony-1536x922.jpg",
                title: "Travel to Pondicherry 🌴🌊🏖️",
                description: "Escape to the charming coastal town of Pondicherry, where French colonial architecture, vibrant culture, and serene beaches create the perfect blend of relaxation and exploration. Whether you seek tranquility, history, or adventure, Pondicherry offers a unique and enriching getaway."
              },
              {
                image: "https://unpluggedlife.in/wp-content/uploads/2023/03/Unplugged_Life_Trip_Pangong_3-1170x658.jpg",
                title: "Travel to Ladakh 🏔️🚗❄️",
                description: "Embark on an unforgettable journey to Ladakh, the “Land of High Passes,” where breathtaking landscapes, ancient monasteries, and thrilling adventures await. Whether you seek serenity, adventure, or cultural exploration, Ladakh offers an experience like no other."
              }
            ].map((destination, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all group">
                <div className="relative h-64">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{destination.description}</p>
                  <Link 
                  href="/destinations"
                    className="text-primary font-medium inline-flex items-center"
                  >
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/destinations">View All Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials 
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Read about the experiences of travelers who have explored the world with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "London, UK",
                quote: "The trip to Bali was absolutely perfect! Every detail was taken care of, and the local guides were exceptional. Can't wait to book my next adventure with Wanderlust!",
                rating: 5
              },
              {
                name: "Michael Chen",
                location: "Toronto, Canada",
                quote: "Our family vacation to Greece exceeded all expectations. The accommodations were superb, and the itinerary allowed us to experience both popular attractions and hidden gems.",
                rating: 5
              },
              {
                name: "Elena Rodriguez",
                location: "Barcelona, Spain",
                quote: "The Japan tour was a perfect blend of culture, cuisine, and adventure. The team at Wanderlust made sure everything ran smoothly from start to finish.",
                rating: 4
              }
            ].map((testimonial, index) => (
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
                    <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/testimonials">Read More Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our travel experts today and begin planning your dream vacation
          </p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}