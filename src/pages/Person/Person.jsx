import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PersonKnownSlider from "../../Components/PersonKnownSlider/PersonKnownSlider";
import { request } from "../../Services/request";
import getPersonInfoAction from "../../store/actions/getPersonInfoAction";
import getPersonKnownAction from "../../store/actions/getPersonKnownAction";
import "./Person.scss";

const Person = () => {
  const { person } = useSelector((state) => state.personInfo);
  const { personKnowns } = useSelector((state) => state.personKnow);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPersonInfoAction(id));
    dispatch(getPersonKnownAction(id));
    window.scroll(0, 0);
  }, []);

  return (
    <div className="person">
      <div className="person__container">
        <div className="person__info">
          {/* Image */}
          <div className="person__info--profile">
            <LazyLoadImage
              src={
                person.profile_path
                  ? `${request.IMG_URL}/${person.profile_path}`
                  : `${request.NO_IMG}`
              }
              effect="blur"
              alt={person.title}
            />
          </div>

          <ul className="person__info--personal">
            <li className="person__info--one">
              <span>Personal Info</span>
            </li>

            <li className="person__info--two">
              <span>Known For</span>
              <span>{person.known_for_department}</span>
            </li>

            <li className="person__info--three">
              <span>Known Credits</span>
              <span>{person.popularity}</span>
            </li>

            <li className="person__info--four">
              <span>Gender</span>
              <span>{person.gender === 2 ? "Male" : "Female"}</span>
            </li>

            <li className="person__info--four">
              <span>birthday</span>
              <span>{person.birthday}</span>
            </li>

            <li className="person__info--five">
              <span>Place of Birth</span>
              <span>{person.place_of_birth}</span>
            </li>
          </ul>
        </div>
        <div className="person__content">
          <div className="person__content--name">
            <h1>{person.name}</h1>
          </div>

          <div className="person__content--bio">
            <h1>Biography</h1>
            <p>{person.biography}</p>
          </div>

          <div className="person__content--know">
            <h1>Known As</h1>
            <PersonKnownSlider personKnowns={personKnowns} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
