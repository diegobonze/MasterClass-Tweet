import { Sparkle } from "phosphor-react";
import './Header.css'

interface headerProps {
  title: string
}

export function Header(porps: headerProps) {
  return (
    <div className="timeline-header">
            {porps.title}
            <Sparkle />
          </div>
  )
}