import { useGetAllSemestersQuery } from "../../../redux/features/academicSemister/acdemicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);

  return <div>AcademicSemester</div>;
};

export default AcademicSemester;
