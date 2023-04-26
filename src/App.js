import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="div1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgzOoeWAe9w4YTYMye3LNwVWU2QVptuu07w&usqp=CAU"
          alt=""
        />
        <p>
          {" "}
          Create a webpage with a color scheme using at least five different
          colors.
        </p>
        <h3>2 years</h3>
      </div>
      <div className="div2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8IG7FnEVxP9TW7ACKVhHyAEna8dNxFHbNg&usqp=CAU"
          alt=""
        />
        <p>
          {" "}
          Create a webpage with a color scheme using at least five different
          colors.
        </p>
        <h3>3 years</h3>
      </div>
      <div className="div3">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <p>
          {" "}
          Create a webpage with a color scheme using at least five different
          colors.
        </p>
        <h3>2 years</h3>
      </div>
      <div className="div4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3R3Sa0RiqNJKxQaT6s_aUWfUwIMfTdTrxvg&usqp=CAU"
          alt=""
        />
        <p>
          {" "}
          Create a webpage with a color scheme using at least five different
          colors.
        </p>
        <h3>3 years</h3>
      </div>
      <div className="div5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmPczANSUN8UiFptja-3C9Qs-Yx7-6yVnGQ&usqp=CAU"
          alt=""
        />
        <p>
          {" "}
          Create a webpage with a color scheme using at least five different
          colors.
        </p>
        <h3>2 years</h3>
      </div>
      <div className="div6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmPczANSUN8UiFptja-3C9Qs-Yx7-6yVnGQ&usqp=CAU"
          alt=""
        />
        <p>
          {" "}
          Create a webpage with a color scheme using at least five different
          colors.
        </p>
        <h3>2 years</h3>
      </div>
      <div className="div2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8IG7FnEVxP9TW7ACKVhHyAEna8dNxFHbNg&usqp=CAU"
          alt=""
        />
        <p>
          {" "}
          Create a webpage with a color scheme using at least five different
          colors.
        </p>
        <h3>3 years</h3>
      </div>
      <div className="div2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8IG7FnEVxP9TW7ACKVhHyAEna8dNxFHbNg&usqp=CAU"
          alt=""
        />
        <p>
          {" "}
          Create a webpage with a color scheme using at least five different
          colors.
        </p>
        <h3>3 years</h3>
      </div>
      <div className="div2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8IG7FnEVxP9TW7ACKVhHyAEna8dNxFHbNg&usqp=CAU"
          alt=""
        />
        <p>
          {" "}
          Create a webpage with a color scheme using at least five different
          colors.
        </p>
        <h3>3 years</h3>
      </div>
    </div>
  );
}
