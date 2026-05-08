// Don't forget to import your actual images at the top!
// import websiteImg from './assets/website-design.jpg';
import websiteImg from '../../assets/WebServicesPage/website-design.jpg';
import mobileImg from '../../assets/WebServicesPage/mobile-app.jpg';
import softwareImg from '../../assets/WebServicesPage/software-dev.jpg';
import erpImg from '../../assets/WebServicesPage/erp-crm.jpg';
import digitalImg from '../../assets/WebServicesPage/digital-marketing.jpg';
import seoImg from '../../assets/WebServicesPage/seo.jpg';

 const webServicesGridData = {
  items: [
    {
      image: websiteImg,
      title: "Personal Website Design",
      description: "The personal website which we create is an art of our expert team who make sure that the nature of business for what we are creating the website is completely compatible to what the owner & customer is looking for.",
      linkText: "Read More",
      linkUrl: "personal-website-design"
    },
    {
      image: mobileImg,
      title: "Mobile App Development",
      description: "From conceptualization to release to care & feeding, we partner with you to build apps that trend, become a web sensation and live for time everlasting. Portable apps are flooding the market today.",
      linkText: "Read More",
      linkUrl: "mobile-app-development"
    },
    {
      image: softwareImg,
      title: "Software Development",
      description: "We specialize in highly customized website application development services that include a variety of technology and tools to achieve the desired results and business propositions.",
      linkText: "Read More",
      linkUrl: "software-development"
    },
    {
      image: erpImg,
      title: "ERP & CRM",
      description: "Enterprise resource planning (ERP) is a process used by companies to manage and integrate the important parts of their businesses.",
      linkText: "Read More",
      linkUrl: "erp-crm"
    },
    {
      image: digitalImg,
      title: "Digital Marketing",
      description: "It enables you to carry out campaigns for your products and services. It gives a platform to small and medium enterprises the chance to compete against large enterprises.",
      linkText: "Read More",
      linkUrl: "digital-marketing"
    },
    {
      image: seoImg,
      title: "Search Engine Optimization",
      description: "SEO stands for search engine optimization. It is the way toward getting movement from the \"free,\" \"natural,\" \"publication\" or \"common\" indexed lists on web crawlers. It is cost effective.",
      linkText: "Read More",
      linkUrl: "search-engine-optimization"
    }
  ]
};


const WebServices = ( ) => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webServicesGridData.items.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-300 md:hover:-translate-y-2 md:hover:shadow-xl flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="h-56 w-full overflow-hidden bg-slate-200">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 md:hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Read More Link */}
                <div className="text-center mt-auto pt-4 border-t border-slate-100">
                  <a 
                    href={service.linkUrl}
                    className="inline-block text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors"
                  >
                    {service.linkText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WebServices;