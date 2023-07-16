
import { useLoaderData, useParams } from "react-router-dom";
import { appointmentInputs } from "../../FormSource";
import UpdateForm from "../../components/UpdateForm";
import { findById } from "../../helper/helper";

export async function UpdateAppointmentLoader({ params }) {
  const oldData = findById(params);

  return { oldData };
}

const UpdateAppointment = () => {
  const { oldData } = useParams()

  return (
    <div>
      <UpdateForm inputs={appointmentInputs} oldData={oldData} />
    </div>
  );
};

export default UpdateAppointment;
