import { getPersonInfo, getPersonCredit } from "../../../helper/index";

const PersonalInfo = ({ detail, credit }) => {
  const characterElements = credit.cast.map((item) => (
    <div key={item.id}>
      <span>{item.title}</span>
      <span>{item.character}</span>
    </div>
  ));
  const crewElemets = credit.crew.map((item) => (
    <div key={item.id}>
      <p>{item.title}</p>
    </div>
  ));
  return (
    <div>
      <div>{detail.name}</div>
      <div>
        {characterElements.length > 0 ? (
          <div>
            <h1>Actor</h1>
            {characterElements}
          </div>
        ) : null}
        {crewElemets.length > 0 ? (
          <div>
            <h1>Director</h1>
            {crewElemets}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PersonalInfo;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const personId = params.id;
  const detail = await getPersonInfo(personId);
  const credit = await getPersonCredit(personId);
  return {
    props: {
      detail,
      credit,
    },
  };
};
