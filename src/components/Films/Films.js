import { connect } from "react-redux";

import PropTypes from "prop-types";

import "./Films.css";

import Grid from "../Grid";

function Films({ films }) {
  const gridData = {
    header: [
      "title",
      "episode_id",
      "opening_crawl",
      "director",
      "producer",
      "release_date",
    ],
    values: films,
    actions: [],
  };

  return (
    <div className="App">
      <h1>Star Wars Films</h1>
      <Grid data={gridData} />
    </div>
  );
}

Films.propTypes = {
  films: PropTypes.array,
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export default connect(mapStateToProps)(Films);
