import { useEffect, useMemo, useRef, type CSSProperties } from 'react'
import lottie, { type AnimationItem } from 'lottie-web'
import { gsap } from 'gsap'
import './CinematicSplash.css'
import { interdimensionalPulseLottie } from './interdimensionalPulseLottie'

type CinematicSplashProps = {
  onComplete: () => void
}

const MIN_SPLASH_MS = 2800
const REDUCED_MOTION_MS = 700

function buildParticleSeed(count: number): Array<{ x: string; y: string; size: string; delay: string }> {
  return Array.from({ length: count }, (_, index) => {
    const x = `${Math.round((index * 73) % 100)}%`
    const y = `${Math.round((index * 37) % 100)}%`
    const size = `${2 + ((index * 17) % 7)}px`
    const delay = `${((index * 11) % 40) / 10}s`
    return { x, y, size, delay }
  })
}

export function CinematicSplash({ onComplete }: CinematicSplashProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const lottieRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)
  const logoRef = useRef<HTMLImageElement | null>(null)
  const progressRef = useRef<HTMLDivElement | null>(null)
  const hasCompletedRef = useRef(false)
  const particles = useMemo(() => buildParticleSeed(26), [])
  const dustParticles = useMemo(() => buildParticleSeed(16), [])
  const portalFlashes = useMemo(() => buildParticleSeed(12), [])
  const backdropFlashes = useMemo(() => buildParticleSeed(9), [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const splashDuration = reduceMotion ? REDUCED_MOTION_MS : MIN_SPLASH_MS

    let lottieAnimation: AnimationItem | undefined
    if (lottieRef.current) {
      lottieAnimation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: interdimensionalPulseLottie,
      })
    }

    const complete = () => {
      if (hasCompletedRef.current) {
        return
      }
      hasCompletedRef.current = true
      onComplete()
    }

    const timeline = gsap.timeline({
      defaults: { ease: 'power2.out' },
      onComplete: complete,
    })

    timeline
      .fromTo(
        rootRef.current,
        { opacity: 0.2 },
        { opacity: 1, duration: 0.45 },
      )
      .fromTo(
        ringRef.current,
        { scale: 0.72, rotate: -12, opacity: 0.25 },
        { scale: 1, rotate: 0, opacity: 1, duration: 0.9 },
        0.05,
      )
      .fromTo(
        logoRef.current,
        { scale: 0.72, opacity: 0, y: 10, rotate: -5 },
        { scale: 1, opacity: 1, y: 0, rotate: 0, duration: 0.8, ease: 'power3.out' },
        0.18,
      )
      .fromTo(
        '.cinematic-splash__particle',
        { opacity: 0, y: 18 },
        {
          opacity: 0.95,
          y: -8,
          duration: 0.5,
          stagger: { each: 0.03, from: 'random' },
        },
        0.25,
      )
      .fromTo(
        '.cinematic-splash__dust',
        { opacity: 0, y: 12, scale: 0.6 },
        {
          opacity: 0.45,
          y: -16,
          scale: 1,
          duration: 1.4,
          stagger: { each: 0.07, from: 'random' },
          ease: 'sine.out',
        },
        0.35,
      )
      .fromTo(
        '.cinematic-splash__portal-arc',
        { opacity: 0, scale: 0.8, rotate: -16 },
        {
          opacity: 0.8,
          scale: 1,
          rotate: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power2.out',
        },
        0.26,
      )
      .fromTo(
        '.cinematic-splash__portal-flash',
        { opacity: 0, scale: 0.35 },
        {
          opacity: 0.9,
          scale: 1,
          duration: 0.48,
          stagger: { each: 0.05, from: 'random' },
          yoyo: true,
          repeat: 1,
          ease: 'sine.inOut',
        },
        0.58,
      )
      .to(
        '.cinematic-splash__particle',
        {
          y: '-=30',
          opacity: 0,
          duration: 1.35,
          stagger: { each: 0.04, from: 'random' },
        },
        0.8,
      )
      .to(
        '.cinematic-splash__dust',
        {
          y: '-=36',
          opacity: 0,
          duration: 1.6,
          stagger: { each: 0.08, from: 'random' },
          ease: 'sine.inOut',
        },
        1,
      )
      .to(
        '.cinematic-splash__portal-arc',
        {
          rotate: 22,
          opacity: 0.3,
          duration: 1.1,
          stagger: 0.1,
          ease: 'sine.inOut',
        },
        1.04,
      )
      .to(
        ringRef.current,
        {
          rotate: 35,
          scale: 1.06,
          duration: 1.2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: 1,
        },
        0.55,
      )
      .to(
        logoRef.current,
        {
          filter: 'drop-shadow(0 0 16px rgba(136, 230, 255, 0.95)) drop-shadow(0 0 40px rgba(120, 180, 255, 0.4))',
          scale: 1.04,
          duration: 0.8,
          yoyo: true,
          repeat: 1,
        },
        0.8,
      )
      .to(
        logoRef.current,
        {
          x: 1.5,
          duration: 0.08,
          repeat: 7,
          yoyo: true,
          ease: 'none',
        },
        1.25,
      )
      .to(
        progressRef.current,
        { width: '100%', duration: splashDuration / 1000, ease: 'power1.inOut' },
        0,
      )
      .to(
        rootRef.current,
        { opacity: 0, duration: 0.45, ease: 'power2.in' },
        `>${Math.max(splashDuration / 1000 - 1.2, 0.1)}`,
      )

    const forceClose = window.setTimeout(complete, splashDuration + 1400)

    return () => {
      window.clearTimeout(forceClose)
      timeline.kill()
      lottieAnimation?.destroy()
    }
  }, [onComplete])

  return (
    <div className="cinematic-splash" ref={rootRef} aria-hidden>
      <div className="cinematic-splash__veil" />
      <div className="cinematic-splash__backdrop-flashes">
        {backdropFlashes.map((flash, index) => (
          <span
            key={`bg-flash-${index}`}
            className="cinematic-splash__backdrop-flash"
            style={
              {
                '--x': flash.x,
                '--y': flash.y,
                '--size': flash.size,
                '--duration': `${5 + ((index * 3) % 6)}s`,
                animationDelay: flash.delay,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="cinematic-splash__particles">
        {particles.map((particle, index) => (
          <span
            key={index}
            className={`cinematic-splash__particle ${index % 3 === 0 ? 'cinematic-splash__particle--far' : ''}`}
            style={{
              '--x': particle.x,
              '--y': particle.y,
              '--size': particle.size,
              animationDelay: particle.delay,
            } as CSSProperties}
          />
        ))}
        {dustParticles.map((particle, index) => (
          <span
            key={`dust-${index}`}
            className="cinematic-splash__dust"
            style={{
              '--x': particle.x,
              '--y': particle.y,
              '--size': particle.size,
              animationDelay: particle.delay,
            } as CSSProperties}
          />
        ))}
      </div>

      <div className="cinematic-splash__core" ref={ringRef}>
        <div className="cinematic-splash__orbital" />
        <div className="cinematic-splash__portal-arc arc-a" />
        <div className="cinematic-splash__portal-arc arc-b" />
        <div className="cinematic-splash__portal-arc arc-c" />
        <div className="cinematic-splash__lottie" ref={lottieRef} />
        <img
          ref={logoRef}
          className="cinematic-splash__logo"
          src="/logo/wakfu_logo.png"
          alt=""
          draggable={false}
        />
        <div className="cinematic-splash__portal-flashes">
          {portalFlashes.map((particle, index) => (
            <span
              key={`flash-${index}`}
              className="cinematic-splash__portal-flash"
              style={
                {
                  '--x': particle.x,
                  '--y': particle.y,
                  '--size': particle.size,
                } as CSSProperties
              }
            />
          ))}
        </div>
      </div>

      <div className="cinematic-splash__progress">
        <div className="cinematic-splash__progress-fill" ref={progressRef} />
      </div>
      <p className="cinematic-splash__status">Cargando dimensiones...</p>
    </div>
  )
}
