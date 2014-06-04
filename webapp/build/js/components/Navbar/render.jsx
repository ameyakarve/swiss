var Nav;
module.exports = function() {
    return (
    <nav className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle Navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand">Swiss</a>
        </div>
        {/* Collect the nav links, forms, and other content for toggling */}
        <div id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><a href="#">Undo</a></li>
            <li><a href="#">Redo</a></li>
            <li><a href="#">Preview</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};