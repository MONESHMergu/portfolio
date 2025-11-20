
const resumeData = {
    about: {
        name: "Monesh Mergu",
        title: "Computer Science Student & Full Stack Developer",
        description: "Confident and enthusiastic B.Tech student in Computer Science with hands-on experience in AI assistants, web development, app development and prompt engineering. Seeking opportunities to apply my skills in real-world projects and grow professionally. Passionate about creating innovative solutions using cutting-edge technologies.",
        skills: ["MERN Stack", "Python", "JavaScript", "Core Java", "PHP", "AI/ML", "Prompt Engineering"],
        email: "moneshmergu@gmail.com",
        phone: "+91 9699545020",
        location: "Solapur, Maharashtra"
    },
    experience: [
        {
            title: "AI & Web Development Projects",
            company: "Academic & Personal Projects",
            date: "2023 - Present",
            description: "Developed multiple innovative projects including zoro-AI assistant with advanced conversational capabilities, Fake Currency Detector using Python and image processing, Pharmacy Management System and Online Bakery Management System using HTML, CSS, Tailwind, JavaScript and PHP. Also built Internshala Clone and Growth tracking platform. Gained hands-on experience in full-stack development and AI technologies.",
            technologies: ["Python", "AI/ML", "HTML", "CSS", "Tailwind", "JavaScript", "PHP", "MERN Stack"]
        },
        {
            title: "Industrial Training Project",
            company: "Industry Training Program",
            date: "2024",
            description: "Single-handedly built a project that was selected as the 2nd best during industrial training. Demonstrated exceptional problem-solving skills and technical expertise in developing a comprehensive solution from scratch.",
            technologies: ["Web Development", "Problem Solving", "Project Management"]
        },
        {
            title: "General Secretary",
            company: "SPM Polytechnic College",
            date: "2024 - Present",
            description: "Appointed as General Secretary after a rigorous selection interview conducted by faculty members. Successfully managing college teams in both academics and extracurricular activities. Coordinating team efforts, facilitating event management, and leading multiple events as organizer and mentor.",
            technologies: ["Leadership", "Team Management", "Event Planning", "Communication"]
        },
        {
            title: "Team Leader & Event Coordinator",
            company: "School & College Activities",
            date: "2020 - Present",
            description: "Led and managed school and college teams across various academic and extracurricular activities. Coordinated team efforts, facilitated event management, and represented college at prestigious events like Kirloskar Vasundhara 2025.",
            technologies: ["Leadership", "Communication", "Team Coordination", "Event Management"]
        }
    ],
    projects: [
        {
            title: "zoro-AI",
            description: "Developed an intelligent AI assistant with advanced conversational capabilities and task management. Features natural language processing, voice recognition, and automated task execution for enhanced productivity.",
            tags: ["Python", "AI/ML", "NLP", "Voice Recognition", "Task Automation"],
            link: "https://github.com/MONESHMergu/zoro-AI",
            featured: true
        },
        {
            title: "mock-e-commerce",
            description: "Full-stack e-commerce platform with MongoDB persistence, Fake Store API integration, shopping cart, checkout system, and order history. Features responsive design with React, Vite, Tailwind CSS, and Express backend.",
            tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
            link: "https://github.com/MONESHMergu/mock-e-comerce",
            featured: true
        },
        {
            title: "fakecurrencydetector",
            description: "Created a Python-based application capable of detecting counterfeit currency using advanced image processing techniques. Utilizes computer vision and machine learning to analyze currency authenticity with high accuracy.",
            tags: ["Python", "Image Processing", "Computer Vision", "ML", "OpenCV"],
            link: "https://github.com/MONESHMergu/fakecurrencydetector",
            featured: true
        },
        {
            title: "pharmacy-management-sys",
            description: "Comprehensive pharmacy management system for handling inventory, prescriptions, and sales. Built with robust backend architecture and user-friendly interface for efficient pharmacy operations.",
            tags: ["HTML", "CSS", "Tailwind", "JavaScript", "PHP"],
            link: "https://github.com/MONESHMergu/pharmacy-management-sys",
            featured: true
        },
        {
            title: "online-beakery-management-sys",
            description: "Online bakery management system with order processing, inventory tracking, and customer management. Features real-time updates and seamless user experience for bakery business operations.",
            tags: ["HTML", "CSS", "Tailwind", "JavaScript", "PHP"],
            link: "https://github.com/MONESHMergu/online-beakery-management-sys",
            featured: false
        },
        {
            title: "grow",
            description: "Innovative growth tracking and management platform. Implements modern web technologies to deliver scalable and efficient solutions for business and personal development tracking.",
            tags: ["JavaScript", "Web Development", "Full Stack"],
            link: "https://github.com/MONESHMergu/grow",
            featured: false
        },
        {
            title: "internshala-clone",
            description: "Full-featured clone of Internshala platform with job listings, application management, and user authentication. Demonstrates proficiency in building complex web applications with modern frameworks.",
            tags: ["MERN Stack", "JavaScript", "Clone Project", "Web App"],
            link: "https://github.com/MONESHMergu/internshala-clone",
            featured: false
        },
        {
            title: "portfolio",
            description: "This stunning portfolio website featuring Three.js particle effects, smooth animations, and responsive design. Built to showcase projects and skills in an engaging 3D environment with modern web technologies.",
            tags: ["Three.js", "GSAP", "JavaScript", "CSS3", "WebGL"],
            link: "https://github.com/MONESHMergu/portfolio",
            featured: false
        }
    ],
    achievements: [
        {
            icon: "🏸",
            title: "State-Level Badminton Player",
            description: "Represented state in badminton competitions, demonstrating athletic excellence and competitive spirit.",
            category: "Sports"
        },
        {
            icon: "🏆",
            title: "2nd Best Industrial Training Project",
            description: "Single-handedly built a project selected as the 2nd best during industrial training, showcasing exceptional technical skills.",
            category: "Academic"
        },
        {
            icon: "📜",
            title: "Poetry Competition - 2nd Rank",
            description: "Secured 2nd rank in district-level poetry competition (DYF), demonstrating creative writing abilities.",
            category: "Cultural"
        },
        {
            icon: "🎤",
            title: "National Paper Presentation - 3rd Prize",
            description: "Won 3rd prize in a national-level paper presentation, showcasing research and presentation skills.",
            category: "Academic"
        },
        {
            icon: "🗣️",
            title: "Elocution Competition - 2nd Position",
            description: "Secured 2nd position in elocution competition conducted by college, demonstrating public speaking excellence.",
            category: "Communication"
        },
        {
            icon: "🌱",
            title: "Kirloskar Vasundhara Event 2025",
            description: "Represented college at the prestigious Kirloskar Vasundhara event, showcasing leadership and college representation.",
            category: "Leadership"
        }
    ]
};

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Hero scroll and mouse effects
    setupHeroEffects();
    
    // Basic Three.js setup
    const scene = new THREE.Scene();
    // Deep navy blue background
    scene.background = new THREE.Color(0x0a192f);
    scene.fog = new THREE.FogExp2(0x112240, 0.015);
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    document.body.appendChild(renderer.domElement);
    
    // Simple camera rotation variables
    let cameraRotationX = 0;
    let cameraRotationY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    
    // Add mouse move event for camera control
    document.addEventListener('mousemove', (event) => {
        targetRotationX = (event.clientX / window.innerWidth - 0.5) * Math.PI * 0.5;
        targetRotationY = (event.clientY / window.innerHeight - 0.5) * Math.PI * 0.5;
    });
    
    // Create realistic ocean environment
    
    // Function to create perfectly circular texture for all particles
    function createCircleTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        
        // Create radial gradient for perfect circle
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
        
        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;
        return texture;
    }
    
    // Function to create shiny bubble texture with highlight
    function createShinyBubbleTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        
        // Main bubble gradient
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.4, 'rgba(200, 240, 255, 0.9)');
        gradient.addColorStop(0.7, 'rgba(150, 220, 255, 0.5)');
        gradient.addColorStop(0.9, 'rgba(100, 200, 255, 0.2)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
        
        // Add bright highlight spot (top-left)
        const highlight = ctx.createRadialGradient(20, 20, 0, 20, 20, 12);
        highlight.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        highlight.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
        highlight.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = highlight;
        ctx.beginPath();
        ctx.arc(20, 20, 12, 0, Math.PI * 2);
        ctx.fill();
        
        // Add secondary shine (bottom-right edge)
        const shine = ctx.createRadialGradient(44, 44, 0, 44, 44, 8);
        shine.addColorStop(0, 'rgba(200, 240, 255, 0.6)');
        shine.addColorStop(1, 'rgba(200, 240, 255, 0)');
        
        ctx.fillStyle = shine;
        ctx.beginPath();
        ctx.arc(44, 44, 8, 0, Math.PI * 2);
        ctx.fill();
        
        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;
        return texture;
    }
    
    const circleTexture = createCircleTexture();
    const shinyBubbleTexture = createShinyBubbleTexture();
    
    // Layer 1: Caustic light patterns (sunlight through water) - reduced for cleaner look
    const causticGeometry = new THREE.BufferGeometry();
    const causticCount = 400;
    const causticPositions = new Float32Array(causticCount * 3);
    const causticSizes = new Float32Array(causticCount);
    const causticColors = new Float32Array(causticCount * 3);
    
    for (let i = 0; i < causticCount; i++) {
        causticPositions[i * 3] = (Math.random() - 0.5) * 140;
        causticPositions[i * 3 + 1] = Math.random() * 90 - 15;
        causticPositions[i * 3 + 2] = (Math.random() - 0.5) * 100;
        
        causticSizes[i] = Math.random() * 0.6 + 0.2;
        
        // Light cyan/teal caustic colors
        causticColors[i * 3] = 0.4 + Math.random() * 0.2;
        causticColors[i * 3 + 1] = 0.85 + Math.random() * 0.15;
        causticColors[i * 3 + 2] = 0.95 + Math.random() * 0.05;
    }
    
    causticGeometry.setAttribute('position', new THREE.BufferAttribute(causticPositions, 3));
    causticGeometry.setAttribute('size', new THREE.BufferAttribute(causticSizes, 1));
    causticGeometry.setAttribute('color', new THREE.BufferAttribute(causticColors, 3));
    
    const causticMaterial = new THREE.PointsMaterial({
        size: 0.6,
        vertexColors: true,
        transparent: true,
        opacity: 0.3,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
        map: circleTexture
    });
    
    const caustics = new THREE.Points(causticGeometry, causticMaterial);
    scene.add(caustics);
    
    // Layer 2: Bubbles rising from ocean floor - perfectly circular
    const bubbleGeometry = new THREE.BufferGeometry();
    const bubbleCount = 800;
    const bubblePositions = new Float32Array(bubbleCount * 3);
    const bubbleSizes = new Float32Array(bubbleCount);
    const bubbleVelocities = [];
    
    for (let i = 0; i < bubbleCount; i++) {
        bubblePositions[i * 3] = (Math.random() - 0.5) * 100;
        bubblePositions[i * 3 + 1] = Math.random() * 80 - 40;
        bubblePositions[i * 3 + 2] = (Math.random() - 0.5) * 80;
        
        bubbleSizes[i] = Math.random() * 0.5 + 0.2;
        
        bubbleVelocities.push({
            speed: Math.random() * 0.06 + 0.03,
            wobble: Math.random() * 0.015
        });
    }
    
    bubbleGeometry.setAttribute('position', new THREE.BufferAttribute(bubblePositions, 3));
    bubbleGeometry.setAttribute('size', new THREE.BufferAttribute(bubbleSizes, 1));
    
    const bubbleMaterial = new THREE.PointsMaterial({
        size: 0.5,
        color: 0xffffff,
        transparent: true,
        opacity: 0.85,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
        map: shinyBubbleTexture,
        depthWrite: false
    });
    
    const bubbles = new THREE.Points(bubbleGeometry, bubbleMaterial);
    scene.add(bubbles);
    
    // Layer 6: Fish-like particles with schooling behavior (reduced for cleaner look)
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 600;
    const positionArray = new Float32Array(particleCount * 3);
    const particleSizes = new Float32Array(particleCount);
    const particleColors = new Float32Array(particleCount * 3);
    const particleVelocities = [];
    
    for (let i = 0; i < particleCount; i++) {
        positionArray[i * 3] = (Math.random() - 0.5) * 100;
        positionArray[i * 3 + 1] = (Math.random() - 0.5) * 70;
        positionArray[i * 3 + 2] = (Math.random() - 0.5) * 100;
        
        particleSizes[i] = Math.random() * 0.18 + 0.08;
        
        // Ocean blue/cyan colors for particles
        const brightness = 0.4 + Math.random() * 0.3;
        particleColors[i * 3] = brightness * 0.3;
        particleColors[i * 3 + 1] = brightness * 0.9;
        particleColors[i * 3 + 2] = brightness * 1.0;
        
        particleVelocities.push({
            x: (Math.random() - 0.5) * 0.015,
            y: (Math.random() - 0.5) * 0.008,
            z: (Math.random() - 0.5) * 0.015
        });
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
        size: 0.2,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        sizeAttenuation: true,
        map: circleTexture
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    
    // Layer 4: Ocean water surface (animated waves)
    const waterGeometry = new THREE.PlaneGeometry(200, 200, 80, 80);
    const waterMaterial = new THREE.MeshBasicMaterial({
        color: 0x0088cc,
        transparent: true,
        opacity: 0.15,
        wireframe: true,
        side: THREE.DoubleSide
    });
    
    const waterSurface = new THREE.Mesh(waterGeometry, waterMaterial);
    waterSurface.rotation.x = -Math.PI / 2;
    waterSurface.position.y = 15;
    scene.add(waterSurface);
    
    // Ocean floor
    const floorGeometry = new THREE.PlaneGeometry(200, 200, 60, 60);
    const floorMaterial = new THREE.MeshBasicMaterial({
        color: 0x112240,
        transparent: true,
        opacity: 0.2,
        wireframe: true,
        side: THREE.DoubleSide
    });
    
    const oceanFloor = new THREE.Mesh(floorGeometry, floorMaterial);
    oceanFloor.rotation.x = -Math.PI / 2;
    oceanFloor.position.y = -15;
    scene.add(oceanFloor);
    
    // Mouse position for particle attraction
    const mouse = new THREE.Vector2(0, 0);
    document.addEventListener('mousemove', (event) => {
        // Convert mouse position to normalized device coordinates (-1 to +1)
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });
    
    // No 3D objects - removed as requested
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        const time = Date.now() * 0.001;
        
        // Animate caustic light patterns (sun rays through water)
        const causticPos = causticGeometry.attributes.position.array;
        for (let i = 0; i < causticCount; i++) {
            const idx = i * 3;
            causticPos[idx] += Math.sin(time * 0.3 + i * 0.1) * 0.02;
            causticPos[idx + 1] += Math.cos(time * 0.2 + i * 0.15) * 0.015;
        }
        causticGeometry.attributes.position.needsUpdate = true;
        caustics.rotation.z += 0.0003;
        
        // Animate bubbles rising with wobble
        const bubblePos = bubbleGeometry.attributes.position.array;
        for (let i = 0; i < bubbleCount; i++) {
            const idx = i * 3;
            
            // Rise with wobble
            bubblePos[idx] += Math.sin(time * 2 + i) * bubbleVelocities[i].wobble;
            bubblePos[idx + 1] += bubbleVelocities[i].speed;
            bubblePos[idx + 2] += Math.cos(time * 2 + i) * bubbleVelocities[i].wobble;
            
            // Reset when reaching surface
            if (bubblePos[idx + 1] > 40) {
                bubblePos[idx + 1] = -40;
                bubblePos[idx] = (Math.random() - 0.5) * 100;
                bubblePos[idx + 2] = (Math.random() - 0.5) * 80;
            }
        }
        bubbleGeometry.attributes.position.needsUpdate = true;
        
        // Add pulsing shine effect to bubbles
        const pulseScale = 1 + Math.sin(time * 2) * 0.15;
        bubbleMaterial.size = 0.5 * pulseScale;
        bubbleMaterial.opacity = 0.75 + Math.sin(time * 3) * 0.1;
        
        // Animate water surface waves
        const waterPos = waterSurface.geometry.attributes.position;
        for (let i = 0; i < waterPos.count; i++) {
            const x = waterPos.getX(i);
            const y = waterPos.getY(i);
            
            const wave = Math.sin(x * 0.05 + time * 0.8) * Math.cos(y * 0.05 + time * 0.6) * 1.5
                       + Math.sin(x * 0.08 + time * 1.2) * 0.5;
            waterPos.setZ(i, wave);
        }
        waterPos.needsUpdate = true;
        
        // Animate ocean floor
        const floorPos = oceanFloor.geometry.attributes.position;
        for (let i = 0; i < floorPos.count; i++) {
            const x = floorPos.getX(i);
            const y = floorPos.getY(i);
            
            const wave = Math.sin(x * 0.03 + time * 0.3) * Math.cos(y * 0.03 + time * 0.2) * 0.8;
            floorPos.setZ(i, wave);
        }
        floorPos.needsUpdate = true;
        
        // Smooth camera rotation
        cameraRotationX += (targetRotationX - cameraRotationX) * 0.05;
        cameraRotationY += (targetRotationY - cameraRotationY) * 0.05;
        
        camera.position.x = Math.sin(cameraRotationX) * 5;
        camera.position.z = Math.cos(cameraRotationX) * 5;
        camera.position.y = Math.sin(cameraRotationY) * 2;
        camera.lookAt(scene.position);
        
        // Update fish-like particles with schooling behavior
        const positions = particleGeometry.attributes.position.array;
        const mouseX = mouse.x * 10;
        const mouseY = mouse.y * 10;
        
        for (let i = 0; i < particleCount; i++) {
            const ix = i * 3;
            const iy = i * 3 + 1;
            const iz = i * 3 + 2;
            
            // Ocean current
            const currentX = Math.sin(time * 0.15 + positions[iy] * 0.05) * 0.015;
            const currentZ = Math.cos(time * 0.15 + positions[ix] * 0.05) * 0.015;
            const currentY = Math.sin(time * 0.1 + i * 0.1) * 0.008;
            
            // Schooling behavior - move in groups
            positions[ix] += particleVelocities[i].x + currentX;
            positions[iy] += particleVelocities[i].y + currentY;
            positions[iz] += particleVelocities[i].z + currentZ;
            
            // Boundary check with smooth wrapping
            if (Math.abs(positions[ix]) > 50) positions[ix] *= -0.95;
            if (Math.abs(positions[iy]) > 40) positions[iy] *= -0.95;
            if (Math.abs(positions[iz]) > 50) positions[iz] *= -0.95;
        }
        
        particleGeometry.attributes.position.needsUpdate = true;
        
        renderer.render(scene, camera);
    }
    
    // Hide loading bar
    const loadingBarContainer = document.querySelector('.loading-bar-container');
    loadingBarContainer.style.opacity = '0';
    setTimeout(() => {
        loadingBarContainer.style.display = 'none';
    }, 1000);
    
    // Start animation loop
    animate();
    
    // Populate resume data
    populateResumeData();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Setup smooth navigation
    setupSmoothNavigation();
    
    // Setup contact form
    setupContactForm();
    
    // Setup scroll to top button
    setupScrollToTop();
});

// Setup hero scroll and mouse effects
function setupHeroEffects() {
    const hero = document.querySelector('.hero');
    const heroName = document.querySelector('.hero-name');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (!hero || !heroName || !heroSubtitle) return;
    
    // Parallax scroll effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;
        
        if (scrolled < heroHeight) {
            const opacity = 1 - (scrolled / heroHeight);
            const translateY = scrolled * 0.5;
            const scale = 1 + (scrolled / heroHeight) * 0.3;
            
            heroName.style.opacity = opacity;
            heroName.style.transform = `perspective(1000px) rotateX(10deg) translateY(${translateY}px) scale(${scale})`;
            
            heroSubtitle.style.opacity = opacity;
            heroSubtitle.style.transform = `perspective(1000px) rotateX(5deg) translateY(${translateY * 0.7}px)`;
        }
    });
    
    // Mouse movement effect
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;
        
        const rotateY = percentX * 15;
        const rotateX = -percentY * 15;
        
        heroName.style.transform = `perspective(1000px) rotateX(${10 + rotateX}deg) rotateY(${rotateY}deg)`;
        heroSubtitle.style.transform = `perspective(1000px) rotateX(${5 + rotateX * 0.5}deg) rotateY(${rotateY * 0.5}deg)`;
    });
    
    // Reset on mouse leave
    hero.addEventListener('mouseleave', () => {
        heroName.style.transform = 'perspective(1000px) rotateX(10deg) rotateY(0deg)';
        heroSubtitle.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(0deg)';
    });
}

// Populate resume data into the DOM
function populateResumeData() {
    // Update About section
    const aboutSection = document.querySelector('#about .section-content');
    if (aboutSection) {
        const h2 = aboutSection.querySelector('h2');
        const p = aboutSection.querySelector('p');
        
        h2.textContent = resumeData.about.title;
        p.textContent = resumeData.about.description;
        
        // Add skills section
        if (resumeData.about.skills) {
            const skillsContainer = document.createElement('div');
            skillsContainer.className = 'skills-container';
            skillsContainer.innerHTML = `
                <h3>Core Skills</h3>
                <div class="skills-grid">
                    ${resumeData.about.skills.map(skill => `
                        <span class="skill-tag">${skill}</span>
                    `).join('')}
                </div>
            `;
            aboutSection.appendChild(skillsContainer);
        }
        
        // Add contact info
        if (resumeData.about.email || resumeData.about.phone || resumeData.about.location) {
            const contactInfo = document.createElement('div');
            contactInfo.className = 'contact-info';
            contactInfo.innerHTML = `
                ${resumeData.about.email ? `<p><strong>📧 Email:</strong> <a href="mailto:${resumeData.about.email}">${resumeData.about.email}</a></p>` : ''}
                ${resumeData.about.phone ? `<p><strong>📱 Phone:</strong> <a href="tel:${resumeData.about.phone}">${resumeData.about.phone}</a></p>` : ''}
                ${resumeData.about.location ? `<p><strong>📍 Location:</strong> ${resumeData.about.location}</p>` : ''}
            `;
            aboutSection.appendChild(contactInfo);
        }
    }
    
    // Populate Experience timeline
    const timeline = document.querySelector('.timeline');
    if (timeline) {
        timeline.innerHTML = '';
        resumeData.experience.forEach((exp, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            timelineItem.style.animationDelay = `${index * 0.1}s`;
            timelineItem.innerHTML = `
                <h3>${exp.title}</h3>
                <p class="company">${exp.company}</p>
                <p class="date">${exp.date}</p>
                <p class="description">${exp.description}</p>
                ${exp.technologies ? `
                    <div class="tech-tags">
                        ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                ` : ''}
            `;
            timeline.appendChild(timelineItem);
        });
    }
    
    // Populate Projects grid
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = '';
        resumeData.projects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            if (project.featured) {
                projectCard.classList.add('featured');
            }
            projectCard.style.animationDelay = `${index * 0.1}s`;
            projectCard.innerHTML = `
                <div class="project-image">
                    ${project.featured ? '<div class="featured-badge">Featured</div>' : ''}
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#1e90ff" stroke-width="2">
                            <animate attributeName="r" values="40;42;40" dur="2s" repeatCount="indefinite"/>
                        </circle>
                        <polygon points="50,20 80,80 20,80" fill="none" stroke="#ff5d87" stroke-width="2">
                            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="10s" repeatCount="indefinite"/>
                        </polygon>
                    </svg>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                    ${project.link ? `<a href="${project.link}" class="project-link">View Project →</a>` : ''}
                </div>
            `;
            projectsGrid.appendChild(projectCard);
        });
    }
    
    // Populate Achievements grid
    const achievementsGrid = document.querySelector('.achievements-grid');
    if (achievementsGrid && resumeData.achievements) {
        achievementsGrid.innerHTML = '';
        resumeData.achievements.forEach((achievement, index) => {
            const achievementCard = document.createElement('div');
            achievementCard.className = 'achievement-card';
            achievementCard.style.animationDelay = `${index * 0.1}s`;
            achievementCard.innerHTML = `
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-content">
                    <span class="achievement-category">${achievement.category}</span>
                    <h3>${achievement.title}</h3>
                    <p>${achievement.description}</p>
                </div>
            `;
            achievementsGrid.appendChild(achievementCard);
        });
    }
}

// Setup scroll animations for sections
function setupScrollAnimations() {
    const sections = document.querySelectorAll('.section-content');
    
    // Make first section visible immediately
    if (sections.length > 0) {
        sections[0].classList.add('visible');
        sections[0].style.opacity = '1';
        sections[0].style.transform = 'translateY(0)';
    }
    
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animate with GSAP if available
                if (typeof gsap !== 'undefined') {
                    gsap.from(entry.target, {
                        y: 50,
                        opacity: 0,
                        duration: 1,
                        ease: 'power3.out'
                    });
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Setup smooth navigation
function setupSmoothNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
    
    // Highlight active section in nav on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.section');
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

// Setup contact form
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject')?.value || 'Portfolio Contact';
            const message = document.getElementById('message').value;
            
            const submitButton = contactForm.querySelector('.btn-submit');
            const buttonText = submitButton.querySelector('.btn-text');
            const originalText = buttonText.textContent;
            
            buttonText.textContent = 'Sending...';
            submitButton.disabled = true;
            submitButton.style.opacity = '0.6';
            
            // Create mailto link
            const mailtoLink = `mailto:moneshmergu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}
Email: ${email}

Message:
${message}`)}`;
            
            // Open email client immediately
            window.location.href = mailtoLink;
            
            // Show success message
            setTimeout(() => {
                buttonText.textContent = 'Email Client Opened!';
                submitButton.style.background = 'linear-gradient(90deg, #00cc66, #00aa55)';
                submitButton.style.opacity = '1';
                
                // Reset form
                contactForm.reset();
                
                // Show success animation
                if (typeof gsap !== 'undefined') {
                    gsap.to(submitButton, {
                        scale: 1.05,
                        duration: 0.2,
                        yoyo: true,
                        repeat: 1
                    });
                }
                
                // Reset button after delay
                setTimeout(() => {
                    buttonText.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.style.background = '';
                }, 3000);
            }, 500);
        });
    }
}

// Setup scroll to top button
function setupScrollToTop() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    if (!scrollToTopBtn) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}