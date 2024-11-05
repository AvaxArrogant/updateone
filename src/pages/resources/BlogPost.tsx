import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';

// Blog post data
const blogPosts = {
  'ai-digital-marketing-2024': {
    title: 'The Future of AI in Digital Marketing: 2024 Trends',
    author: 'Sarah Johnson',
    date: '2024-02-15',
    readTime: '8 min read',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    content: [
      {
        type: 'paragraph',
        content: 'As we venture deeper into 2024, artificial intelligence continues to revolutionize the digital marketing landscape. From personalized customer experiences to automated campaign optimization, AI is reshaping how businesses connect with their audiences.'
      },
      {
        type: 'heading',
        content: 'Key AI Trends in Digital Marketing'
      },
      {
        type: 'list',
        items: [
          'Hyper-Personalization at Scale',
          'AI-Powered Content Generation',
          'Predictive Analytics and Customer Behavior',
          'Automated Campaign Optimization'
        ]
      },
      {
        type: 'paragraph',
        content: 'Hyper-personalization is becoming the new standard in digital marketing. AI algorithms analyze vast amounts of customer data to deliver highly targeted content and recommendations, resulting in improved engagement rates and customer satisfaction.'
      },
      {
        type: 'heading',
        content: 'AI-Powered Content Creation'
      },
      {
        type: 'paragraph',
        content: 'AI tools are revolutionizing content creation, helping marketers generate ideas, optimize headlines, and even draft initial content. However, human creativity and oversight remain crucial for maintaining brand voice and ensuring quality.'
      },
      {
        type: 'quote',
        content: "AI isn't replacing marketers; it's empowering them to work smarter and achieve better results."
      }
    ]
  },
  'local-seo-strategies': {
    title: 'Local SEO Strategies That Drive Results',
    author: 'Michael Chen',
    date: '2024-02-10',
    readTime: '6 min read',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80',
    content: [
      {
        type: 'paragraph',
        content: 'Local SEO has become increasingly important for businesses looking to attract nearby customers. With the rise of "near me" searches and mobile-first indexing, optimizing for local search is no longer optional.'
      },
      {
        type: 'heading',
        content: 'Essential Local SEO Tactics'
      },
      {
        type: 'list',
        items: [
          'Google Business Profile Optimization',
          'Local Keyword Research and Implementation',
          'Citation Building and Management',
          'Local Link Building Strategies'
        ]
      }
    ]
  },
  'social-media-2024': {
    title: 'Social Media Marketing in 2024: Best Practices',
    author: 'Emma Davis',
    date: '2024-02-05',
    readTime: '7 min read',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
    content: [
      {
        type: 'paragraph',
        content: 'Social media continues to evolve rapidly, with new platforms emerging and existing ones introducing innovative features. Understanding these changes is crucial for maintaining an effective social media strategy.'
      },
      {
        type: 'heading',
        content: 'Emerging Social Media Trends'
      },
      {
        type: 'list',
        items: [
          'Short-Form Video Dominance',
          'Social Commerce Integration',
          'AI-Powered Social Listening',
          'Authentic Brand Storytelling'
        ]
      }
    ]
  }
};

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPosts[id as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h1>
          <Link to="/resources/blog" className="text-primary-600 hover:text-primary-700">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-4 text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {post.title}
            </motion.h1>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {post.category}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link
          to="/resources/blog"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="prose prose-lg max-w-none">
          {post.content.map((section, index) => {
            switch (section.type) {
              case 'paragraph':
                return <p key={index}>{section.content}</p>;
              case 'heading':
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{section.content}</h2>;
              case 'list':
                return (
                  <ul key={index} className="list-disc pl-6 my-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="mb-2">{item}</li>
                    ))}
                  </ul>
                );
              case 'quote':
                return (
                  <blockquote key={index} className="border-l-4 border-primary-600 pl-4 italic my-6">
                    {section.content}
                  </blockquote>
                );
              default:
                return null;
            }
          })}
        </article>
      </div>
    </div>
  );
};

export default BlogPost;