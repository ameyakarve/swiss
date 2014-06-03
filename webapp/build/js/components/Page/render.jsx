module.exports = function() {
  return (
    <div>
      <div>{this.props.data.page}</div>
      <div>
        {this.props.index === 0 ? <button disabled> Up </button> : <button onClick={this.movePageUp}>Up</button> }
        {this.props.index === this.props.data.totalPages - 1 ? <button disabled> Down </button> : <button onClick={this.movePageDown}>Down</button> }
      </div>
    </div>
  )
};