import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/campers/selectors";
import { useEffect } from "react";
import { fetchAllCampers } from "../../redux/campers/operations";
import CampersList from "../../components/CampersList/CampersList";

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong... try later again</p>}
      <div></div>
      <div>
        <CampersList />
      </div>
    </div>
  );
};

export default CatalogPage;
