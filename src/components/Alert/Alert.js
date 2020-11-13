import PropTypes from "prop-types";
import { connect } from "react-redux";

import cx from "classnames";
import alertStyles from "./Alert.module.css";

//alertType: "success"/"fail". Not used yet.
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div
      key={alert.id}
      className={cx({
        [alertStyles.alert]: true,
        [alertStyles.fail]: alert.alertType === "fail",
      })}
    >
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
