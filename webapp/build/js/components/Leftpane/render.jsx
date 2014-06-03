module.exports = function() {
  return (

    <div className="panel panel-default">
      <div className="panel-heading">Pages</div>
      <div className="panel-body">
        <div>
          {
            _.pipeline(
              this.props.data.pages,
              _.reverse,
              _.into_array
            ).map(function(page, i) {
                return <Page data={page} index={i}/>
              })
          }
        </div>
        <div>
          <button type="button" className="btn btn-default" onClick={this.addPage}>Add Page</button>
        </div>
        <div>
          Current page: {this.props.data.currentPage},
          Total pages: {this.props.data.totalPages}
        </div>
      </div>
    </div>
  );
};