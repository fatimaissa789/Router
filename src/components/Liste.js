import React from "react";
import PropTypes from "prop-types";
import { Card, CardTitle, CardImg, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";

const Liste = ({ film: { Titre, Description, URL, note } }) => {
  return (
    <div className="col-4 mt-2">
      <Card style={{ height: `500px` }}>
        <CardImg
          top
          width="100%"
          style={{ height: `300px` }}
          src={URL}
          alt="Card image cap"
        />
        <CardTitle>
          <div className="row justify-content-center mt-2">
            <h6>{Titre}</h6>
          </div>
        </CardTitle>

        <CardBody>
          <div className="row">
            <CardText>
              <Link to={Description}>Resume</Link>
            </CardText>
          </div>
        </CardBody>

        {/*   <div className='row'>
            <Rate rating={Rate} />
          </div> */}
      </Card>
    </div>
  );
};
Liste.propTypes = {
  film: PropTypes.object.isRequired,
};
export default Liste;
