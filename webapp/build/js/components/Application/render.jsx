module.exports = function() {
  return (
    <div className="container">
      <div className="row">
        <Navbar/>
      </div>
      <div className="row">
        <div className="col-md-3">
          <Leftpane/>
        </div>
        <div className="col-md-9">
          <Rightpane/>
        </div>
      </div>
    </div>
  )
};