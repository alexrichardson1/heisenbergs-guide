import { LinkContainer } from "react-router-bootstrap";
import "../styles/NoPageFound.css";

function NoPageFound() {
  return (
    <div>
      <LinkContainer to="/">
        <section className="container">
          <button data-hover="Go to Home">
            <div>404 Page Not Found</div>
          </button>
        </section>
      </LinkContainer>
    </div>
  );
}

export default NoPageFound;