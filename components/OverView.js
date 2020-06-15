
const ListOverView = ({ children }) => (
  <ul>
    {children}
  <style jsx>{`
    ul {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px 40px;

      margin-top: 20px;
    }
  
  `}</style>
  </ul>
);


const OverView = () => (
  <div className="container">
    <div className="content">
      <header>
        <h1>OverView - Today</h1>
      </header>

      <ListOverView>
        <li>

        </li>
        <li>

        </li>
        <li>

        </li>
        <li>

        </li>
        <li>

        </li>
        <li>

        </li>
        <li>

        </li>
        <li>

        </li>
      </ListOverView>
    </div>

    <style jsx>{`
      .container {
        padding: 0 30px;
        width: 100%;
      }

      .content {
        width: 100%;
        max-width: 1440px;
        margin: 20px auto;
      }

      .content header h1 {
        color: #FFF;
      }

      .content li {
        height: 150px;
        background: hsl(228, 28%, 20%);
        border-radius: 4px;
        display:flex;
        flex-direction: column;
        align-items:center;
      }

    `}</style>
  </div>
);

export default OverView;