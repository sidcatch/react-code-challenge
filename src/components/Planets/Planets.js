import { useState, useEffect } from "react";
import { connect } from "react-redux";

import { loadPlanets } from "../../actions/planets";
import { loadFilms } from "../../actions/films";
import { loadResidents } from "../../actions/residents";

import PropTypes from "prop-types";

import "./Planets.css";

import Grid from "../Grid";
import PlanetForm from "../PlanetForm";

function Planets({ planets, loadPlanets, loadFilms, loadResidents, history }) {
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    loadPlanets();
  }, [loadPlanets]);

  const closeForm = () => {
    setFormOpen(false);
  };
  const openForm = () => {
    setFormOpen(true);
  };

  const gridData = {
    header: [
      "name",
      "rotation_period",
      "orbital_period",
      "diameter",
      "climate",
      "gravity",
      "terrain",
      "surface_water",
      "population",
    ],
    values: planets,
    actions: [
      {
        label: "Go to Films",
        action: (row) => {
          loadFilms(row.films);
          history.push({ pathname: "/films" });
        },
        showAction: (row) => {
          return !(row.films.length === 0);
        },
      },
      {
        label: "Go to Residents",
        action: (row) => {
          loadResidents(row.residents);
          history.push({ pathname: "/residents" });
        },
        showAction: (row) => {
          return !(row.residents.length === 0);
        },
      },
      {
        label: "Planet Details",
        action: (row, index) => {
          history.push({ pathname: `/planet-details/${index}` });
        },
        showAction: (row) => {
          return true;
        },
      },
      {
        label: "Open Form",
        action: () => {
          openForm();
        },
        showAction: (row) => {
          return true;
        },
      },
    ],
  };

  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
      <Grid data={gridData} />
      {formOpen && <PlanetForm closeForm={closeForm} />}
    </div>
  );
}

Planets.propTypes = {
  planets: PropTypes.array,
  loadPlanets: PropTypes.func.isRequired,
  loadFilms: PropTypes.func.isRequired,
  loadResidents: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  planets: state.planets.results,
});

const mapDispatchToProps = {
  loadPlanets,
  loadFilms,
  loadResidents,
};

export default connect(mapStateToProps, mapDispatchToProps)(Planets);
