import { Gender, Patient } from "../types";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import TransgenderIcon from '@mui/icons-material/Transgender';


interface PatientInfoTypes {
  data: Patient | null | undefined
}

interface ShowGenderTypes {
    gender: Gender
}

const ShowGender = (props: ShowGenderTypes) => {
  if (props.gender === Gender.Male) return <MaleIcon/>;
  if (props.gender == Gender.Female) return <FemaleIcon/>;
  return <TransgenderIcon/>;
};



const PatientInformation = (props: PatientInfoTypes) => {
  const person = props.data;
  if (!person) return <h1>Could not find the data</h1>;
  return (
    <>
      <div><h1>{person.name}</h1><ShowGender gender={person.gender}/></div>
      <p>Date of birth: {person.dateOfBirth}</p>
      <p>occupation: {person.occupation}</p>
    </>
  );
};


export default PatientInformation;