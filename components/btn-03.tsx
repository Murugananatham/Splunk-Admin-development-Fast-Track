"use client"

import { cn } from "@/lib/utils"
import { motion, useAnimation } from "motion/react"
import { Magnet, Rocket } from "lucide-react"
import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"

interface Btn03Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  particleCount?: number
  attractRadius?: number
}

interface Particle {
  id: number
  x: number
  y: number
}

export default function Btn03({ className, particleCount = 12, attractRadius = 50, ...props }: Btn03Props) {
  const [isAttracting, setIsAttracting] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const particlesControl = useAnimation()

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 360 - 180,
      y: Math.random() * 360 - 180,
    }))
    setParticles(newParticles)
  }, [particleCount])

  const handleInteractionStart = useCallback(async () => {
    setIsAttracting(true)
    await particlesControl.start({
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    })
  }, [particlesControl])

  const handleInteractionEnd = useCallback(async () => {
    setIsAttracting(false)
    await particlesControl.start((i) => ({
      x: particles[i].x,
      y: particles[i].y,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }))
  }, [particlesControl, particles])

  return (
    <Button
      className={cn(
        "min-w-40 relative touch-none",
        "bg-yellow-100 dark:bg-yellow-900",
        "hover:bg-yellow-200 dark:hover:bg-yellow-800",
        "text-black dark:text-black",
        "border border-yellow-300 dark:border-yellow-700",
        "transition-all duration-300",
        className,
      )}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      {...props}
    >
      {particles.map((_, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{ x: particles[index].x, y: particles[index].y }}
          animate={particlesControl}
          className={cn(
            "absolute w-1.5 h-1.5 rounded-full",
            "bg-yellow-400 dark:bg-yellow-300",
            "transition-opacity duration-300",
            isAttracting ? "opacity-100" : "opacity-40",
          )}
        />
      ))}
      <span className="relative w-full flex items-center justify-center gap-2">
        <Rocket className={cn("w-4 h-4 transition-transform duration-300 h-4 w-4 text-yellow-700 mr-2", isAttracting && "scale-110")} />
        {isAttracting ? "Start entroll now..." : "Batch starts from April 7"}
      </span>
    </Button>
  )
}

