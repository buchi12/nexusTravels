import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function IndianSpot() {
    const featuredDestinations = [
        {
          name: "Paris",
          country: "France",
          image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
          description: "Experience the romance and charm of the City of Light with iconic landmarks like the Eiffel Tower and Louvre Museum.",
          slug: "paris"
        },
        {
          name: "Bali",
          country: "Indonesia",
          image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
          description: "Discover paradise beaches, lush rice terraces, and rich cultural heritage on this beautiful Indonesian island.",
          slug: "bali"
        },
        {
          name: "Tokyo",
          country: "Japan",
          image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
          description: "Immerse yourself in a fascinating blend of traditional culture and cutting-edge technology in Japan's vibrant capital.",
          slug: "tokyo"
        },
        {
          name: "Santorini",
          country: "Greece",
          image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
          description: "Enjoy breathtaking views of the Aegean Sea from whitewashed buildings perched on volcanic cliffs.",
          slug: "santorini"
        },
        {
          name: "New York",
          country: "USA",
          image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          description: "Experience the energy of the city that never sleeps with its iconic skyline, Broadway shows, and diverse neighborhoods.",
          slug: "new-york"
        },
        {
          name: "Maldives",
          country: "Maldives",
          image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
          description: "Relax in luxury overwater bungalows surrounded by crystal clear turquoise waters and white sand beaches.",
          slug: "maldives"
        },
        {
          name: "Barcelona",
          country: "Spain",
          image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          description: "Discover Gaudí's architectural masterpieces, vibrant street life, and beautiful Mediterranean beaches.",
          slug: "barcelona"
        },
        {
          name: "Kyoto",
          country: "Japan",
          image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          description: "Step back in time in Japan's ancient capital with its thousands of temples, traditional gardens, and geisha districts.",
          slug: "kyoto"
        }
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