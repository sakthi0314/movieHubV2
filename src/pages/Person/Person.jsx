import React, { useEffect } from "react";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PersonKnownSlider from "../../Components/PersonKnownSlider/PersonKnownSlider";
import { request } from "../../Services/request";
import getPersonCreditAction from "../../store/actions/getPersonCreditAction";
import getPersonInfoAction from "../../store/actions/getPersonInfoAction";
import getPersonKnownAction from "../../store/actions/getPersonKnownAction";
import TableContent from "../../Components/TableContent/TableContent";
import "./Person.scss";
import CastPersonInfo from "../../Components/CastPersonInfo/CastPersonInfo";

const Person = () => {
  const { person } = useSelector((state) => state.personInfo);
  const { personKnowns } = useSelector((state) => state.personKnow);
  const { credits } = useSelector((state) => state.personCredit);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [type, setType] = useState("combined_credits");

  // Current Year
  const data = new Date();
  const currentYear = data.getFullYear();

  useEffect(() => {
    dispatch(getPersonInfoAction(id));
    dispatch(getPersonKnownAction(id));
    window.scroll(0, 0);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(getPersonCreditAction(id, type));
    // eslint-disable-next-line
  }, [type]);

  return (
    <div className="person">
      <div className="person__container">
        <div className="person__info">
          <div className="person__info--profile">
            <LazyLoadImage
              effect="blur"
              src={
                person.profile_path
                  ? `${request.IMG_URL}/${person.profile_path}`
                  : `${request.NO_IMG}`
              }
              alt={person.id}
            />
          </div>

          <ul className="person__info--peronal">
            <li className="person__info--one">
              <h4>Personal Info</h4>
            </li>

            <li className="person__info--two">
              <h4>Known For</h4>
              <p>{person.known_for_department || "-"}</p>
            </li>

            <li className="person__info--three">
              <h4>Known Credits</h4>
              <p>{person.popularity?.toFixed(2) || "-"} </p>
            </li>

            <li className="person__info--four">
              <h4>Gender</h4>
              <p>{person.gender === 2 ? "Male" : "Female" || "-"}</p>
            </li>

            <li className="person__info--five">
              <h4>Birthday</h4>
              <p>
                {person.birthday} ({currentYear - person.birthday?.slice(0, 4)})
              </p>
            </li>

            <li className="person__info--six">
              <h4>Place of Birth</h4>
              <p>{person.place_of_birth}</p>
            </li>

            <li className="person__info--seven">
              <h4>Also Known As</h4>
              {person.also_known_as
                ? person.also_known_as.map((as) => <p>{as || "-"}</p>)
                : null}
            </li>
          </ul>
        </div>
        <div className="person__content">
          <div className="person__content--name">
            <h1>{person.name}</h1>
          </div>

          <CastPersonInfo
            depart={person.known_for_department || "-"}
            Vote={person.popularity?.toFixed(2) || "-"}
            gender={person.gender === 2 ? "Male" : "Female" || "-"}
            birthday={person.birthday}
            Place={person.place_of_birth}
            KnownAs={person.also_known_as}
          />

          <div className="person__content--bio">
            <h1>Biography</h1>
            <p>
              {person.biography ||
                (person.biography === "" &&
                  `we don't have ${person.name} biography`)}
            </p>
          </div>

          <div className="person__content--known">
            <h1>Known For</h1>
            <PersonKnownSlider personKnowns={personKnowns} />
          </div>

          <div className="person__content--collection">
            <header>
              <h1>Acting</h1>
              <select name="type" onChange={(e) => setType(e.target.value)}>
                <option value="combined_credits">All</option>
                <option value="movie_credits">Movie</option>
                <option value="tv_credits">Tv Shows</option>
              </select>
            </header>
            <main>
              <TableContent credits={credits} />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
