import { connect } from "react-redux";

import PropTypes from "prop-types";

import "./Residents.css";

import Grid from "../Grid";

function Residents({ residents }) {
  const gridData = {
    header: [
      "name",
      "height",
      "mass",
      "hair_color",
      "skin_color",
      "eye_color",
      "birth_year",
      "gender",
    ],
    values: residents,
    actions: [],
  };

  return (
    <div className="App">
      <h1>Star Wars Residents</h1>
      <Grid data={gridData} />
    </div>
  );
}

Residents.propTypes = {
  residents: PropTypes.array,
};

const mapStateToProps = (state) => ({
  residents: state.residents,
});

export default connect(mapStateToProps)(Residents);
