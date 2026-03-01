const slots = [
  { top: '8%',   left: '12%' },
  { top: '15%',  left: '50%' },
  { top: '12%',  left: '88%' },
  { top: '35%',  left: '5%' },
  { top: '42%',  left: '35%' },
  { top: '38%',  left: '65%' },
  { top: '45%',  left: '92%' },
  { top: '65%',  left: '15%' },
  { top: '72%',  left: '48%' },
  { top: '68%',  left: '82%' },
  { top: '90%',  left: '10%' },
  { top: '88%',  left: '90%' }
]

const planets = slots.map((slot, i) => ({
  id: i,
  ...slot,
  size: `${Math.floor(Math.random() * 20) + 12}px`,
  delay: `-${Math.random() * 12}s`
}))

export default function BackgroundPlanets() {
  return (
    <>
      {planets.map(p => (
        <div 
          key={p.id}
          className="planet" 
          style={{ 
            top: p.top, 
            left: p.left, 
            width: p.size, 
            height: p.size, 
            animationDelay: p.delay,
            opacity: 0.3
          }} 
        />
      ))}
    </>
  )
}
