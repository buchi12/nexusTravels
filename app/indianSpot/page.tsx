import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function IndianSpot() {
    const featuredDestinations = [
        {
          name: "Goa",
          country: "India",
          image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=2400&h=1000&s=1",
          description: "Unwind in Goa, India’s ultimate beach paradise, where golden shores, vibrant nightlife, and rich Portuguese heritage come together for a perfect escape.",
          slug: "paris"
        },
        {
          name: "Ladakh",
          country: "India",
          image: "https://unpluggedlife.in/wp-content/uploads/2023/03/Unplugged_Life_Trip_Pangong_3-1170x658.jpg",
          description: "Embark on an unforgettable journey to Ladakh, the “Land of High Passes,” where breathtaking landscapes, ancient monasteries, and thrilling adventures await.",
          slug: "maldives"
        },
        {
          name: "Maldives",
          country: "India",
          image: "https://t3.ftcdn.net/jpg/03/34/77/78/360_F_334777839_Y7Y5P8FFY5WFo7sTwjeT0vxDbTGxhIo5.jpg",
          description: "Escape to the Maldives, a paradise of crystal-clear waters, white sandy beaches, and luxurious overwater villas.",
          slug: "bali"
        },
        {
          name: "Gokarna",
          country: "India",
          image: "https://shreehariyoga.com/wp-content/uploads/2018/07/gokarna-statue.jpg",
          description: "Discover the unspoiled beauty of Gokarna, a serene coastal town in Karnataka, India, known for its pristine beaches, ancient temples, and laid-back atmosphere.",
          slug: "tokyo"
        },
        {
          name: "Kerala",
          country: "India",
          image: "https://media.worldnomads.com/Explore/india/kerala-backwaters-canoe-istock.jpg",
          description: "Experience the magic of Kerala, known as “God’s Own Country,” where lush backwaters, misty hill stations, and sun-kissed beaches create an unforgettable escape. ",
          slug: "santorini"
        },
        {
          name: "Pondicherry",
          country: "India",
          image: "https://travelmax.in/wp-content/uploads/2023/09/Feature_Image_French_Colony-1536x922.jpg",
          description: "Escape to the charming coastal town of Pondicherry, where French colonial architecture, vibrant culture, and serene beaches create the perfect blend of relaxation and exploration.",
          slug: "new-york"
        },
       
      
      ];
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-24">
          <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Indian Spots </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDestinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all group">
                <div className="relative h-48">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                  <p className="text-primary font-medium mb-3">{destination.country}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{destination.description}</p>
                  <Link 
                    href={`/destinations/${destination.slug}`}
                    className="text-primary font-medium inline-flex items-center text-sm"
                  >
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
        </div>
    );
    }