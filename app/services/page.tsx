import { Card, CardContent } from "@/components/ui/card";
import { 
  Plane, 
  Hotel, 
  Map, 
  Compass, 
  Shield, 
  Users, 
  Briefcase, 
  Car, 
  Utensils, 
  Camera, 
  Headphones, 
  Heart 
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    { 
      icon: <Plane className="h-10 w-10" />, 
      title: "Flight Booking", 
      description: "Get the best deals on flights to destinations worldwide with our extensive network of airline partners. We offer competitive prices, flexible booking options, and 24/7 support for any flight-related issues." 
    },
    { 
      icon: <Hotel className="h-10 w-10" />, 
      title: "Hotel Reservations", 
      description: "Find perfect accommodations from luxury resorts to budget-friendly options. Our curated selection ensures quality stays with verified reviews, special amenities, and exclusive rates not available elsewhere." 
    },
    { 
      icon: <Map className="h-10 w-10" />, 
      title: "Tour Packages", 
      description: "All-inclusive packages for hassle-free travel experiences. Our expertly designed itineraries cover transportation, accommodations, guided tours, and selected meals so you can focus on enjoying your journey." 
    },
    { 
      icon: <Compass className="h-10 w-10" />, 
      title: "Adventure Tours", 
      description: "Exciting adventures for thrill-seekers and nature lovers. From hiking and trekking to water sports and wildlife safaris, our adventure tours are led by experienced guides who prioritize both excitement and safety." 
    },
    { 
      icon: <Shield className="h-10 w-10" />, 
      title: "Travel Insurance", 
      description: "Comprehensive coverage for peace of mind during your travels. Our insurance plans cover medical emergencies, trip cancellations, lost luggage, and other unexpected situations that might arise during your journey." 
    },
    { 
      icon: <Users className="h-10 w-10" />, 
      title: "Group Travel", 
      description: "Special arrangements for family reunions, corporate retreats, and more. We handle the logistics of group travel with customized itineraries, group discounts, and dedicated coordinators to ensure everyone has a great experience." 
    },
    { 
      icon: <Briefcase className="h-10 w-10" />, 
      title: "Business Travel", 
      description: "Streamlined solutions for corporate travelers with priority service, executive accommodations, and meeting arrangements. We understand the unique needs of business travelers and provide efficient, reliable service." 
    },
    { 
      icon: <Car className="h-10 w-10" />, 
      title: "Transportation Services", 
      description: "Reliable car rentals, airport transfers, and private chauffeurs. Our transportation services ensure you can navigate your destination with ease, whether you prefer the freedom of self-driving or the convenience of a private driver." 
    },
    { 
      icon: <Utensils className="h-10 w-10" />, 
      title: "Culinary Experiences", 
      description: "Food tours, cooking classes, and reservations at renowned restaurants. Explore the local cuisine with expert guides who will introduce you to authentic flavors and traditional cooking techniques." 
    },
    { 
      icon: <Camera className="h-10 w-10" />, 
      title: "Photography Tours", 
      description: "Guided tours to the most photogenic locations with expert photography tips. Capture stunning landscapes and cultural moments with guidance from professional photographers who know the best spots and lighting conditions." 
    },
    { 
      icon: <Headphones className="h-10 w-10" />, 
      title: "24/7 Customer Support", 
      description: "Round-the-clock assistance for any travel concerns or emergencies. Our dedicated support team is always available to help with changes to your itinerary, unexpected issues, or travel advice during your journey." 
    },
    { 
      icon: <Heart className="h-10 w-10" />, 
      title: "Honeymoon Packages", 
      description: "Romantic getaways designed for couples celebrating their special occasion. Our honeymoon packages include romantic accommodations, private experiences, and thoughtful touches to make your trip unforgettable." 
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive travel services designed to make your journey seamless and memorable
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary inline-flex p-3 rounded-full bg-primary/10">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our simple process to help you plan your perfect trip
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Share your travel preferences, budget, and dream destinations with our expert travel consultants."
              },
              {
                step: "02",
                title: "Customized Planning",
                description: "Receive a tailored itinerary designed specifically for your interests and requirements."
              },
              {
                step: "03",
                title: "Seamless Experience",
                description: "Enjoy your journey with 24/7 support and carefully arranged accommodations and activities."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}