
const Header = () => (
  <div className="container">
    <div className="content">
      <section>
        <h1>Social Media Dashboard</h1>
        <strong> Total followers: <span>25.000</span></strong>
      </section>

      <span>Dark Mode</span>
    </div>

    <style jsx>{`
      .container {
        padding: 0 30px;
        width: 100%;
        background: hsl(230, 17%, 14%);
      }

      .content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        max-width: 1440px;
        height: 90px;
        margin: 0px auto;
      }

      .content section h1 {
        color: #FFF;
      }

      .content section strong {
        color: hsl(228, 34%, 66%);
        font-size: 14px;
      }

      .content section span {
        color: hsl(228, 34%, 66%);
        font-size: 14px;
      }

      .content span {
        color: hsl(228, 34%, 66%);
        font-weight: bold;
      }
    
    `}</style>
  </div>
);

export default Header;