
function Global_Comp(props) {
  return (
    <div className="container">
      <div className="image-container">
        <img src={props.img}></img>
      </div>

      <div>
        <div className="title1">
          <h1> {props.title}</h1>
        </div>

        <div>
          <p className="content-container">{props.content}</p>
        </div>
      </div>
    </div>
  );
}
export default Global_Comp;
