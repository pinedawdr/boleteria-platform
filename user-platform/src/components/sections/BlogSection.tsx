"use client";

// user-platform/src/components/sections/BlogSection.tsx
import Card, { CardImage, CardContent } from '../ui/Card';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';

const blogPosts = [
  {
    id: 1,
    title: 'Los 5 conciertos más esperados en Perú para este 2023',
    excerpt: 'Una recopilación de los eventos musicales que no te puedes perder este año en el país...',
    image: '/images/blog-1.jpg',
    date: '15 de enero de 2023',
    author: 'María Rodríguez',
  },
  {
    id: 2,
    title: 'Guía completa para viajar a Cusco en bus VIP',
    excerpt: 'Descubre cómo hacer más cómodo y placentero tu viaje a la ciudad imperial...',
    image: '/images/blog-2.jpg',
    date: '28 de enero de 2023',
    author: 'Carlos Mendoza',
  },
  {
    id: 3,
    title: 'La revitalización del teatro peruano post-pandemia',
    excerpt: 'Analizamos el resurgimiento de las artes escénicas en el país tras los años de restricciones...',
    image: '/images/blog-3.jpg',
    date: '10 de febrero de 2023',
    author: 'Laura Torres',
  },
];

const BlogSection = () => {
  const router = useRouter();
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-montserrat font-bold">
            Nuestro Blog
          </h2>
          <Button
            variant="outline"
            onClick={() => router.push('/blog')}
          >
            Ver Todos
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id}
              hoverable
              onClick={() => router.push(`/blog/${post.id}`)}
              className="group"
            >
              <CardImage 
                src={post.image} 
                alt={post.title} 
                className="h-48"
              />
              <CardContent>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <span className="text-primary font-medium text-sm inline-flex items-center group-hover:underline">
                  Leer más
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;