import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";

const CampersList = () => {
  const campers = useSelector(selectCampers);
  console.log(campers);
  return <div>CampersList</div>;
};

export default CampersList;
