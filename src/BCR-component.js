
function BCR_Comp(props) {
  return (
    <div className="container">
  

      <div>
        <div className="bcr-title1">
          <h1> {props.title1}</h1>
        </div>
        <div className="bcr-title2">
          <h1> {props.title2}</h1>
        </div>

        <div>
          <p className="content-container">{props.content}</p>
        </div>
      </div>
    </div>
  );
}
export default BCR_Comp;
