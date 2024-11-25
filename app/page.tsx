import { Scissors } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Gallery } from '@/components/gallery';
import { Philosophy } from '@/components/philosophy';
import { Testimonials } from '@/components/testimonials';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80"
            alt="Luxury salon interior"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-up">
          <Scissors className="mx-auto mb-8 text-gold-400 h-16 w-16" />
          <h1 className="heading-xl mb-6">
            Tableau de <span className="gold-gradient">Katia</span>
          </h1>
          <p className="body-text max-w-xl mx-auto mb-8 text-gray-300">
            Where luxury meets artistry in hair design
          </p>
          <Button
            size="lg"
            className="bg-gold-500 hover:bg-gold-600 text-black font-montserrat"
          >
            Book Now
          </Button>
        </div>
      </section>

      <Gallery />
      <Philosophy />
      <Testimonials />
      <Footer />
    </main>
  );
}