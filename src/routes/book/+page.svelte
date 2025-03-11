<svelte:head>
    <title>Book a Consultation | Ryan Clark - Fullstack Developer</title>
    <meta name="description" content="Schedule a consultation with Ryan Clark, a fullstack developer specializing in modern web applications, responsive design, and performance optimization." />
    <meta name="keywords" content="fullstack developer, consultation, book developer, web development, Ryan Clark, hire developer" />
    <meta property="og:title" content="Book a Consultation | Ryan Clark - Fullstack Developer" />
    <meta property="og:description" content="Ready to discuss your project? Schedule a consultation with Ryan Clark, a fullstack developer with expertise in modern web technologies." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://ryan-clark-fullstack.dev/book" />
    <meta property="og:image" content="https://ryan-clark-fullstack.dev/images/consultation-preview.jpg" />
    <link rel="canonical" href="https://ryan-clark-fullstack.dev/book" />
</svelte:head>

<section class="container mx-auto px-4 py-12">
    <h1 class="text-3xl md:text-4xl font-bold text-amber-500 mb-4">Book a Consultation</h1>
    
    <p class="text-xl mb-8 max-w-3xl">
        Let's discuss how I can help bring your project to life with modern web technology and design.
    </p>
    
    <div class="bg-slate-800 rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
        <h2 class="text-2xl font-semibold mb-4 text-amber-400">Schedule Your Free Consultation</h2>
        
        <p class="mb-6 text-lg">
            Ready to discuss your project? Complete the form below to schedule a no-obligation consultation.
        </p>
        
        <!-- Booking form with semantic markup -->
        <form class="space-y-6" aria-labelledby="booking-form-title">
            <div>
                <label for="name" class="block text-sm font-medium mb-1">Full Name <span class="text-amber-500">*</span></label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    aria-required="true"
                    placeholder="Your name" 
                    class="w-full bg-slate-700 rounded-md px-4 py-2 border border-slate-600 focus:border-amber-500 focus:outline-none" 
                />
            </div>
            
            <div>
                <label for="email" class="block text-sm font-medium mb-1">Email Address <span class="text-amber-500">*</span></label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    aria-required="true"
                    placeholder="your.email@example.com" 
                    class="w-full bg-slate-700 rounded-md px-4 py-2 border border-slate-600 focus:border-amber-500 focus:outline-none" 
                />
            </div>

            <div>
                <label for="project-type" class="block text-sm font-medium mb-1">Project Type</label>
                <select id="project-type" name="project-type" class="w-full bg-slate-700 rounded-md px-4 py-2 border border-slate-600 focus:border-amber-500 focus:outline-none">
                    <option value="">Select project type</option>
                    <option value="website">Website Development</option>
                    <option value="webapp">Web Application</option>
                    <option value="ecommerce">E-commerce Solution</option>
                    <option value="mobile">Mobile App</option>
                    <option value="other">Other</option>
                </select>
            </div>
            
            <div>
                <label for="message" class="block text-sm font-medium mb-1">Project Details <span class="text-amber-500">*</span></label>
                <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    required 
                    aria-required="true"
                    placeholder="Please describe your project and requirements" 
                    class="w-full bg-slate-700 rounded-md px-4 py-2 border border-slate-600 focus:border-amber-500 focus:outline-none"
                ></textarea>
            </div>
            
            <div>
                <button 
                    type="submit" 
                    class="bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium py-2 px-6 rounded-md transition-all flex items-center"
                >
                    <span>Submit Request</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>
        </form>

        <div class="mt-8 pt-6 border-t border-slate-700">
            <h3 class="text-lg font-medium mb-2 text-amber-400">What to Expect</h3>
            <ul class="list-disc pl-5 space-y-2">
                <li>Free, no-obligation consultation</li>
                <li>Discussion of your project requirements</li>
                <li>Exploration of possible technical solutions</li>
                <li>Transparent timeline and cost estimates</li>
            </ul>
        </div>
    </div>
</section>
