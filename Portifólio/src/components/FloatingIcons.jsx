import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiJavascript, SiVite, SiNetlify, SiSupabase, SiPostman } from 'react-icons/si'

const icones = [
  { Icon: FaHtml5,      top: '6%',  left: '1.5%',  size: 30, anim: 'floatUp',   duration: '7s',   delay: '0s'   },
  { Icon: SiJavascript, top: '21%', left: '2%',    size: 26, anim: 'floatDown', duration: '9s',   delay: '1s'   },
  { Icon: FaReact,      top: '37%', left: '1%',    size: 34, anim: 'spinIcon',  duration: '12s',  delay: '0s'   },
  { Icon: FaNodeJs,     top: '54%', left: '2%',    size: 28, anim: 'floatUp',   duration: '8s',   delay: '2s'   },
  { Icon: FaGitAlt,     top: '70%', left: '1.5%',  size: 28, anim: 'floatDown', duration: '10s',  delay: '1.5s' },
  { Icon: SiNetlify,    top: '86%', left: '2%',    size: 26, anim: 'floatUp',   duration: '6.5s', delay: '0.5s' },
  { Icon: FaCss3Alt,    top: '10%', right: '1.5%', size: 30, anim: 'floatDown', duration: '8.5s', delay: '1.2s' },
  { Icon: FaJava,       top: '26%', right: '1%',   size: 32, anim: 'floatUp',   duration: '7.5s', delay: '2.5s' },
  { Icon: SiVite,       top: '44%', right: '2%',   size: 26, anim: 'floatDown', duration: '9.5s', delay: '0.8s' },
  { Icon: SiSupabase,   top: '62%', right: '1.5%', size: 28, anim: 'floatUp',   duration: '11s',  delay: '1.8s' },
  { Icon: SiPostman,    top: '78%', right: '2%',   size: 26, anim: 'floatDown', duration: '8s',   delay: '3s'   },
]

function FloatingIcons() {
  return (
    <>
      {icones.map(({ Icon, top, left, right, size, anim, duration, delay }, index) => (
        <div
          key={index}
          className="floating-icon"
          style={{
            top,
            left,
            right,
            fontSize: size,
            animation: `${anim} ${duration} ease-in-out ${delay} infinite, glowIconPulse 3s ease-in-out ${delay} infinite`,
          }}
        >
          <Icon />
        </div>
      ))}
    </>
  )
}

export default FloatingIcons
