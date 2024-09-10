import Link from 'next/link'
import ButtonTypes from './Button'
import Button from './Button'


export default function Hero() {
  return (
    <section className="hero-section">
      <div className="information">
        <div>
          <h1>
            Flexible Marketing Expertise,
            <br />
            No Long-Term Contracts.
          </h1>
          <p>
            Adapt your marketing throughout the year. Hire us any month, only
            when YOU need.
          </p>
          <h2>GRAPHIC DESIGN - DIGITAL MARKETING - CONTENT CREATION</h2>
        </div>
        <div className="buttons">
          <Button lRef="#" type="btn-primary">Button 1</Button>
          <Button lRef="#" type="btn-secondary">Button 2</Button>
          {/*buttons*/}
        </div>
      </div>
    </section>
  )
}
