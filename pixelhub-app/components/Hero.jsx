import ButtonTypes from './Button'


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
          <ButtonTypes variant="contained" background="#4BDBD8" color="#133642">Button1</ButtonTypes>
          <ButtonTypes variant="outlined" background="rgba(0,0,0,0)">Button2</ButtonTypes>
          {/*buttons*/}
        </div>
      </div>
    </section>
  )
}
