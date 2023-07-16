import AddForm from "../../components/AddForm";
import { appointmentInputs } from "../../FormSource";

const AddAppointment = () => {

    return (
        <div>
            <AddForm inputs={appointmentInputs} title={"Add New Appoimtment"} />
        </div>
    );
}

export default AddAppointment