"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  destination: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      destination: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      toast.success("Your message has been sent successfully! We'll get back to you soon.");
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our travel experts to plan your next adventure
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="destination"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interested Destination (Optional)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a destination" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="europe">Europe</SelectItem>
                            <SelectItem value="asia">Asia</SelectItem>
                            <SelectItem value="north-america">North America</SelectItem>
                            <SelectItem value="south-america">South America</SelectItem>
                            <SelectItem value="africa">Africa</SelectItem>
                            <SelectItem value="oceania">Oceania</SelectItem>
                            <SelectItem value="antarctica">Antarctica</SelectItem>
                            <SelectItem value="multiple">Multiple Destinations</SelectItem>
                            <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your travel plans, questions, or special requests..." 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Our Office</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                    Shop No 106, First Floor, SLN Heights<br />
                     Above Apollo Pharmacy, Tulasi Nagar, Aditya Nagar<br />
                     Kukatpally, Hyderabad, Telangana 5000072
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Nexus@Airtravel.com<br />
                      bookings@nexustravel.com<br />
                      support@nexustravels.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      General: +91 9110740189<br />
                      Bookings: +1 (555) 765-4321<br />
                      Support: +1 (555) 987-6543
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      24/7
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Emergency Support: 24/7
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {["Facebook", "Twitter", "Instagram", "LinkedIn", "YouTube"].map((platform) => (
                    <a 
                      key={platform} 
                      href="#" 
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-primary hover:text-white transition-colors"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How far in advance should I book my trip?",
                answer: "We recommend booking at least 3-6 months in advance for popular destinations, especially during peak season. For special events or holidays, 6-12 months is advisable."
              },
              {
                question: "Do you offer travel insurance?",
                answer: "Yes, we offer comprehensive travel insurance packages that cover trip cancellation, medical emergencies, lost luggage, and more. We strongly recommend purchasing insurance for all international trips."
              },
              {
                question: "Can you accommodate special dietary requirements?",
                answer: "Absolutely! We can arrange for special meal requirements (vegetarian, vegan, gluten-free, etc.) for all included meals. Just let us know your needs when booking."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, bank transfers, and PayPal. For certain destinations, we offer payment plans with a deposit followed by installments."
              },
              {
                question: "What is your cancellation policy?",
                answer: "Our standard policy allows full refunds for cancellations made 60+ days before departure, 50% refund for 30-59 days, and no refund for less than 30 days. Travel insurance can cover cancellations due to unexpected circumstances."
              },
              {
                question: "Do I need a visa for my destination?",
                answer: "Visa requirements vary by destination and your nationality. While we can provide general guidance, it's ultimately the traveler's responsibility to ensure they have proper documentation."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}