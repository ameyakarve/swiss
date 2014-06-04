module.exports = function() {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Page Editor</h3>
      </div>
      <div className="panel-body">
        <button type="button" className="btn btn-default btn-lg btn-block" onClick = {this.selectPageLayout}>Page Layout</button>
        <button type="button" className="btn btn-default btn-lg btn-block" onClick = {this.selectPageMedia}>Page Media</button>
      </div>
    </div>
  )
};