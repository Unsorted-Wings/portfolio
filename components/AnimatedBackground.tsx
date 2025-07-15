"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [beams, setBeams] = useState<Array<{
    id: number;
    x: number;
    y: number;
    color: string;
    speed: number;
  }>>([]);
  
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
    life: number;
    maxLife: number;
  }>>([]);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Simple cursor spring
  const cursorXSpring = useSpring(cursorX, { damping: 20, stiffness: 200 });
  const cursorYSpring = useSpring(cursorY, { damping: 20, stiffness: 200 });

  // Grid configuration
  const gridSize = 50; // Same as CSS grid

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isClient, cursorX, cursorY]);

  // Beam and particle animation logic
  useEffect(() => {
    if (!isClient) return;

    let animationId: number;
    let beamId = 0;
    let particleId = 0;

    const createBeam = () => {
      const screenWidth = window.innerWidth;
      
      // Start at a random grid column at the top
      const startX = Math.floor(Math.random() * (screenWidth / gridSize)) * gridSize;
      
      // Random colors
      const colors = [
        'rgb(59, 130, 246)', // Blue
        'rgb(16, 185, 129)', // Emerald
        'rgb(139, 92, 246)', // Violet
        'rgb(236, 72, 153)', // Pink
        'rgb(251, 146, 60)', // Orange
        'rgb(34, 197, 94)',  // Green
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];

      return {
        id: beamId++,
        x: startX,
        y: -50, // Start above screen
        color,
        speed: 3 + Math.random() * 2 // Random speed between 3-5
      };
    };

    const createExplosion = (x: number, y: number, color: string) => {
      const explosionParticles = [];
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const speed = 2 + Math.random() * 3;
        explosionParticles.push({
          id: particleId++,
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1, // Slight upward bias
          color,
          life: 60, // 60 frames
          maxLife: 60
        });
      }
      return explosionParticles;
    };

    const updateAnimation = () => {
      const screenHeight = window.innerHeight;
      
      // Update beams
      setBeams(prevBeams => {
        let updatedBeams = prevBeams.map(beam => ({
          ...beam,
          y: beam.y + beam.speed
        }));

        // Check for collisions with bottom and create explosions
        const collidedBeams = updatedBeams.filter(beam => beam.y >= screenHeight - 20);
        if (collidedBeams.length > 0) {
          setParticles(prevParticles => {
            const newExplosions = collidedBeams.flatMap(beam => 
              createExplosion(beam.x, screenHeight - 10, beam.color)
            );
            return [...prevParticles, ...newExplosions];
          });
        }

        // Remove collided beams
        updatedBeams = updatedBeams.filter(beam => beam.y < screenHeight - 20);

        return updatedBeams;
      });

      // Update particles
      setParticles(prevParticles => {
        return prevParticles
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vy: particle.vy + 0.1, // Gravity
            life: particle.life - 1
          }))
          .filter(particle => particle.life > 0);
      });

      // Add new beam occasionally
      setBeams(prevBeams => {
        if (Math.random() < 0.02 && prevBeams.length < 3) { // Max 3 beams
          return [...prevBeams, createBeam()];
        }
        return prevBeams;
      });
    };

    const animate = () => {
      updateAnimation();
      animationId = requestAnimationFrame(animate);
    };

    // Start with one beam
    setBeams([createBeam()]);
    animate();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isClient, gridSize]);

  if (!isClient) {
    return <div className="fixed inset-0 pointer-events-none" />;
  }

  return (
    <>
      {/* Minimal grid pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            opacity: 0.02,
          }}
        />
      </div>

      {/* Falling beams and explosion particles */}
      <div className="fixed inset-0 pointer-events-none z-[-10] overflow-hidden">
        {/* Render beams */}
        {beams.map(beam => (
          <div
            key={beam.id}
            className="absolute"
            style={{
              left: beam.x - 2,
              top: beam.y - 30,
              width: '4px',
              height: '30px',
              background: `linear-gradient(180deg, transparent, ${beam.color})`,
              boxShadow: `0 0 8px ${beam.color}, 0 0 16px ${beam.color}60`,
              borderRadius: '2px',
            }}
          />
        ))}
        
        {/* Render explosion particles */}
        {particles.map(particle => {
          const opacity = particle.life / particle.maxLife;
          const size = 3 + (1 - opacity) * 2; // Particles get bigger as they fade
          
          return (
            <div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                left: particle.x - size/2,
                top: particle.y - size/2,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: particle.color,
                opacity: opacity * 0.8,
                boxShadow: `0 0 4px ${particle.color}80`,
              }}
            />
          );
        })}
      </div>

      {/* Simple cursor follow */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {/* Clean cursor dot */}
        <motion.div
          className="absolute w-2 h-2 bg-foreground/80 rounded-full"
          style={{
            left: cursorX,
            top: cursorY,
            transform: "translate(-50%, -50%)",
          }}
        />
        
        {/* Simple following ring */}
        <motion.div
          className="absolute w-8 h-8 border border-foreground/40 rounded-full"
          style={{
            left: cursorXSpring,
            top: cursorYSpring,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </>
  );
}