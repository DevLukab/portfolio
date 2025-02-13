const services = [
    { id: '01', title: 'Web Development', description: 'I develop modern, fast, and optimized websites tailored to your needs and ready to stand out in the digital world.' },
    { id: '02', title: 'Mobile Development', description: 'I build mobile and desktop applications optimized for performance and user experience.' },
    { id: '03', title: 'Cross-Platform App Development', description: 'Developing high-quality apps that run smoothly with a seamless user experience and a single codebase.' },
    { id: '04', title: 'Frontend Development', description: 'Developing dynamic and interactive web interfaces using modern technologies.' },
    { id: '05', title: 'Backend Development', description: 'Building robust and efficient backend systems with scalable APIs.' },
    { id: '06', title: 'Database Management', description: 'Designing, optimizing, and maintaining databases for efficient storage, retrieval, and security.' },
]

export const Services = () => {
    
    return (
        <section id="services" className="text-white py-20 px-4">
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
                    <h2 className="text-6xl text-purple-300 font-extrabold sticky top-20">SERVICES</h2>
                </div>
                <div className="md:w-3/4">
                {services.map(service => (
                    <div key={service.id} className="mb-16 flex items-start">
                        <div className="text-purple-300 font-bold text-5xl mr-6">{service.id}</div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}