// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { useSnackbar } from "notistack";

let salesAxios;

const { enqueueSnackbar, closeSnackbar } = useSnackbar();

const apiGetSales = async () => {
  setLoading(true);
  await axios
    .get(
      `${process.env.REACT_APP_SERVER_SCRIPT_HOST}/inventory/client/:id/get_sales`,
    )
    .then((response) => {
      salesAxios = response.data.data;
      console.log("salesAxios: ", response);
      if (response.data.status === 201) {
        setLoading(false);
        enqueueSnackbar(`${response.data.message}`, {
          variant: "success",
          autoHideDuration: 3000,
          ContentProps: {
            style: { fontSize: "16px", fontWeight: "bold" },
          },
        });
      } else {
        enqueueSnackbar(`${response.data.message}`, {
          variant: "error",
          autoHideDuration: 3000,
          ContentProps: {
            style: { fontSize: "16px", fontWeight: "bold" },
          },
        });
        setLoading(false);
      }
    })
    .catch((error) => {
      enqueueSnackbar(`error: something went wrong!`, {
        variant: "error",
        autoHideDuration: 3000,
        ContentProps: {
          style: { fontSize: "16px", fontWeight: "bold" },
        },
      });
      console.log(error);
      setLoading(false);
    });
};

useEffect(() => {
  apiGetSales();
}, []);
