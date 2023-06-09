import { Button } from "@mui/material";
import PropTypes from "prop-types";
export default function ModButton(props) {
  return (
    <div>
      <Button sx={{ color: "teal" }} onClick={props.onClick}>
        {props.buttonTitle}
      </Button>
    </div>
  );
}

ModButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};
