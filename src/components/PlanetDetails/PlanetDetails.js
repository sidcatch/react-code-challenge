import { connect } from "react-redux";

import PropTypes from "prop-types";

import "./PlanetDetails.css";

import Grid from "../Grid";

function PlanetDetails({ planets, match }) {
  let planet = planets[match.params.id];

  const gridData = {
    header: [
      /* "name", */
      "rotation_period",
      "orbital_period",
      "diameter",
      "climate",
      "gravity",
      "terrain",
      "surface_water",
      "population",
    ],
    values: [{ ...planet }],
    actions: [],
  };

  return (
    <div className="App">
      <h1>{planet.name}</h1>
      <Grid data={gridData} />
    </div>
  );
}

PlanetDetails.propTypes = {
  planets: PropTypes.array,
};

const mapStateToProps = (state) => ({
  planets: state.planets.results,
});

export default connect(mapStateToProps)(PlanetDetails);
