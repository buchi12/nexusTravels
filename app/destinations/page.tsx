import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function DestinationsPage() {
  const continents = [
    {
        name: "Georgia",
  image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
  destinations: `Travel to Georgia 🇬🇪🏔️🍷
Step into the enchanting country of Georgia, where breathtaking mountains, rich history, and warm hospitality create an unforgettable vacation experience. 

Explore the charming capital, **Tbilisi**, where cobblestone streets, ancient churches, and vibrant nightlife blend seamlessly with modern architecture.
Wander through the historic streets of **Mtskheta**, Georgia’s ancient capital and a **UNESCO World Heritage Site**, home to the stunning **Svetitskhoveli Cathedral**.

Marvel at the breathtaking landscapes of **Kazbegi**, with its snow-capped peaks, lush valleys, and the iconic **Gergeti Trinity Church** perched high in the mountains.
Discover the **wine region of Kakheti**, where you can taste some of the **world’s oldest wines**, visit traditional wineries, and experience Georgia’s rich winemaking heritage.

Relax by the **Black Sea in Batumi**, a lively coastal city known for its modern skyline, pebble beaches, and vibrant nightlife.
Explore the **cave cities of Uplistsikhe and Vardzia**, ancient rock-hewn settlements that offer a glimpse into Georgia’s fascinating past.

Hike through the stunning landscapes of **Svaneti**, where medieval stone towers stand against the backdrop of the mighty **Caucasus Mountains**.
Savor delicious Georgian cuisine, from **khinkali (dumplings)** and **khachapuri (cheese-filled bread)** to flavorful meat dishes and aromatic local wines.

We’ll help you craft a seamless and magical **Georgia vacation**, where every moment is a journey through history, adventure, and warm **Georgian hospitality**!`
    },
    {
      name: "Dubai",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      destinations: `Travel to Dubai 🌆🏝️🛥️
Experience the glamour and adventure of Dubai, a city where ultra-modern skyscrapers, golden deserts, and luxurious experiences come together for an unforgettable vacation. Whether you seek thrill, relaxation, or cultural exploration, Dubai offers something for everyone.

Marvel at the breathtaking Burj Khalifa, the world’s tallest building, and enjoy panoramic views of the city from its sky-high observation deck.
Shop till you drop at the Dubai Mall, home to world-class brands, an indoor ice rink, the Dubai Aquarium, and endless entertainment options.
Relax on the pristine beaches of JBR, Kite Beach, and La Mer, with crystal-clear waters and lively beachside cafes.
Embark on an exhilarating desert safari, featuring dune bashing, camel rides, sandboarding, and a traditional Bedouin-style dinner under the stars.
Visit the iconic Palm Jumeirah, an artificial island home to luxurious resorts, including the world-famous Atlantis, The Palm.
Experience the charm of Old Dubai, where you can explore the Dubai Creek, Gold Souk, and Spice Souk, taking in the city's rich history and traditional markets.
Enjoy thrilling adventures, from skydiving over Palm Jumeirah and indoor skiing at Ski Dubai to heart-pounding roller coasters at IMG Worlds of Adventure.
Savor a mix of global cuisines and traditional Emirati flavors, from fine dining in Michelin-starred restaurants to enjoying authentic Arabic kebabs, shawarma, and sweet kunafa.
Witness the mesmerizing Dubai Fountain Show, where water dances to music in a spectacular display at the base of Burj Khalifa.
We’ll help you plan a seamless and luxurious Dubai vacation, offering the perfect blend of adventure, shopping, culture, and relaxation.🏝️🌆`
    },
    {
      name: "France",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      destinations: `Travel to France 🇫🇷 🏰🍷
Embark on a magical journey to France, a country where romantic cities, stunning landscapes, and world-class cuisine create an unforgettable vacation experience. Whether you seek history, culture, adventure, or relaxation, France offers a perfect mix of art, fashion, gastronomy, and breathtaking scenery.

Explore the charm of Paris, the "City of Love," where you can visit iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.
Stroll along the Champs-Élysées, shop at high-end boutiques, and admire the grandeur of the Arc de Triomphe.
Cruise along the Seine River, taking in the breathtaking views of Paris’s illuminated skyline and historical bridges.
Visit the fairy-tale castles of the Loire Valley, including Château de Chambord and Château de Chenonceau, where history and elegance come to life.
Experience the magic of the French Riviera, where glamorous destinations like Nice, Cannes, and Saint-Tropez offer sun-kissed beaches, luxury resorts, and vibrant nightlife.
Indulge in world-renowned French cuisine, from fresh croissants and escargots to gourmet cheeses, crème brûlée, and fine dining in Michelin-starred restaurants.
Discover the vineyards of Bordeaux, Burgundy, and Champagne, where you can savor some of the finest wines in the world.
Take a scenic drive through Provence, with its lavender fields, historic villages, and picturesque countryside.
Ski in the French Alps, with world-class resorts like Chamonix and Courchevel offering thrilling slopes and breathtaking mountain views.
Explore the medieval charm of Mont Saint-Michel, a stunning abbey perched on a rocky island, surrounded by mesmerizing tides.
We’ll help you plan a seamless and enchanting France vacation, offering the perfect blend of romance, adventure, gastronomy, and timeless beauty. 🇫🇷✨🍷🥐🍷`
    },{
      name: "Italy",
      image: "https://cdn.pixabay.com/photo/2018/05/10/23/04/giglio-3389078_1280.jpg",
      destinations: `Travel to Italy 🇮🇹🏛️🍝
Discover the timeless beauty of Italy, where ancient history, breathtaking landscapes, and world-renowned cuisine come together for an unforgettable vacation. Whether you seek romantic escapes, cultural experiences, or seaside relaxation, Italy offers a perfect mix of art, architecture, food, and adventure.

Explore the wonders of Rome, where history comes alive at the Colosseum, Vatican City, Trevi Fountain, and Pantheon.
Wander through the romantic canals of Venice, taking a gondola ride under the iconic Rialto Bridge and exploring the charm of St. Mark’s Square.
Admire the Renaissance masterpieces in Florence, where you can visit the Uffizi Gallery, Michelangelo’s David, and the breathtaking Duomo.
Experience the magic of the Amalfi Coast, where picturesque towns like Positano, Ravello, and Sorrento offer stunning cliffside views, turquoise waters, and charming streets.
Indulge in Italy’s world-famous cuisine, from authentic pizza in Naples and fresh pasta in Rome to rich gelato, risotto, and tiramisu.
Visit the leaning wonder of Pisa, where the Leaning Tower of Pisa stands as an architectural marvel perfect for unforgettable photos.
Sip wine in the rolling hills of Tuscany, where medieval towns and vineyards produce some of the world’s finest wines, including Chianti and Brunello di Montalcino.
Relax on the stunning beaches of Sicily and Sardinia, where golden sands and crystal-clear waters offer the perfect Mediterranean escape.
Explore the ancient ruins of Pompeii, a city frozen in time by the eruption of Mount Vesuvius, offering a glimpse into Roman life.
Ski in the Italian Alps, with breathtaking slopes in Cortina d’Ampezzo and the Dolomites, ideal for winter sports enthusiasts.
We’ll help you plan a seamless and magical Italy vacation, offering the perfect blend of history, art, romance, and culinary delights. 🇮🇹✨🍷`
    },{
      name: " Switzerland",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      destinations: `Travel to Switzerland 🇨🇭🏔️❄️
Experience the breathtaking beauty of Switzerland, where snow-capped mountains, pristine lakes, and charming cities create an unforgettable vacation. Whether you seek adventure, relaxation, or cultural exploration, Switzerland offers a perfect mix of nature, luxury, and rich heritage.

Marvel at the Swiss Alps, where world-famous destinations like Zermatt, Jungfraujoch, and Matterhorn offer stunning landscapes, thrilling ski slopes, and scenic hikes.
Explore the picturesque city of Lucerne, with its charming Old Town, Chapel Bridge, and breathtaking views of Lake Lucerne.
Take a scenic train ride on the Glacier Express or Bernina Express, offering panoramic views of Switzerland’s majestic mountains and valleys.
Wander through the cosmopolitan city of Zurich, where luxury shopping, historic architecture, and vibrant nightlife come together.
Visit the fairytale-like town of Interlaken, a paradise for adventure seekers, offering activities like paragliding, skydiving, and canyoning.
Experience the charm of Geneva, home to the United Nations headquarters, Jet d'Eau fountain, and the stunning shores of Lake Geneva.
Ski in world-class resorts like St. Moritz and Verbier, where powdery slopes, après-ski culture, and luxury chalets make for the perfect winter escape.
Discover the medieval beauty of Montreux and Château de Chillon, where a stunning lakeside castle offers a glimpse into Switzerland’s rich past.
Indulge in Swiss delicacies, from rich chocolates and creamy cheese fondue to delicious rosti and raclette.
Cruise on the pristine Swiss lakes, including Lake Geneva, Lake Zurich, and Lake Thun, surrounded by breathtaking alpine scenery.
We’ll help you plan a seamless and magical Switzerland vacation, offering the perfect blend of adventure, luxury, and natural beauty. 🇨🇭❄️🏔️✨`
    }
  ];

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
    <div className="pt-16">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Explore Our Destinations</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover amazing places around the world with our curated travel experiences
          </p>
        </div>
      </section>

      {/* Continents 
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">International Spots</h2>
          
          <div className="space-y-16">
            {continents.map((continent, index) => (
              <div key={index}>
                <div className="flex items-center mb-8">
                  <h3 className="text-2xl font-bold">{continent.name}</h3>
                  <div className="ml-4 flex-grow h-px bg-gray-200 dark:bg-gray-800"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-2">
                    <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden">
                      <Image
                        src={continent.image}
                        alt={continent.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <p >
                     {continent.destinations}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>  */}

<section className="py-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center">
      
      {/* Indian Spot */}
      <div>
        <img
       src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Indian Spot"
          className="rounded-lg w-full h-auto object-cover mb-4"
        />
        <Link
          href="/indianSpot"
          className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition"
        >
          Indian Spots <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      {/* International Spot */}
      <div>
        <img
            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="International Spot"
          className="rounded-lg w-full h-auto object-cover mb-4"
        />
        <Link
          href="/internationalSpots"
          className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-secondary/90 transition"
        >
          International Spots <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* Featured Destinations 
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
      </section>*/}
    </div> 
  );
}