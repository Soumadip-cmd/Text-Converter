import React from "react";
export default function Body(props) {
  return (
    <>
      <div className="container">
        <div className="row my-5 center">
          <div className="col-sm-10 col-md-6 col-lg-4">
            <div className="card" style={props.stylcard}>
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/5f917fe11a5e68f4b2302bcf/Treelight/960x0.jpg?format=jpg&width=960"
                className="card-img-top"
                alt="..."
              />
              <hr></hr>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-4">
            <div className="card" style={props.stylcard}>
              <img
                src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top size"
                alt="..."
              />
              <hr></hr>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-4">
            <div className="card" style={props.stylcard}>
              <img
                src="https://www.keysight.com/content/dam/keysight/en/img/ind/aerospace-defense/satellites/Satellite_1200x900.jpg?wid=399&hei=300"
                className="card-img-top"
                alt="..."
              />
              <hr></hr>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Here you found every things
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
