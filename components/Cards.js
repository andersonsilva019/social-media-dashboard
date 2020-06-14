
const Cards = () => (
  <div className="container">
    <div className="content">
      <ul>
        <li className="facebook">
          <header>
            <img src="/icon-facebook.svg" alt="icon-facebook"/>
            <strong>Anderson silva</strong>
          </header>
          <section className="followers">
            <h1>11220</h1>
            <span>FOLLOWERS</span>
          </section>
        </li>

        <li className="linkedin">
          <header>
            <img src="/icon-twitter.svg" alt="linkedin"/>
            <strong>Anderson Silva</strong>
          </header>
          <section className="followers">
            <h1>11220</h1>
            <span>FOLLOWERS</span>
          </section>
        </li>

        <li className="instagram">
          <header>
            <img src="/icon-instagram.svg" alt="instagram"/>
            <strong>Anderson silva</strong>
          </header>
          <section className="followers">
            <h1>11220</h1>
            <span>FOLLOWERS</span>
          </section>
        </li>

        <li className="github">
          <header>
            <img src="/icon-youtube.svg" alt="github"/>
            <strong>Anderson silva</strong>
          </header>
          <section className="followers">
            <h1>11220</h1>
            <span>FOLLOWERS</span>
          </section>
        </li>

      </ul>
    </div>

    <style jsx>{`
      .container {
        width: 100%;
        padding: 0 30px;
      }

      .content {
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
      }

      .content ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px 40px;
        margin-top: 50px;
      }

      .content li {
        height: 300px;
        background: hsl(228, 28%, 20%);
        border-radius: 4px;
        display:flex;
        flex-direction: column;
        align-items:center;
      }

      .content li header {
        display:flex;
        align-items: center;
        margin-top: 20px;
      }

      .content li header strong {
        margin-left: 10px;
        color: hsl(228, 34%, 66%);
        font-size: 14px;
      }

      .content li section.followers {
        display:flex;
        flex-direction: column;
        align-items: center;

        margin-top: 20px;
      }

      .content li section.followers h1 {
        font-size: 22px;
        color: #FFF;
      }

      .content li section.followers span {
        color: hsl(228, 34%, 66%);
        font-size: 18px;
        margin-top: 5px;
      }

      .content li.facebook {
        border-top: 6px solid hsl(208, 92%, 53%);
      }

      .content li.linkedin {
        border-top: 6px solid hsl(203, 89%, 53%);
      }

      .content li.instagram {
        border-top: 6px solid hsl(37, 97%, 70%);
      }

      .content li.github {
        border-top: 6px solid hsl(348, 97%, 39%);
      }
    
    `}</style>
  </div>
);

export default Cards;