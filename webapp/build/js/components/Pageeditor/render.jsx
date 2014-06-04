module.exports = function() {
  return (
    <div className = "col-md-3">
      {this.props.data.menuState.topLevel ? <TopLevelMenu /> : null}
      {this.props.data.menuState.editMedia ? <EditMedia /> : null}
      {this.props.data.menuState.pickLayout ? <LayoutPicker /> : null}
      {this.props.data.menuState.addMedia ? <AddMedia /> : null}
    </div>
  )
};