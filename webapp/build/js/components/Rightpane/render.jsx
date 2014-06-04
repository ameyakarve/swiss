module.exports = function() {
  return (
    <div>
      <div className = "row">
        <Pagedisplay data = {this.props.data.pageData}/>
        <Pageeditor data = {this.props.data} />
      </div>
      {this.props.data.pageData.blank ? <div>Nothing added yet</div> : <div>Added a new page</div>}
    </div>
  )
};